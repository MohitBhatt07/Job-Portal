import React, { useState } from "react";
import dayjs from "dayjs";
import { useNavigate } from "react-router";

var dateFromObjectId = function (objectId) {
	return new Date(parseInt(objectId.substring(0, 8), 16) * 1000);
};

function JobCard(props) {
  
  const navigate = useNavigate();
  const date1 = dayjs(Date.now());
  
  const postedOn = dateFromObjectId(props._id);
  const diffInDays = date1.diff(postedOn, "day");
  return (
    <div className="mx-40 mb-4">
      <div className="flex justify-between items-center px-6 py-4 bg-gray-400 rounded-md border border-black shadow-lg hover:border-blue-500 hover:translate-y-1 hover:scale-103">
        <div className="flex flex-col items-start gap-3">
          <h1 className="text-lg font-semibold">
            {props.profile} 
          </h1>
          <p className="bg-amber-500 rounded-lg px-2">
            Company - {props.company}
          </p>
          <p className="bg-white text-blue-500 font-semibold rounded-lg px-2">
            exp - {props.exp}+{" years "}
          </p>
          <p className="bg-green-400 rounded-lg px-2">
            Location -{props.location}
          </p>
          <div className="flex items-center gap-2">
            {props.skills?.map(
              (skill, i) =>
                i < 3 && (
                  <p
                    key={i}
                    className="text-gray-200   py-1 px-2 rounded-md border border-black"
                  >
                    {skill}
                  </p>
                )
            )}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-gray-200">
            Posted {diffInDays > 1 ? `${diffInDays} days ago` : `${diffInDays === 0 ? "today" : "1 day ago"}`}{" "}
            
          </p>
          <a href={props.job_link} target="_blank" rel="noopener noreferrer">
            <button
              className="text-white bg-blue-600 hover:bg-blue-700 border  border-blue-500 px-10 py-2 rounded-md"
              onClick={() => navigate(`/job/${props._id}` , {state : props})}
            >
              Apply
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
