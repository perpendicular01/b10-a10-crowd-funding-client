import React, { useContext, useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../Contexts/AuthProvider';

const CampaignDetails = () => {
    const { user } = useContext(AuthContext)
    const [active, setActive] = useState('')
    const campaign = useLoaderData()
    const { _id: id, userEmail, userName, photo, description, minAmount, deadline, type, title } = campaign

    useEffect(() => {
        const currDate = new Date();
        const campaignDate = new Date(deadline)

        if (campaignDate > currDate) {
            setActive('OnGoing')
        }
        else {
            setActive('Closed')
        }

    }, [deadline])

    const handleDonate = async() => {
        const currDate = new Date();
        const deadDate = new Date(deadline)

        // deadline par hoiya gele
        if(currDate > deadDate){
            Swal.fire({
                icon: "error",
                title: "sorry.. deadline is over...",
            });

            return;
        }

        // console.log(user)
        const donatedUser = {
            name : user.displayName,
            email : user.email,
            campaignId : id,
            title : title,
            photo : photo,
            type: type,
            description : description

        }

        const res  = await fetch('https://b10-a10-crowd-funding-server.vercel.app/usersDonations', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(donatedUser)
        })
        const data = await res.json();
        // console.log(data)

        Swal.fire({
            icon: 'success',
            title: 'Donated Successfully'
        })


    }

    return (
        <div className="md:w-[95%] lg:w-[72%] mx-auto  pt-32 pb-12 p-6">
            <div className=" w-[100%] mx-auto flex flex-col md:flex-row gap-15 lg:gap-4">
                {/* Left Section */}
                <div className="w-[85%] mx-auto md:mx-0 md:w-[35%]">
                    <img
                        src={photo}
                        alt={title}
                        className="w-[300px] lg:w-[350px] h-[200px] lg:h-[250px] rounded-xl shadow-sm"
                    />
                    <div className="mt-5">
                        <h2 className="text-lg lg:text-xl font-semibold text-gray-700">Added By:</h2>
                        <h2 className="text-base lg:text-lg text-gray-800 flex items-center gap-2"> 
                            <div className='flex items-center gap-1'> 
                            <FaUser></FaUser>  <span className='font-semibold'>username: </span>
                            </div>
                             <div> {userName} </div>    
                        </h2>

                        <h2 className="text-base lg:text-lg text-gray-800 flex items-center gap-2"> 
                            <div className='flex items-center gap-1'> 
                            <MdEmail></MdEmail> <span className='font-semibold'>Email: </span>
                            </div>
                             <div> {userEmail} </div>    
                        </h2>
                    </div>
                </div>

                {/* Right Section */}
                <div className="w-full md:w-[65%] ml-5">
                    <div className="md:flex md:justify-between md:items-center mb-3">
                        <h2 className="text-xl lg:text-2xl font-bold text-gray-950">{title}</h2>
                        <button
                            className={`px-3 py-1 rounded-full text-sm font-medium mt-3 md:mt-0 ${active === "OnGoing"
                                    ? "bg-green-100 border-green-950 border-[1px] text-green-700"
                                    : "bg-red-100 border-red-950 border-[1px] text-red-700"
                                }`}
                        >
                            {active}
                        </button>
                    </div>
                    <h2 className="text-base lg:text-lg font-bold text-gray-800">
                        Type: <span className="font-medium ">{type}</span>
                    </h2>
                    <p className="w-[80%] text-base text-gray-700 my-3">{description}</p>
                    <h2 className="text-base lg:text-lg font-bold text-gray-800">
                        Minimum Donation:{" "}
                        <span className="font-bold text-red-600">{minAmount}</span>
                    </h2>
                    
                    
                    <button onClick={handleDonate} className="mt-4 lg:mt-6  bg-[#FFF2C2]  text-black font-semibold px-6 md:px-4 lg:px-6 py-2 md:py-1 lg:py-2 rounded-lg shadow-md transition-all">
                        Donate Now
                    </button>
                    
                </div>
            </div>
        </div>

    );
};

export default CampaignDetails;