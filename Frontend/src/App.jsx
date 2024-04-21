import Navbar from "./components/Navbar";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import JobCard from "./components/JobCard";

import { useEffect, useState } from "react";
import API from "./api/axiosConfig";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import HomeLayout from "./Layout/Layout";
import JobPage from "./components/JobPage";

function App() {
  return (
    <div>
      <Navbar />

      <Router>
        <Routes>
          <Route path="/" element={<HomeLayout />} />
          <Route path="/:jobid" element={<JobPage />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
