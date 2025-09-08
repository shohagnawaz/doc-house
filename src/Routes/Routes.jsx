import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Doctor from "../pages/Doctor/Doctor/Doctor";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "doctor",
            element: <Doctor></Doctor>
        },
        {
            path: "login",
            element: <Login></Login>
        },
        {
            path: "signup",
            element: <SignUp></SignUp>
        }
    ]
  },
]);