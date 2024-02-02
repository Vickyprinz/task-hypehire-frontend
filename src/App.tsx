import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { HomeScreen } from "./features/home/Home"
import Navbar from "./component"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <HomeScreen />,
      },
    ],
  },
])

const App = () => <RouterProvider router={router} />

export default App
