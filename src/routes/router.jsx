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
import CampaignDetails from "../Pages/CampaignDetails";
import UpdateCampaign from "../Pages/UpdateCampaign";
import PrivateRouter from "./PrivateRouter";
import Error from "../Pages/Error";

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
                element: <PrivateRouter><MyCampaignPage></MyCampaignPage></PrivateRouter> ,
            },
            {
                path: '/myDonations',
                element: <PrivateRouter><MyDonationPage></MyDonationPage></PrivateRouter> ,
            },
            {
                path: '/allCampaigns',
                element: <CampaignPage></CampaignPage> ,
            },
            {
                path: '/campaign/:id',
                element: <PrivateRouter><CampaignDetails></CampaignDetails></PrivateRouter>,
                loader: async({params}) => {
                    const res = await fetch(`https://b10-a10-crowd-funding-server.vercel.app/campaigns/${params.id}`)
                    const campaign = await res.json();
                    return campaign;
                }
            },
            {
                path: '/updateCampaign/:id',
                element: <PrivateRouter><UpdateCampaign></UpdateCampaign></PrivateRouter>,
                loader: async({params}) => {
                    const res = await fetch(`https://b10-a10-crowd-funding-server.vercel.app/campaigns/${params.id}`)
                    const campaign = await res.json()
                    return campaign;
                }
            },
            {
                path: '/addCampaign',
                element: <PrivateRouter><AddCampaignPage></AddCampaignPage></PrivateRouter> ,
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
    },

    {
        path: '*',
        element: <Error></Error>
    }
])


export default router;