import { useContext } from "react"
import { Link } from "react-router-dom"
import { Context } from "../Wrapper"
import server from "../main";
import axios from "axios";
import toast from "react-hot-toast";


function Header() {

  const {isAuthenticated, setIsauthenticated}=useContext(Context)
  const logoutHandler = async (e) => {
try {
      e.preventDefault(); // Corrected: preventDefault() with capital D
    await axios.get(`${server}/users/logout`, {
      
    }, {
        headers: {
            withCredentials: true // Corrected: withCredentials
        }
    });
  toast.success("logged out") 
    
setIsauthenticated(false)
} catch (error) {
 toast.error(error.Response.data.message)
  setIsauthenticated(false)
} 
}
  return (
    <div>
       <nav >
           <div>
            <h2>Todo</h2>
           </div>
           <article className="nav">
            {/* Link works like anker tag but does not render entire app simply move to the target */}
            <Link to={"/"}>Home</Link>
            <Link to={"/profile"}>profile</Link>
            {isAuthenticated ? <div><button onClick={logoutHandler}>logout</button></div>:<Link to={"/login"}>login</Link>}
            
           </article>

    </nav>
    </div>
  )
}

export default Header