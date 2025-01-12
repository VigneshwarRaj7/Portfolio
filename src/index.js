import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import Loading from './components/Loading/Loading';
import ClipLoader from "react-spinners/ClipLoader";
import Carousel from './components/Carousel/Carousel.js';
import AboutMe from './components/AboutMe/AboutMe.js';
import Experience from './components/Experience/Experience.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(


  
  <React.StrictMode>
    < App />
  </React.StrictMode>
);

const appRouter = createBrowserRouter(
  [
    {path:"/",
    element: <App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/projects",
        element:<Projects/>
      },
      {
        path:"/loading",
        element:<Loading/>
      },
      {
        path:"/carousel",
        element:<Carousel/>
      },
      {
        path:"/aboutme",
        element:<AboutMe/>
      },
      {
        path:"/experience",
        element:<Experience/>
      },
    ],
    // errorElement:<Error/>
  },
  ]  
) 
root.render(<RouterProvider router={appRouter}/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
