import React, { useState } from "react";
import dayjs from "dayjs";
import { useNavigate } from "react-router";
import mongoose  from "mongoose";

function JobCard(props) {
  const navigate = useNavigate();
  const date1 = dayjs(Date.now());
  const diffInDays = date1.diff(props.postedOn, "day");
  return (
    <div className="mx-40 mb-4">
      <div className="flex justify-between items-center px-6 py-4 bg-zinc-200 rounded-md border border-black shadow-lg hover:border-blue-500 hover:translate-y-1 hover:scale-103">
        <div className="flex flex-col items-start gap-3">
          <h1 className="text-lg font-semibold">
            {props.profile} {props.company}
          </h1>
          <p className="bg-green-400 rounded-lg px-2">
            exp - {props.exp}+{" years "}
          </p>
          <p className="bg-amber-500 rounded-lg px-2">
            Location -{props.location}
          </p>
          <div className="flex items-center gap-2">
            {props.skills?.map(
              (skill, i) =>
                i < 3 && (
                  <p
                    key={i}
                    className="text-gray-500 py-1 px-2 rounded-md border border-black"
                  >
                    {skill}
                  </p>
                )
            )}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-gray-500">
            Posted {diffInDays > 1 ? `${diffInDays} days` : `${diffInDays} day`}{" "}
            ago
          </p>
          <a href={props.job_link} target="_blank" rel="noopener noreferrer">
            <button
              className="text-blue-500 border border-blue-500 px-10 py-2 rounded-md"
              onClick={() => navigate(`/${props._id}` , {state : props})}
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
