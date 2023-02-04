import {
    
    GET_USER, UPDATE_BIO,FOLLOW_USER,UNFOLLOW_USER
  } from "../actions/user.actions";

  const initialState = {};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return action.payload;
   case UPDATE_BIO : return{
    ...state,
    bio:action.playload
   };
   case FOLLOW_USER:
    return {
      ...state,
      following: [action.payload.idToFollow, ...state.following],
    };
  case UNFOLLOW_USER:
    return {
      ...state,
      following: state.following.filter(
        (id) => id !== action.payload.idToUnfollow
      ),
    };
    default:
      return state;
  }
}
