const mongoose=require('mongoose');
const User=require('../models/user');

const ValidRegisterInput=require('../validation/Register');
const ValidLoginInput=require('../validation/login');

const bcrypt=require('bcrypt');


module.exports.signup_post= async (req,res)=>{

    const {errors,isValid}=ValidRegisterInput(req.body);
    
    if(!isValid)
    {
     console.log(errors);
     return res.status(400).json(errors);
    }

    const user= await User.findOne({email:req.body.email});
        
        if(user){
            return res.status(400).json({email:'Email already Exists'});
        }
        else{
            const salt= await bcrypt.genSalt();
            const hashedPassword= await bcrypt.hash(req.body.password,salt);

            const newUser=await User.create({
                 firstName:req.body.firstName,
                 lastName:req.body.lastName,
                 email:req.body.email,
                 password:hashedPassword
            });
            return res.status(201).json(newUser);
        }
    }


module.exports.login_post= async (req,res)=>{

    const { error, isValid} =ValidLoginInput(req.body);

    if(!isValid){
     return res.status(400).json(error);
    }
    
}
