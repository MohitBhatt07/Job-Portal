
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import HomeLayout from "./Layout/Layout";
import JobPage from "./components/JobPage/JobPage";
import AddJobPage from "./components/AddJobPage/AddJobPage";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeLayout />} />
          <Route path="/job/:jobid" element={<JobPage />} />
          <Route path="/addjob" element={<AddJobPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
