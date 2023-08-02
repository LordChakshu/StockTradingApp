const mongoose=require('mongoose');
const User=require('../models/user');
const ValidRegisterInput=require('../validation/Register');
const ValidLoginInput=require('../validation/login');


module.exports.signup_post=(req,res)=>{

    const { error , isValid} =ValidRegisterInput(req.body);
    
    if(!isValid)
    {
      res.status(400).json(error);
    }

    User.findOne({email:req.body.email}).then(user=>{
        
        if(user){
            res.status(400).json({email:'Email already Exists'});
        }
        else{
            const newUser=User.create({
                 email:req.body.email,
                 password:req.body.password
            });
            res.status(201).json(newUser);
            
        }
    })

}

module.exports.login_post= async (req,res)=>{

    const { error, isValid} =ValidLoginInput(req.body);

    if(!isValid){
     res.status(400).json(error);
    }
    
}
