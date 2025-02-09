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
                path: '/campaign/:id',
                element: <CampaignDetails></CampaignDetails>,
                loader: async({params}) => {
                    const res = await fetch(`http://localhost:5000/campaigns/${params.id}`)
                    const campaign = await res.json();
                    return campaign;
                }
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