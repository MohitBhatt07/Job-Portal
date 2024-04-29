import React, { useState } from 'react';
import { FaBuilding, FaMapMarkerAlt, FaBriefcase, FaLaptopCode, FaUsers, FaMoneyBillAlt } from 'react-icons/fa';
import API from '../../api/axiosConfig';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const AddJobPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    desc: '',
    exp: '',
    profile: '',
    techs: '',
    company: '',
    location: '',
    benefits: '',
    remote: false,
    skills: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      try {
        const processedData = {
          ...formData,
          techs: formData.techs.split(',').map((tech) => tech.trim()),
          benefits: formData.benefits.split(',').map((benefit) => benefit.trim()),
          skills: formData.skills.split(',').map((skill) => skill.trim()),
        };
        await API.post('/post', processedData);
        console.log('Job posted successfully');
        toast.success('Job posted successfully');
        navigate('/');
      } catch (error) {
        console.error('Error posting job:', error);
      }
    } else {
      setErrors(errors);
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.desc) {
      errors.desc = 'Job description is required.';
    }

    if (!formData.exp) {
      errors.exp = 'Required experience is required.';
    } else if (isNaN(formData.exp) || formData.exp < 0) {
      errors.exp = 'Required experience must be a positive number.';
    }

    if (!formData.profile) {
      errors.profile = 'Job profile is required.';
    }

    if (!formData.techs) {
      errors.techs = 'Technologies are required.';
    }

    if (!formData.company) {
      errors.company = 'Company name is required.';
    }

    if (!formData.location) {
      errors.location = 'Job location is required.';
    }

    if (!formData.benefits) {
      errors.benefits = 'Benefits are required.';
    }

    if (!formData.skills) {
      errors.skills = 'Required skills are required.';
    }

    return errors;
  };

  return (
    <div className="w-[80%] mx-auto p-8 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-6 flex items-center">
        <FaBriefcase className="mr-2 text-gray-500" />
        Add Job
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="desc" className="block text-gray-700 font-bold mb-2 flex items-center">
            <FaLaptopCode className="mr-2 text-gray-500" />
            Job Description
          </label>
          <textarea
            id="desc"
            name="desc"
            value={formData.desc}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
          />
          {errors.desc && <p className="text-red-500">{errors.desc}</p>}
        </div>

        {/* Other input fields */}

        <div>
          <label htmlFor="exp" className="block text-gray-700 font-bold mb-2 flex items-center">
            <FaBriefcase className="mr-2 text-gray-500" />
            Required Experience (in years)
          </label>
          <input
            type="number"
            id="exp"
            name="exp"
            value={formData.exp}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
          />
          {errors.exp && <p className="text-red-500">{errors.exp}</p>}
        </div>

        <div>
          <label htmlFor="profile" className="block text-gray-700 font-bold mb-2 flex items-center">
            <FaLaptopCode className="mr-2 text-gray-500" />
            Job Profile
          </label>
          <input
            type="text"
            id="profile"
            name="profile"
            value={formData.profile}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
          />
          {errors.profile && <p className="text-red-500">{errors.profile}</p>}
        </div>

        <div>
          <label htmlFor="techs" className="block text-gray-700 font-bold mb-2 flex items-center">
            <FaLaptopCode className="mr-2 text-gray-500" />
            Technologies (comma-separated)
          </label>
          <input
            type="text"
            id="techs"
            name="techs"
            value={formData.techs}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
          />
          {errors.techs && <p className="text-red-500">{errors.techs}</p>}
        </div>

        <div>
          <label htmlFor="company" className="block text-gray-700 font-bold mb-2 flex items-center">
            <FaBuilding className="mr-2 text-gray-500" />
            Company Name
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
          />
          {errors.company && <p className="text-red-500">{errors.company}</p>}
        </div>

        <div>
          <label htmlFor="location" className="block text-gray-700 font-bold mb-2 flex items-center">
            <FaMapMarkerAlt className="mr-2 text-gray-500" />
            Job Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
          />
          {errors.location && <p className="text-red-500">{errors.location}</p>}
        </div>

        <div>
          <label htmlFor="benefits" className="block text-gray-700 font-bold mb-2 flex items-center">
            <FaMoneyBillAlt className="mr-2 text-gray-500" />
            Benefits (comma-separated)
          </label>
          <input
            type="text"
            id="benefits"
            name="benefits"
            value={formData.benefits}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
            />
            {errors.benefits && <p className="text-red-500">{errors.benefits}</p>}
            </div>
            <div>
      <label htmlFor="remote" className="block text-gray-700 font-bold mb-2 flex items-center">
        <FaLaptopCode className="mr-2 text-gray-500" />
        Work Mode
      </label>
      <div className="flex items-center">
        <input
          type="radio"
          id="remote"
          name="remote"
          value={true}
          checked={formData.remote}
          onChange={() => setFormData((prevData) => ({ ...prevData, remote: true }))}
          className="mr-2"
        />
        <label htmlFor="remote" className="mr-4">
          Remote
        </label>
        <input
          type="radio"
          id="onsite"
          name="remote"
          value={false}
          checked={!formData.remote}
          onChange={() => setFormData((prevData) => ({ ...prevData, remote: false }))}
          className="mr-2"
        />
        <label htmlFor="onsite">On-site</label>
      </div>
      {errors.remote && <p className="text-red-500">{errors.remote}</p>}
    </div>

    <div>
      <label htmlFor="skills" className="block text-gray-700 font-bold mb-2 flex items-center">
        <FaUsers className="mr-2 text-gray-500" />
        Required Skills (comma-separated)
      </label>
      <input
        type="text"
        id="skills"
        name="skills"
        value={formData.skills}
        onChange={handleChange}
        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
      />
      {errors.skills && <p className="text-red-500">{errors.skills}</p>}
    </div>

    <button
      type="submit"
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
    >
      Post Job
    </button>
  </form>
</div>
)};

export default AddJobPage;