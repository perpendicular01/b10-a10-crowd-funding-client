import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Contexts/AuthProvider';
import { Link } from 'react-router-dom';

const MyCampaignPage = () => {
    const [campaigns, setCampaigns] = useState([]);

    const {user} = useContext(AuthContext)
    
    
    useEffect(()=> {
        const fetchCampaigns = async() => {
            const res = await fetch(`http://localhost:5000/myCampaigns?email=${user.email}`)
            const data = await res.json()
            console.log(data)
            setCampaigns(data)
        }
        fetchCampaigns();
        
    }, [user.email]);

    return (
        <div className='w-[90%] mx-auto mt-20 mb-80   '>
            

            {/* campaigns in table format */}
            <div className="overflow-x-auto bg-white text-black">
                <table className="table">
                    <thead>
                        <tr className="text-black text-opacity-85 text-base lg:text-lg">
                            <th></th>
                            <th>Title</th>
                            <th>Type</th>
                            <th>Min. Amount</th>
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
                
                                    <td>{title}</td>
                                    <td>{type}</td>
                                    <td>{minAmount}</td>
                                    <td>{deadline}</td>
                                    <td>
                                        <Link to={`/campaign/${id}`}>
                                            <button className="bg-blue-700  px-3 py-1 rounded-md text-white font-medium">
                                                update
                                            </button>
                                        </Link>
                                    </td>
                                    <td>
                                        <Link to={`/campaign/${id}`}>
                                            <button className="bg-red-700  px-3 py-1 rounded-md text-white font-medium">
                                                delete
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

export default MyCampaignPage;