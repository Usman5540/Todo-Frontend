import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Profile from "./pages/Profile";
import { Toaster } from 'react-hot-toast';
import { Fragment} from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {


  return (
    <>
      <Router>
        <Fragment>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>} />
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
