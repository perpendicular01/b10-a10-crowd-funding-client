import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../LayOut/HomeLayout";
import AuthLayout from "../LayOut/AuthLayout";
import Login from "../Pages/Login";
import HomePage from "../Pages/HomePage";
import Register from "../Pages/Register";
import CampaignPage from "../Pages/CampaignPage";
import MyCampaignPage from "../Pages/MyCampaignPage";
import MyDonationPage from "../Pages/MyDonationPage";
import AddCampaignPage from "../Pages/AddCampaignPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: '/',
                element: <HomePage></HomePage>
            },
            {
                path: '/myCampaigns',
                element: <MyCampaignPage></MyCampaignPage> ,
            },
            {
                path: '/myDonations',
                element: <MyDonationPage></MyDonationPage> ,
            },
            {
                path: '/allCampaigns',
                element: <CampaignPage></CampaignPage> ,
            },
            {
                path: '/addCampaign',
                element: <AddCampaignPage></AddCampaignPage> ,
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