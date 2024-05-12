import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './routes/home.jsx'
import ProjectsListPage, { loader as projectListLoader} from './routes/projects-list.jsx'
import ProjectPage, { loader as projectLoader } from './routes/project.jsx'
import SubmitProjectPage, {action as submitProjectAction} from './routes/submit-project.jsx'
import App from './App.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/projects/submit",
    element: <SubmitProjectPage />,
    action: submitProjectAction,
  },
  {
    path: "/projects",
    element: <ProjectsListPage />,
    loader: projectListLoader,
  },
  {
    path: "/projects/:projectId",
    element: <ProjectPage />,
    loader: projectLoader,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
