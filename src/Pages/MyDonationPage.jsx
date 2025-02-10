import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Contexts/AuthProvider';
import { Link } from 'react-router-dom';

const MyDonationPage = () => {

    const [campaigns, setCampaigns] = useState([]);

    const { user } = useContext(AuthContext)

    useEffect(() => {

        if (!user?.email) return;

        const fetchCampaigns = async () => {
            const res = await fetch(`http://localhost:5000/myDonations?email=${user.email}`)
            const data = await res.json()
            console.log(data)
            setCampaigns(data)
        }
        fetchCampaigns();

    }, [user]);


    return (
        <div>
            <h2 className='text-3xl font-bold text-red-950 underline pt-20 lg:pt-28 pb-8 ml-4 lg:ml-52'> See your donations:   </h2>
            <div className='w-[80%] md:w-[96%] lg:w-[70%] mx-auto '>



                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-5 lg:gap-6'>
                    {campaigns.map((it) => {
                        const { _id: id, name, email, photo, title, type, description } = it;

                        return (
                            <div
                                key={id}
                                className="card bg-[#D9EAFD] rounded-2xl shadow-xl md:w-[250px] lg:w-[350px] ">
                                <figure className='rounded-xl'>
                                    <img
                                        src={photo}

                                        className="w-[85%] h-auto md:w-[220px] md:h-[170px] lg:w-[320px] lg:h-[200px] rounded-[30px] lg:rounded-2xl pt-6 md:pt-3 object-cover"
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
                                        <button className="px-4 bg-[#FFF2C2] text-base font-medium py-2 rounded-xl">
                                            Details
                                        </button>
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