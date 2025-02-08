import React from 'react';
import banner from '../../assets/banner1.avif'
import { Link } from 'react-router-dom';

const CampaignBanner = () => {
    return (
        <div className="bg-[#EFF3EA] rounded-2xl w-[95%] md:w-[90%] mx-auto mt-12 lg:mt-16 py-10">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
                {/* Left Section */}
                <div className="text-center space-y-4 lg:w-1/2 md:w-[70%] w-[90%] mx-auto">
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">Create Your Own Campaign</h1>
                    <p className="text-sm md:text-base lg:text-lg text-gray-600  md:w-[60%] text-center mx-auto">
                        Our platform empowers you to make a difference by creating your own campaigns.
                        Share your cause, connect with supporters, and make an impact in your community.
                        Join us today and bring your vision to life!
                    </p>
                    <Link to="/addCampaign"> <button className="bg-[#FFF2C2] text-black text-sm md:text-base px-3 py-1 md:px-6 md:py-2 mt-2 rounded-lg font-semibold hover:bg-yellow-300 transition">
                        Create Campaign
                    </button></Link>
                </div>
                {/* Right Section */}
                <div className="mt-8 lg:mt-0 lg:w-1/2 mx-auto flex justify-center items-center">
                    <img
                        src={banner}
                        alt="Donation Box"
                        className="w-full lg:w-[70%] md:h-[200px] lg:h-[300px] rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default CampaignBanner;