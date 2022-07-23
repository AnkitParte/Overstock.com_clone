
import { createContext, useReducer } from "react";
import { AuthRed } from "./AuthRed";

export const AuthContext = createContext();

export default function AppContextProvider({children}){
    const init = {email:"",password:"",confirm:"",isAuth:false}
    const [person,Authdispatch] = useReducer(AuthRed,init);

    return(
        <AuthContext.Provider value={{person,Authdispatch}}>
            {children}
        </AuthContext.Provider>
    )
}