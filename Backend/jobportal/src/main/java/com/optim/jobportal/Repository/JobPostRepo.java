package com.optim.jobportal.Repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.optim.jobportal.Model.JobPost;

public interface JobPostRepo extends MongoRepository<JobPost ,String> {


  JobPost findJobPostByProfile(String techname);
  List<JobPost> findByTitleLike(String title);
  List<JobPost> findByRemote(Boolean remote);
  List<JobPost> findByExpGreaterThanEqual(Integer exp);
}
