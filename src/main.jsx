import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UpdateCoffee from './UpdateCoffee.jsx';
import AddCoffee from './AddCoffee.jsx';
import SIgnIn from './Components/SIgnIn.jsx';
import SIgnUp from './Components/SIgnUp.jsx';
import AuthProvider from './Components/AuthContext.jsx';
import Users from './Components/Users.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader:()=>fetch('http://localhost:5000/coffee')
  },
  {
    path:'/updateCoffee/:id',
    element:<UpdateCoffee></UpdateCoffee>,
    loader:({params})=> fetch(`http://localhost:5000/coffee/${params.id}`)
  },
  {
    path:'/addCoffee',
    element:<AddCoffee></AddCoffee>
  },
  {
    path:'/signIn',
    element:<SIgnIn></SIgnIn>
  },
  {
    path:'/signUp',
    element:<SIgnUp></SIgnUp>
  },
  {
    path:'/users',
    element:<Users></Users>,
    loader:()=> fetch('http://localhost:5000/users')
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
