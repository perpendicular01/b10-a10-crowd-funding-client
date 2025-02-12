import React, { useEffect, useState } from 'react';
import CampaignCard from '../AllCampaigns/CampaignCard';

const HomeCampaigns = () => {
    const [campaigns, setCampaigns] = useState([])

    useEffect(()=> {
        const fetchCampaigns = async() => {
            const res = await fetch('https://b10-a10-crowd-funding-server.vercel.app/campaigns');
            const data = await res.json()
            const today = new Date().toISOString().split('T')[0];

            // Filter only running campaigns
             const runningCampaigns = data.filter(campaign => campaign.deadline > today);

            setCampaigns(runningCampaigns.slice(0, 6));
            // console.log(data)
        }

        fetchCampaigns();

    }, [])

    
    
    return (
        <div>

            <h2 className='text-red-950 mx-auto text-center text-xl md:text-2xl lg:text-3xl font-bold mb-8 mt-10 md:mb-12'> Current Campaigns </h2>
            

            <div className='w-[75%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
                {
                    campaigns.map(campaign => (<CampaignCard key={campaign.id} campaign={campaign} ></CampaignCard>))
                }
            </div>
        </div>
    );
};

export default HomeCampaigns;