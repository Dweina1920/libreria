import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import Router from "./application/Router.js";



const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Router/>)




