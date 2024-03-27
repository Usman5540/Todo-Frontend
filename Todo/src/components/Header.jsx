import { useContext } from "react"
import { Link } from "react-router-dom"
import { Context } from "../main"
import server from "../main";
import axios from "axios";
import toast from "react-hot-toast";

 // Corrected: preventDefault() with capital D
function Header() {
  const { isAuthenticated, setIsauthenticated } = useContext(Context);

  const logoutHandler = async (e) => {
    try {
      e.preventDefault();
      await axios.get(`${server}/users/logout`, {
        withCredentials: true
      });
      toast.success("Logged out");
      setIsauthenticated(false);
    } catch (error) {
      toast.error(error.response.data.message);
      setIsauthenticated(false);
    }
  };

  return (
    <div>
      <nav>
        <div>
          <h2>Todo</h2>
        </div>
        <article className="nav">
          <Link to={"/"}>Home</Link>
          <Link to={"/profile"}>Profile</Link>
          {isAuthenticated ? (
            <div>
              <button onClick={logoutHandler}>Logout</button>
            {/* when is auth will true  */}
            </div>
          ) : (
            <Link to={"/login"}>Login</Link>
             // here is the actual thing which is handling login and logout functionality 
                  // when is auth will false 
          )}
        </article>
      </nav>
    </div>
  );
}

export default Header;
  {/* Link works like anker tag but does not render entire app simply move to the target */}