import React,{Component} from "react";
import { signup } from "../../action/authAction";
import { connect } from 'react-redux';
//import { useDispatch} from 'react-redux';



class Signup extends Component{
  constructor(){
    super();
  this.state={
    firstName:null,
    lastName:null,
    email:null,
    password:null,
    err:{}
  }
}

  handleChange=(e)=>{
    this.setState({
      [e.target.id]:e.target.value
    })
  }

  handleSubmit=async (e)=>{
    e.preventDefault();
    
    const newUser={
      firstName:this.state.firstName,
      lastName:this.state.lastName,
      email:this.state.email,
      password:this.state.password
    }
    console.log(newUser);
    

    //useDispatch(signup(newUser));
    this.props.signup(newUser);
    
  }
  
  render(){
    return(
    <div className="signup">
      <form onSubmit={this.handleSubmit}>
      <label htmlFor="name">first Name</label>
      <input type="text" id='firstName' onChange={this.handleChange}/>
      <label htmlFor="name">Last Name</label>
      <input type="text" id='lastName' onChange={this.handleChange}/>
      <label htmlFor="name">email</label>
      <input type="text" id='email' onChange={this.handleChange}/>
      <label htmlFor="name">password</label>
      <input type="text" id='password' onChange={this.handleChange}/>
      <button>Sign Up</button>
      </form>
    </div>
    )
  }
    
}
export default connect(null, { signup })(Signup);
//export default Signup;