import React, { Component } from "react";
//import { login } from "../../action/authAction";
//import { useDispatch} from 'react-redux';

class Login extends Component{
    
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            errors: {}
        };
    }
    handleChange=(e)=>{
        this.setState({
          [e.target.id]:e.target.value
        });
      }

    handleSubmit= async(e)=>{
        e.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        
    // useDispatch(login(userData));
    console.log(userData);

    this.props.login(userData);

    }
    render(){
        return(
    <div className="login">
        <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">email</label>
            <input type="text" id='email' onChange={this.handleChange}/>
            <label htmlFor="name">password</label>
            <input type="text" id='password' onChange={this.handleChange}/>
            <button>Login</button>
        </form>
    </div>
        )
    }
}
export default Login;