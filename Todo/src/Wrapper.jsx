// // Wrapper.jsx
// import  { createContext, useState } from "react";
// import App from "./App";

// export const Context = createContext({ isAuthenticated: false });

// const AppWrapper = () => {
//   const [isAuthenticated, setIsauthenticated] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [user, setUser] = useState({});

//   return (
//     <Context.Provider
//       value={{ isAuthenticated, setIsauthenticated, loading, setLoading, user, setUser }}
//     >
//       <App />
//     </Context.Provider>
//   );
// };

// export default AppWrapper;
