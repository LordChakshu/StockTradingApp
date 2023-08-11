import { SIGNUP_SUCCESS,SIGNUP_FAILURE,LOGIN_SUCCESS,LOGIN_FAILURE,LOGOUT } from "../action/types";

const initState={
    isAuthenticated:false,
    user:{},
    error:null,
    token:null
}

const authReducer=(state=initState,action)=>{

    switch(action.type){
        case SIGNUP_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
        error: null,
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        error: action.payload.error
      };
    
    case LOGIN_SUCCESS:
        return{
        ...state,
        isAuthenticated:true,
        user:action.payload.user,
        token:action.payload.token,
        error:null,
      };
    case LOGIN_FAILURE:
        return{
        ...state,
        isAuthenticated:false,
        error:action.payload.error
      };
    case LOGOUT:
        return{
            initState
      };
    default:
        return{
            state
      }

    }

}
export default authReducer;

