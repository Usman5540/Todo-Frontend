// main.jsx
import { createRoot } from 'react-dom/client';
import React, { createContext, useState } from 'react';
import './styles/app.css';
const server = "https://todo-api-production-d.up.railway.app/api/v1";
import App from "./App";

export const Context = createContext({ isAuthenticated: false });

const AppWrapper = () => {
  const [isAuthenticated, setIsauthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});

  return (
    <Context.Provider
      value={{ isAuthenticated, setIsauthenticated, loading, setLoading, user, setUser }}
    >
      <App />
    </Context.Provider>
  );
};

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);

export default server;
