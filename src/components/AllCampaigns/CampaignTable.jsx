import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CampaignContext } from '../../Contexts/CampaignProvider';


const CampaignTable = () => {
    const { campaigns, setCampaigns } = useContext(CampaignContext);
    const [sortOrder, setSortOrder] = useState("");


    useEffect(() => {
        const fetchCampaigns = async () => {
            const res = await fetch('https://b10-a10-crowd-funding-server.vercel.app/campaigns');
            const data = await res.json();

            setCampaigns(data);
            // console.log(data);
        }

        fetchCampaigns();
    }, []);


    const handleSortCampaigns = () => {
        const sortedCampaigns = [...campaigns].sort((a, b) => {
            if (sortOrder === "asc") {
                return a.minAmount - b.minAmount; // Ascending order
            }
            else {
                return b.minAmount - a.minAmount; // Descending order
            }
        });

        setCampaigns(sortedCampaigns);
        setSortOrder(sortOrder === "asc" ? "desc" : "asc"); // Toggle sort order
    };


    return (
        <div className='w-[90%] mx-auto mt-14     '>
            <div className='flex justify-between items-center   mb-4 md:mb-8 '>
                <h3 className='font-semibold text-black text-2xl ml-1 md:ml-2   '> All campaigns here </h3>
                <button onClick={handleSortCampaigns} className="bg-green-400 hover:bg-green-900 transition-colors duration-200 px-6 py-1 font-medium rounded-md text-black"> Sort  </button>
            </div>

            {/* campaigns in table format */}
            <div className="overflow-x-auto bg-white text-black">
                <table className="table">
                    <thead>
                        <tr className="text-black text-opacity-85 text-base lg:text-lg">
                            <th></th>
                            <th>Organizer</th>
                            <th>Title</th>
                            <th>Type</th>
                            <th>Minimum Amount</th>
                            <th>Deadline</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {campaigns.map((it, index) => {
                            const { _id: id, userName, title, type, minAmount, deadline } = it;

                            return (
                                <tr key={id} className="hover:bg-green-300 text-sm md:text-base text-black text-opacity-90">
                                    <th>{index + 1}</th>
                                    <td>{userName}</td>
                                    <td>{title}</td>
                                    <td>{type}</td>
                                    <td>{minAmount}</td>
                                    <td>{deadline}</td>
                                    <td>
                                        <Link to={`/campaign/${id}`}>
                                            <button className="bg-blue-200  px-3 py-1 rounded-md text-black font-medium">
                                                see more
                                            </button>
                                        </Link>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default CampaignTable;