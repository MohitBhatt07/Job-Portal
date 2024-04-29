package com.optim.jobportal.Model;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


import java.util.List;

@Data
@NoArgsConstructor
@Document(collection = "Jobs")
public class JobPost {

    @Id
    private String id;
    private String desc;
    private int exp;
    private String profile;
    private List<String> techs;
    private String company;
    private String location;
   
    private List<String> benefits;
    private boolean remote;
    private List<String> skills;
    
    public boolean getRemote() {
        return this.remote;
    }
}