package com.optim.jobportal.Repository;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.bson.Document;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.optim.jobportal.Model.JobPost;

import org.bson.conversions.Bson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.convert.MongoConverter;
import org.springframework.stereotype.Component;

import java.util.concurrent.TimeUnit;
import org.bson.Document;
import com.mongodb.client.AggregateIterable;
import com.mongodb.client.MongoClient;

@Component
public class SearchJobRepoImpl implements SearchJobRepo {
  @Autowired
  MongoClient mongoClient;

  @Autowired
  MongoConverter converter;

  @Override
  public List<JobPost> findByText(String text) {

    MongoDatabase database = mongoClient.getDatabase("JobPortal");
    MongoCollection<Document> collection = database.getCollection("Jobs");
    AggregateIterable<Document> result = collection.aggregate(Arrays.asList(new Document("$search",
        new Document("text",
            new Document("query", text)
                .append("path", Arrays.asList("techs", "desc", "profile", "skills")))),
        new Document("$sort",
            new Document("exp", 1L)),
        new Document("$limit", 5L)));
    final List<JobPost> jobs = new ArrayList<JobPost>();
    
    for (Document doc : result) {
      jobs.add(converter.read(JobPost.class, doc));
    }
    return jobs;
  }

}
