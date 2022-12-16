import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import "./i18n"
import "./globals.scss"
import { HomePage } from './pages/home/HomePage'
import { SupportPage } from './pages/about/SupportPage'
import { Error } from './components/error/Error'
import { FeaturesPage } from './pages/features/FeaturesPage'
import { DownloadPage } from './pages/download/DownloadPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "features",
        element: <FeaturesPage />
      },
      {
        path: "download",
        element: <DownloadPage />
      },
      {
        path: "support",
        element: <SupportPage />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
