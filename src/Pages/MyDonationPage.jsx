import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Contexts/AuthProvider';
import { Link } from 'react-router-dom';

const MyDonationPage = () => {

    const [campaigns, setCampaigns] = useState([]);

    const { user } = useContext(AuthContext)

    useEffect(() => {

        if (!user?.email) return;

        const fetchCampaigns = async () => {
            const res = await fetch(`https://b10-a10-crowd-funding-server.vercel.app/myDonations?email=${user.email}`)
            const data = await res.json()
            // console.log(data)
            setCampaigns(data)
        }
        fetchCampaigns();

    }, [user]);


    return (
        <div>
            <h2 className='text-xl md:text-2xl lg:text-3xl font-bold text-red-950 underline pt-20 lg:pt-28 pb-8 ml-4 lg:ml-52'> See your donations:   </h2>
            <div className='w-[80%] md:w-[76%] lg:w-[70%] mx-auto '>



                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-6 lg:gap-6'>
                    {campaigns.map((it) => {
                        const { _id: id, campaignId, name, email, photo, title, type, description } = it;

                        return (
                            <div
                                key={id}
                                className="card bg-[#D9EAFD] rounded-2xl shadow-xl md:w-[280px] md:h-[470px] lg:w-[350px] ">
                                <figure className='rounded-xl'>
                                    <img
                                        src={photo}

                                        className="w-[85%] h-auto md:w-[250px] md:h-[200px] lg:w-[320px] lg:h-[200px] rounded-[30px]  pt-6 md:pt-4 object-cover"
                                    />
                                </figure>
                                <div
                                    className="card-body flex flex-col justify-between md:h-[240px] lg:h-[240px]">
                                    <div>
                                        <h2 className="card-title text-xl lg:text-2xl -mt-6 lg:-mt-5 mb-1 lg:mb-2">{title}</h2>
                                        <p className="font-semibold text-base mb-2">
                                            Type: <span className="font-medium text-gray-700">{type}</span>
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            {description}
                                        </p>
                                    </div>

                                    <div className="flex justify-start mt-3">
                                        <Link to={`/campaign/${campaignId}`}>
                                            <button className="px-4 bg-[#FFF2C2] text-base font-medium py-2 rounded-xl">
                                                Details
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </div>
    );
};

export default MyDonationPage;