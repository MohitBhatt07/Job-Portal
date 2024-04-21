package com.optim.jobportal.Repository;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.optim.jobportal.Model.JobPost;

@Repository
public interface SearchJobRepo {
  List<JobPost> findByText(String text);
}
