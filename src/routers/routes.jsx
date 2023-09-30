import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Contact from "../pages/Contact/Contact";
import Profile from "../pages/profile/Profile";
import PrivetRoutes from "./PrivetRoutes";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/profile",
                element: <PrivetRoutes><Profile /></PrivetRoutes>
            }
        ]
    }
])