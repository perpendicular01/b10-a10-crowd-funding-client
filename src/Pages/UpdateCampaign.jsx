import React, { useContext, useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'


const UpdateCampaign = () => {
    const campaign = useLoaderData()
    const {_id:id, userName, userEmail} = campaign
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleUpdateCampaign = async (e) => {
        e.preventDefault();

        // get the form data
        const form = new FormData(e.target);
        // const userName = form.get('userName');
        // const userEmail = form.get('userEmail');
        const title = form.get('title');
        const type = form.get('type');
        const minAmount = form.get('minAmount');
        const deadline = form.get('deadline');
        const photo = form.get('photo');
        const description = form.get('description');
        // console.log(userName, userEmail, title, type, minAmount, deadline, photo, description);
        const campaign = { title, type, minAmount, deadline, photo, description };


        // database e update korte hbe
        const res1 = await fetch(`https://b10-a10-crowd-funding-server.vercel.app/campaigns/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(campaign),

        })
        const data1 = await res1.json();

        const res2 = await fetch(`https://b10-a10-crowd-funding-server.vercel.app/updateDonation/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(campaign),

        })
        const data2 = await res2.json()
        //console.log(data);
        if(res1.ok && res2.ok){
            Swal.fire({
                title: "Campaign updated successfully!",
                icon: "success",
            });
        }
        else{
            Swal.fire({
                title: "Error",
                text: "Failed to delete the campaign.",
                icon: "error",
              });
        }
        

        e.target.reset();
        navigate('/allCampaigns')

    }




    return (
        <div className='max-w-[600px] mx-auto bg-[#F8FAFC] mt-12'>
            <h3 className='pt-20 text-center font-bold opacity-80 text-2xl md:text-3xl text-blue-950 '> Update Your Campaign </h3>
            <form onSubmit={handleUpdateCampaign} className="card-body bg-white">
                
                <div className="flex justify-between">
                    <div className="form-control w-[49%]">
                        <label className="label mb-1">
                            <span className="label-text text-black text-lg">Your Name</span>
                        </label>
                        <input
                            name="userName"
                            type="text"
                            placeholder="name"
                            className="input input-bordered"
                            value={userName}
                            readOnly
                            required
                        />
                    </div>
                    <div className="form-control w-[49%]">
                        <label className="label mb-1">
                            <span className="label-text text-black text-lg">Your Email</span>
                        </label>
                        <input
                            name="userEmail"
                            type="email"
                            placeholder="email"
                            className="input input-bordered"
                            value={userEmail}
                            readOnly
                            required
                        />
                    </div>
                </div>

                <div className="form-control w-full mt-1">
                    <label className="label mb-2">
                        <span className="label-text text-black text-lg">Campaign Image URL</span>
                    </label> 
                    <input
                        name="photo"
                        type="url"
                        placeholder="image url"
                        className="input input-bordered w-full "
                        required
                    />
                </div>


                <div className="flex justify-between mt-1">
                    <div className="form-control w-[49%]">
                        <label className="label mb-1">
                            <span className="label-text text-black text-lg">Campaign Title</span>
                        </label>
                        <input
                            name="title"
                            type="text"
                            placeholder="title"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control w-[49%]">
                        <label className="label mb-1">
                            <span className="label-text text-black text-lg">Campaign Type</span>
                        </label>
                        <input
                            name="type"
                            list="campaign-types"
                            className="input input-bordered"
                            placeholder="Select or type a type"
                            required
                        />
                        <datalist id="campaign-types">
                            <option value="Personal Issue"></option>
                            <option value="Startup"></option>
                            <option value="Business"></option>
                            <option value="Creative Ideas"></option>
                        </datalist>
                    </div>
                </div>

                <div className="flex justify-between mt-1">
                    <div className="form-control w-[49%]">
                        <label className="label mb-1">
                            <span className="label-text text-black text-lg">
                                Minimum Donation Amount
                            </span>
                        </label>
                        <input
                            name="minAmount"
                            type="text"
                            placeholder="minimum amount"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control w-[49%]">
                        <label className="label mb-1">
                            <span className="label-text text-black text-lg">Deadline</span>
                        </label>
                        <input
                            name="deadline"
                            type="date"
                            placeholder="date"
                            className="input input-bordered"
                            required
                        />
                    </div>
                </div>

                

                {/* Description */}
                <div className="form-control w-full mt-1">
                    <label className="label mb-2">
                        <span className="label-text text-black text-lg">Description</span>
                    </label>
                    <textarea
                        name="description"
                        cols="30"
                        rows="3"
                        className="border-[1px] border-black border-opacity-15 rounded-lg p-2 w-full"
                    ></textarea>
                </div>

                {/* Error Message */}
                <div className="text-sm text-red-600 pt-3 mr-3">{error}</div>

                {/* Submit Button */}
                <div className="form-control mt-2 mx-auto">
                    <button className="px-14 py-3 rounded-2xl text-black text-base md:text-lg font-medium bg-blue-100">
                        Update campaign
                    </button>
                </div>
            </form>

        </div>
    );
};

export default UpdateCampaign;