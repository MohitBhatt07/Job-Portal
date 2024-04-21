import axios from "axios";
import React, { useState } from "react";
import API from "../../api/axiosConfig";

function SearchBar(props) {
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(searchText);
    setLoading(true);
    try {
      const response = await API.post(`/post/${searchText}`);
      console.log(response);
      const data = response.data;
      const tempJobs = [];
      data.forEach((curr) => {
        tempJobs.push(curr);
      });
      props.setJobs(tempJobs);
    } catch (err) {
      console.log(err);
    }
  };
  const [jobCriteria, setJobCriteria] = useState({
    title: "",
    remote: "",
    experience: "",
  });

  const handleChange = (e) => {
    setJobCriteria((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const search = async (e) => {
    e.preventDefault();
    console.log(jobCriteria);
    // return;
    setLoading(true);

    try {
      const response = await API.post(`/search`, jobCriteria);
      const data = response.data;
      const tempJobs = [];
      data.forEach((curr) => {
        tempJobs.push(curr);
      });
      console.log(data);
      props.setJobs(tempJobs);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="flex gap-4 my-10 justify-center px-10">
        <select
          onChange={handleChange}
          name="title"
          value={jobCriteria.title}
          className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md"
        >
          <option value="" disabled hidden>
            Job Role
          </option>
          <option value="iOS Developer">iOS Developer</option>
          <option value="Frontend Developer">Frontend Developer</option>
          <option value="Backend Developer">Backend Developer</option>
          <option value="Android Developer">Android Developer</option>
          <option value="Developer Advocate">Developer Advocate</option>
        </select>
        {/* <select
          onChange={handleChange}
          name="type"
          value={jobCriteria.type}
          className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md"
        >
          <option value="" disabled hidden>
            Job Type
          </option>
          <option value="Full Time">Full Time</option>
          <option value="Part Time">Part Time</option>
          <option value="Contract">Contract</option>
        </select> */}
        <select
          onChange={handleChange}
          name="remote"
          value={jobCriteria.remote}
          className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md"
        >
          <option value="" disabled hidden>
            Location
          </option>
          <option value="true">Remote</option>
          <option value="false">In-Office</option>
        </select>
        <select
          onChange={handleChange}
          name="experience"
          value={jobCriteria.experience}
          className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md"
        >
          <option value="" disabled hidden>
            Experience
          </option>
          <option value="1">Fresher</option>
          <option value="2">Junior Level</option>
          <option value="4">Mid Level</option>
          <option value="6">Senior Level</option>
        </select>
        <button
          onClick={search}
          className="w-64 bg-blue-500 text-white font-bold py-3 rounded-md"
        >
          Search
        </button>
      </div>

      <form
        onSubmit={submitHandler}
        className="flex items-center justify-center m-2  gap-2"
      >
        <input
          type="text"
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
          className="rounded-md bg-gray-200 h-10 px-2 focus:outline-green-400"
        ></input>
        <button
          type="submit"
          className="bg-blue-500 h-10 rounded-md px-2 text-white font-semibold"
        >
          Search{" "}
        </button>
      </form>
    </>
  );
}

export default SearchBar;
