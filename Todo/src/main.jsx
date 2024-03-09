import { createRoot } from 'react-dom/client';
import Appwrapper from './Wrapper';
import React from 'react';
import './styles/app.css';

const server = "https://todo-api-production-d.up.railway.app/api/v1";

// Use createRoot to create the root of the React tree
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Appwrapper />
  </React.StrictMode>
);

export default server;
