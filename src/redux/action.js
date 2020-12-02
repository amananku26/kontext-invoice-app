import { LOGIN_REQUEST, LOGIN_SUCCESS , LOGIN_FAILURE ,REGISTER_SUCCESS,REGISTER_GOOGLE_SUCCESS} from "./actionTypes";
import axios from "axios"

export const loginRequest = (payload) => ({
  type: LOGIN_REQUEST,
  payload
});

export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload
});

export const loginfailure = (payload) => ({
  type: LOGIN_FAILURE,
  payload
});


export const RegisterSuccess = (payload) => ({
  type: REGISTER_SUCCESS,
  payload
});

// https://masai-api-mocker.herokuapp.com/auth/register
export const registerUserData = (payload) => dispatch => {
  dispatch(loginRequest())
  return axios.post("https://masai-api-mocker.herokuapp.com/auth/register",{
    name:payload.name,
    email:payload.email,
    password:payload.password,
    username:payload.username,
    mobile:payload.mobile,
    description:payload.description
  })
  .then(res=>res.data)
  .then(res=> {
    if(res.error == true){
      alert("User Already Presend or Invalid Data Input")
    } else {
      return dispatch(RegisterSuccess(res))
    }
  })
  .catch(err=>dispatch(loginfailure(err)))
}

export const RegisterGoogleSuccess = (payload) => ({
  type: REGISTER_GOOGLE_SUCCESS,
  payload
});


export const googleRegister = (payload) => dispatch => {
  console.log(payload)
  if(payload.googleId > 0){
    return dispatch(RegisterGoogleSuccess(payload))
  }
}
// 
export const getUserData = (payload) => dispatch => {
  dispatch(loginRequest())
  return axios.post("https://masai-api-mocker.herokuapp.com/auth/login",{
    password:payload.password,
    username:payload.username,
  })
  .then(res=>res.data)
  .then(res=> dispatch(loginSuccess(res)))
  .catch(err=>dispatch(loginfailure(err)))
}