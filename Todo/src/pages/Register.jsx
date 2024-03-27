import axios from "axios"
import { useContext, useState } from "react"
import  server  from "../main"
import toast from 'react-hot-toast'
import { Context } from "../main"
import { Navigate } from "react-router-dom"
function Register() {
    const [name,setName]=useState()
    const [email,setemail]=useState()
    const [password,setPassword]=useState()
    // form will not submit anywhere rather sty at specified route and also prevent to load complete page
const {isAuthenticated, setIsauthenticated,loading,setLoading}=useContext(Context) 

const submitHandler = async (e) => {
     try {
       e.preventDefault(); // Corrected: preventDefault() with capital D
setLoading(true)// this hook will disable button untill the response will send back becasue that can take time so that is why for prevent unecessary click effects of the button 
    console.log(name,email,password)
    const {data} =  await axios.post(`${server}/users/new`, {
        name,
        email,
        password
    }, {
        headers: {
            withCredentials: true // Corrected: withCredentials
        }
    });
  toast.success(data.message) 
setLoading(false)
setIsauthenticated(true)
} catch (error) {
alert(error)
  setIsauthenticated(false)
  setLoading(false)
} 
}
  if (isAuthenticated) return <Navigate to={"/login"} />;
/* 
There are a couple of issues in your code:
The preventdefault() function should be preventDefault() with a capital "D". JavaScript is case-sensitive, so the function name should match exactly.
The axios.post() method takes the configuration object as the third parameter, not as a separate parameter. So, the headers object should be part of the configuration object.
The correct property name for passing credentials in Axios is withCredentials, not Credential.

*/
  return (

    <div>
     <section>
        <form  onSubmit={submitHandler} >
            <input type="text" placeholder="Name"
            onChange={(e)=>setName(e.target.value)}
            required
            />
            <input type="text" placeholder="Email"
             onChange={(e)=>setemail(e.target.value)}
             required/>
            <input type="text" placeholder="Password" 
             onChange={(e)=>setPassword(e.target.value)}
             required/>
            <button disabled={loading}type="submit">Sign Up</button>
          
        </form>
     </section>
    </div>
  )
}

export default Register
