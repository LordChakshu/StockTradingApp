const Validator=require('validator');
const isEmpty=require('is-empty');

function validRegisterInput(data){
    
    let errors={ };
    data.firstName=!isEmpty(data.firstName)?data.firstName:"";
    data.lastName=!isEmpty(data.lastName)?data.lastName:"";
    data.email=!isEmpty(data.email)?data.email:"";
    data.password = !isEmpty(data.password) ? data.password : "";
    
    //Name validation
    if(Validator.isEmpty(data.firstName))
    {
        errors.firstName='Please Enter your First Name';
    }
    if(Validator.isEmpty(data.lastName))
    {
        errors.lastName='Please Enter your last Name';
    }
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