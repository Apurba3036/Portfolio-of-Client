import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Skills from './Pages/Skills.jsx';
import Research from './Pages/Research.jsx';
import Achievements from './Pages/Achievements.jsx';
import Contact from './Pages/Contact.jsx';
import ClubsAndVolunteer from './Pages/Volunteers.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/skills",
        element: <Skills />
      },
      {
        path: "/research",
        element: <Research />
      },
      {
        path: "/achievements",
        element: <Achievements />
      },
      {
        path: "/club",
        element: <ClubsAndVolunteer></ClubsAndVolunteer>
      },

      {
        path: "/contact",
        element: <Contact />
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)