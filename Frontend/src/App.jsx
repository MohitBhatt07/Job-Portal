
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import HomeLayout from "./Layout/Layout";
import JobPage from "./components/JobPage/JobPage";
import AddJobPage from "./components/AddJobPage/AddJobPage";
import Signup from "./components/AuthPages/Signup";
import Login from "./components/AuthPages/Login";
import { UserContext } from "./context/userContext";
import { useState } from "react";

function App() {
  const [user ,setUser ] = useState({
    email : "",
    username : "",
    id : "",
    roles : [""]
  });
  return (
    <div>
      <UserContext.Provider value={{user , setUser}}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login"  element= {<Login/>}/>
          <Route path="/signup"  element= {<Signup/>}/>
          <Route path="/" element={<HomeLayout />} />
          <Route path="/job/:jobid" element={<JobPage />} />
          <Route path="/addjob" element={<AddJobPage />} />
        </Routes>
      </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
