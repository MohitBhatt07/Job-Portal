import React, { useEffect, useState } from 'react'
import Header from '../components/Header/Header';
import SearchBar from '../components/SearchBar';
import JobCard from '../components/JobCard/JobCard';
import API from '../api/axiosConfig';
import jobData from "../JobDummyData";

const HomeLayout = () => {
  const [jobs, setJobs] = useState([]);
  const [customSearch, setCustomSearch] = useState(false);

  const fetchJobs = async() => {
    setCustomSearch(false);
    const tempJobs = []
    
    try{
      const response = await API.get('/posts');
      const data= response.data;
      console.log(data);
      data.forEach(curr => {
        tempJobs.push(curr);
      });
    }catch(e){
      console.log(e);
    }
    setJobs(tempJobs);
  }
  useEffect(() => {
    fetchJobs();
  },[]);
  

  return (
    <>
    <Header />
      <SearchBar setJobs = {setJobs} />
      {customSearch && 
        <button onClick={""} className="flex pl-[1250px] mb-2">
          <p className="bg-blue-500 px-10 py-2 rounded-md text-white z-10">Clear Filters</p>
        </button>
      }
      {jobs.map((job,idx)=> (
        <JobCard key={idx} {...job}/>
      ))}
      </>
  )
}

export default HomeLayout;