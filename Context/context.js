import { createContext, useReducer } from "react";
import {reducer} from '../src/Redux/Reducer/reducer'
export const PostsContext = createContext();

const PostsProvider=({ children }) => {
 
    const [ state, dispatch ] = useReducer(reducer, {
       list:[],
       details:{}
    });
  
    return (
      <PostsContext.Provider value={{state,dispatch}}>{children}</PostsContext.Provider>
    );
  };

  export default PostsProvider