import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Profile from "./pages/Profile";
import { Toaster } from 'react-hot-toast';
import { Fragment, useContext, useEffect,  } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import server from "./main";
import { Context } from "./main";
import axios from "axios";
function App() {
  
  const {setIsauthenticated}=useContext(Context)
//  const makeAPICall = async () => {
//   try {
//     const response = await axios.get(`${server}/users/all`, {withCredentials:true});
//     if (!response.ok) {
//       throw new Error('Failed to fetch user data');
//     }
//     const data = await response.json();
//     console.log({ data });
//     setIsauthenticated(true)
//   } catch (error) {
//     console.error('API call failed:', error);
//     setIsauthenticated(false)
//     // Handle the error, e.g., display an error message to the user
//   }
// };


//   useEffect(() => {
//     makeAPICall();
//   }, [])
 useEffect(() => {
    axios
      .get(`${server}/users/me`, {
        withCredentials: true,
      })
      .then((r) => {
   
        setIsauthenticated(true);
    console.log(r)
      })
      .catch(() => {
    
        setIsauthenticated(false);
    
      });
  }, []);


  return (
    <>
      <Router>
        <Fragment>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          <Toaster />
        </Fragment>
      </Router>
    </>
  );
}

export default App;
