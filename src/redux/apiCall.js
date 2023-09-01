import axios from 'axios';
import {loginStart, loginSuccess, loginFailure} from './userRedux';
import { publicRequest } from '../request/requestMethods';
// import { useNavigate} from 'react-router-dom';



const LoginCall=(dispatch, user)=>{

  dispatch(loginStart());
  const getUser=async()=>{
    try {
      const res=await publicRequest.post('/auth/login',user)
      dispatch(loginSuccess(res.data));
    } catch (error) {
      dispatch(loginFailure())
      
    }
  }
  getUser();
};




export default LoginCall;