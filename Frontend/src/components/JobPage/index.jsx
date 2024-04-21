import React from "react";
import { useLocation } from "react-router";

import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BusinessIcon from "@mui/icons-material/Business";
import WifiOffIcon from "@mui/icons-material/WifiOff";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const JobPage = () => {
  const location = useLocation();
  const jobData = location.state;

  return (

    <div className="max-w-4xl bg-white bg-opacity-95 shadow-lg rounded-lg mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="bg-transparent  rounded-lg overflow-hidden">
        <div className="px-6 py-8">
          <h1 className="text-3xl font-bold mb-4">{jobData.title}</h1>
          <p className="text-gray-600 mb-4">{jobData.desc}</p>
          <div className="flex flex-wrap mb-4">
            <div className="w-full sm:w-1/2 mb-2 sm:mb-0">
              <p className="flex items-center">
                <span className="font-semibold mr-2">Experience:</span>
                {jobData.exp} years
              </p>
            </div>
            <div className="w-full sm:w-1/2">
              <p className="flex items-center">
                <span className="font-semibold mr-2">Profile:</span>
                {jobData.profile}
              </p>
            </div>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Technologies:</h3>
            <ul className="list-disc pl-4">
              {jobData.techs.map((tech, index) => (
                <li key={index} className="flex items-center mb-1">
                  <WorkOutlineIcon className="text-gray-500 mr-2" />
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-wrap mb-4">
            <div className="w-full sm:w-1/2 mb-2 sm:mb-0">
              <p className="flex items-center">
                <BusinessIcon className="text-gray-500 mr-2" />
                {jobData.company}
              </p>
            </div>
            <div className="w-full sm:w-1/2">
              <p className="flex items-center">
                <LocationOnIcon className="text-gray-500 mr-2" />
                {jobData.location}
              </p>
            </div>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Benefits:</h3>
            <ul className="list-disc pl-4">
              {jobData.benefits.map((benefit, index) => (
                <li key={index} className="flex items-center mb-1">
                  <CheckCircleIcon className="text-green-500 mr-2" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center mb-4">
            <span className="font-semibold mr-2">Remote:</span>
            {jobData.remote ? (
              <span className="text-green-500">Yes</span>
            ) : (
              <WifiOffIcon className="text-red-500" />
            )}
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Required Skills:</h3>
            <ul className="list-disc pl-4">
              {jobData.skills.map((skill, index) => (
                <li key={index} className="flex items-center mb-1">
                  <WorkOutlineIcon className="text-gray-500 mr-2" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="bg-green-500 rounded-lg p-3  text-white font-semibold">
            APPLY
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobPage;
