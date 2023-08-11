const mongoose=require('mongoose');
const User=require('../models/user');

const ValidRegisterInput=require('../validation/Register');
const ValidLoginInput=require('../validation/login');

const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const cookie=require('js-cookie');

const tokenExpires=24*60*60;
//creating token
const createToken=(_id)=>{

    return jwt.sign({_id},'Horcruxes',{  //(id as payload, horcrux as secret key, expiretime)
        expiresIn:tokenExpires
    })
}



module.exports.signup_post= async (req,res)=>{

    const {errors,isValid}=ValidRegisterInput(req.body);
    
    if(!isValid)
    {
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

            const token=createToken(newUser._id);
            res.cookie('jwt',token,{httpOnly:true, maxAge:tokenExpires*1000});
            return res.status(201).json({newUser:newUser._id});
        }
    
}


module.exports.login_post= async (req,res)=>{

    const { error, isValid} =ValidLoginInput(req.body);

    if(!isValid){
     return res.status(400).json(error);
    }

    const email=req.body.email;
    const password=req.body.password;

    const user= await User.findOne({email});

    if(!user)
    {
        res.status(400).json('User Not found');
    }
    else{
      const auth = await bcrypt.compare(password,user.password);
      if(auth)
      {
        const token = jwt.sign({ userId: user._id }, 'Horcruxes', { expiresIn: '1h' });
        return res.status(200).json({ token }); 
      }
      res.status(400).json("incorrect password");
    }

}
