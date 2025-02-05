import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../LayOut/HomeLayout";
import AuthLayout from "../LayOut/AuthLayout";
import Login from "../Pages/Login";
import HomePage from "../Pages/HomePage";
import Register from "../Pages/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: '/',
                element: <HomePage></HomePage>
            },
        ],
    },

    {
        path: 'auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/register',
                element: <Register></Register>
            },

        ]
    }
])


export default router;