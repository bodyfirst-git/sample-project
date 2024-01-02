import * as actionTypes from "../Types/Blog.Types";

const initialState = { isLoggedIn: false, user: null, blogs: [], blog: {} };

//reducer

export default function blogReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.NEW_BLOG_UPLOAD:
      return {
        ...state,
        isLoggedIn: false,
      };
    case actionTypes.NEW_BLOG_UPLOAD_FAILED:
      return {
        ...state,
        isLoggedIn: false,
      };
    case actionTypes.EDIT_BLOG:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
      };
    case actionTypes.EDIT_BLOG_FAILED:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case actionTypes.GET_ALL_BLOGS:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case actionTypes.GET_ALL_BLOGS_FAILED:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case actionTypes.DELETE_BLOG:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case actionTypes.DELETE_BLOG_FAILED:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case actionTypes.GET_INDIVIDUAL_BLOG:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case actionTypes.GET_INDIVIDUAL_BLOG_FAILED:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
}
