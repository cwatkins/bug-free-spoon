import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./index.css"
import { Checkout } from "./routes/Checkout"
import { Root } from "./components/Root"
import { Success } from "./routes/Success"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Checkout />
      },
      {
        path: "/thank-you",
        element: <Success />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
