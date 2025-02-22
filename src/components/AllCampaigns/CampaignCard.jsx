import React from 'react';
import { Link } from 'react-router-dom';

const CampaignCard = ({ campaign }) => {
  const { _id: id, title, description, photo, type } = campaign
  return (
    <div className="max-w-sm rounded-2xl shadow-lg bg-[#D9EAFD] dark:bg-gray-800 p-4 flex flex-col justify-between">
      <div>
        <img
          src={photo}
          className="w-[97%] h-48 mx-auto rounded-xl object-cover"
        />
        <div className="mt-4 space-y-2 ">
          <h2 className="text-xl font-bold text-black dark:text-gray-300">{title}</h2>
          <h2 className="text-base font-bold text-gray-800 dark:text-gray-300">
            Type: <span className="text-red-950 font-bold dark:text-gray-300">{type}</span>
          </h2>
          <p className="text-sm font-medium text-gray-700 mt-1 dark:text-gray-300">
            {description}
          </p>
        </div>
      </div>
      <Link to={`/campaign/${id}`}>
        <button className="mt-4 w-full bg-[#FFF2C2] text-black font-medium py-2 px-4 rounded-lg hover:bg-yellow-200 transition duration-300">
          See More
        </button>
      </Link>

    </div>

  );
};

export default CampaignCard;