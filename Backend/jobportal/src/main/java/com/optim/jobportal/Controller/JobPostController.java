package com.optim.jobportal.Controller;

import org.springframework.web.bind.annotation.RestController;

import com.optim.jobportal.Model.JobPost;
import com.optim.jobportal.Repository.JobPostRepo;
import com.optim.jobportal.Repository.SearchJobRepo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class JobPostController {
  @Autowired
  JobPostRepo postRepo;

  @Autowired
  SearchJobRepo searchRepo;

  @GetMapping("/")
  public String getMethodName() {
      return "Welcome";
  }
  
  @GetMapping("/posts")
  public List<JobPost> getJobPosts() {
    return postRepo.findAll();
  }

  @PostMapping("/post")
  public String addJobPost(@RequestBody JobPost post){
    JobPost p = postRepo.save(post);
    return "Job posted : " + p;
  }

  @PostMapping("/post/{text}")
  public List<JobPost> getPostByTech(@PathVariable String text){
    return searchRepo.findByText(text);
  }

}
