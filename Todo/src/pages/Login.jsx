import { useContext, useState } from "react"
import { Link, Navigate} from "react-router-dom"
import { Context } from "../main"
import toast from "react-hot-toast"
import axios from "axios"
import server from "../main"


function Login() {
   const [email,setemail]=useState()
    const [password,setPassword]=useState()
    const {isAuthenticated, setIsauthenticated,loading,setLoading}=useContext(Context)
    const submitHandler = async (e) => {
try {
  e.preventDefault(); // Corrected: preventDefault() with capital D
  setLoading(true)
    console.log(email,password)
    const {data} =  await axios.post(`${server}/users/login`, {
      
        email,
        password
    }, {
        headers: {
            withCredentials: true // Corrected: withCredentials
        }
    });
  toast.success(data.message) 
setIsauthenticated(true)
setLoading(false)
} catch (error) {
alert(error)
  setIsauthenticated(false)
  setLoading(false)

} 
}
if (isAuthenticated) return <Navigate  to={"/"}/>
  

  return (
    <div>
     <section>
        <form onSubmit={submitHandler}>
            <input type="text" placeholder="Email"
             onChange={(e)=>setemail(e.target.value)}
             required/>
            <input type="text" placeholder="Password" 
             onChange={(e)=>setPassword(e.target.value)}
             required/> 
            <button disabled={loading} type="submit">Login</button>
            <h1>Or</h1>
            <Link to={"/register"}>Sign Up </Link>
        </form>
     </section>
    </div>
  )
}

export default Login
