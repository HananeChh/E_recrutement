import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Profilemod from './pages/Profilemod';
import Demandeemp2 from './pages/Demandeemp2';
import Demandeemp1 from './pages/Demandeemp1';
import Demandeemp3 from './pages/Demandeemp3';
import Demandeemp4 from './pages/Demandeemp4';
import Demandeemp0 from './pages/Demandeemp0';
import Profileu from './pages/Profileu';
import Homep from './pages/Homep';
import FindJob from './components/Findjob';
import Signupemp from './components/Signupemp';

import HireTalent from './components/HireTalent';
import AddJob from './components/AddJob';
import Statp from './pages/Statp';
import Inscemployer from './components/Inscemployer';
import Rolep from './pages/Demandeemp1 copy';
import Homeemp from './components/Homeemp';
import Statpemp from './pages/Statpemp';
import Login from './components/Login';
import Signupdem from './components/Signupdem';
import Receiver from './components/Receiver';
import Sender from './components/Sender ';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homep />,
  },
  {
    path: "/home/:id/profile",
    element: <Profileu />,
  },
  {
    path: "profile",
    element: <Profileu />,
  },
  {
    path: "modification profile",
    element: <Profilemod />,
  },
  {
    path: "demande d'emploie/2",
    element: <Demandeemp2 />,
  },
  {
    path: "demande d'emploie/1",
    element: <Demandeemp1 />,
  },
  {
    path: "demande d'emploie/3",
    element: <Demandeemp3 />,
  },
  {
    path: "demande d'emploie/4",
    element: <Demandeemp4 />,
  },
  {
    path: "demande d'emploie/0",
    element: <Demandeemp0 />,
  },
  {
    path: "home/:id",
    element: <Homep />,
  },
  {
    path: "findjob",
    element: <FindJob />,
  },
  {
    path: "hiretalent",
    element: <HireTalent />,
  },
  {
    path: "addjob",
    element: <AddJob />,
  },
  {
    path: "stat",
    element: <Statp />,
  },
  {
    path: "signup",
    element: <Inscemployer />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "role",
    element: <Rolep />,
  },
  {
    path: "signup/employeur",
    element: <Signupemp />,
  },
  {
    path: "signup/demandeur",
    element: <Signupdem />,
  },
  {
    path: "home/employeur",
    element: <Homeemp />,
  },
  {
    path: "stat/employeur",
    element: <Statpemp />,
  },
  {
    path: "reciver",
    element: <Receiver />,
  },
  {
    path: "sender",
    element: <fetchIDFromAPI />,
  },

]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


reportWebVitals();
