import { createStore , applyMiddleware   } from "redux";
import reducer from "./reducer";
import thunk from 'redux-thunk'

// const rootReducer = combineReducers({app:reducer})
export const store = createStore(reducer, applyMiddleware(thunk));
