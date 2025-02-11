import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Contexts/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyCampaignPage = () => {
    const [campaigns, setCampaigns] = useState([]);

    const { user } = useContext(AuthContext)


    useEffect(() => {

        if (!user?.email) return;

        const fetchCampaigns = async () => {
            const res = await fetch(`https://b10-a10-crowd-funding-server.vercel.app/myCampaigns?email=${user.email}`)
            const data = await res.json()
            // console.log(data)
            setCampaigns(data)
        }
        fetchCampaigns();

    }, [user]);

    const handleDeleteCampaign = async (id) => {

        const alert = await Swal.fire({
            title: "Are you sure?",
            text: "You can not be able to restore this",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "delete it"
        });

        if (alert.isConfirmed) {
            await Swal.fire({
                icon: "success",
                title: "Deleted!",
                text: "Your campaign has been deleted",

            });

            const res1 = await fetch(`https://b10-a10-crowd-funding-server.vercel.app/deleteCampaigns/${id}`, {
                method: 'DELETE',
            });


            const res2 = await fetch(`https://b10-a10-crowd-funding-server.vercel.app/deleteDonation/${id}`, {
                method: 'DELETE',
            })

            if (res1.ok && res2.ok) {
                setCampaigns(campaigns.filter(it => it._id !== id));
            }
            else {
                Swal.fire({
                    title: "Error",
                    text: "Failed to delete the campaign.",
                    icon: "error",
                });
            }
        }
    }

    return (
        <div>
            <h2 className='text-xl md:text-2xl lg:text-3xl font-bold text-red-950 underline pt-20 lg:pt-28 pb-8 ml-4 lg:ml-12 '> My Campaigns:   </h2>
            <div className='w-[90%] mx-auto mb-40  '>


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
                                            <Link to={`/updateCampaign/${id}`}>
                                                <button className="bg-blue-700  px-3 py-1 rounded-md text-white font-medium">
                                                    update
                                                </button>
                                            </Link>
                                        </td>
                                        <td>
                                            <Link>
                                                <button onClick={() => handleDeleteCampaign(id)} className="bg-red-700  px-3 py-1 rounded-md text-white font-medium">
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
        </div>
    );
};

export default MyCampaignPage;