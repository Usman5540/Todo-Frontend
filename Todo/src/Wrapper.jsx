 import { createContext ,useState} from "react"
 import App from "./App"
 export const Context=createContext({isAuthenticated:false})
 const Appwrapper=()=>{
   const[isAuthenticated,setIsauthenticated]=useState(false)// reload karny sy state empty ho jati hai
return (
     <Context.Provider value={
{   isAuthenticated,setIsauthenticated} }>
  <App />
   </Context.Provider>

)
}
export default Appwrapper

