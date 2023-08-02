const Validator=require('validator');
const isEmpty=require('is-empty');

function validRegisterInput(data){
    
    let errors={};
    
    data.email=!isEmpty(data.email)?data.email:"";
    data.password = !isEmpty(data.password) ? data.password : "";
    
    //email Validation
    if (Validator.isEmpty(data.email)) {
        errors.email = 'Email is required';
    } 
    else if (!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid';
    }

      // password validation
    if (Validator.isEmpty(data.password)) {
        errors.password = 'Password is required';
    }

    if(!Validator.isLength(data.password,{min:6,max:20}))
    {
        errors.password='password must contain 6 or more characters';
    }

    return{
        errors,
        isValid:isEmpty(errors)
    };
    
};

module.exports=validRegisterInput;