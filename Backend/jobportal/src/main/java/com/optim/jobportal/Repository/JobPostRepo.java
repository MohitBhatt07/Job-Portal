package com.optim.jobportal.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.optim.jobportal.Model.JobPost;

public interface JobPostRepo extends MongoRepository<JobPost ,String> {


  JobPost findJobPostByProfile(String techname);
  
}
