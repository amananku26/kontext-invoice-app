import { LOGIN_REQUEST, LOGIN_SUCCESS , LOGIN_FAILURE , REGISTER_SUCCESS, REGISTER_GOOGLE_SUCCESS} from "./actionTypes";

export const initState = {
  token:"",
  isLoading:false,
  isError:false,
  isAuth:false,
  error:true,
  message:"",
  registrationError: false
}

const reducer = (state =initState,{type,payload} )=>{
  switch(type){
    case LOGIN_REQUEST:
      return{
        ...state,
        isLoading:true
      }
      case LOGIN_SUCCESS:
      return{
        ...state,
        isLoading:false,
        token:payload.token,
        isAuth:true,
        isError:false,
        error:false

      }
      case LOGIN_FAILURE:
      return{
        ...state,
        isLoading:false,
        isError:true,
        error:true
      }

      case REGISTER_SUCCESS:
      return{
        ...state,
        isLoading:false,
        message:payload.message,
        registrationError:payload.error,
        isAuth:true,
        isError:false,
        error:false

      }
      case REGISTER_GOOGLE_SUCCESS:
        return{
          ...state,
          isLoading:false,
          isAuth:true,
          isError:false,
          error:false
        }
  

      default :
      return state
  }
}

export default reducer