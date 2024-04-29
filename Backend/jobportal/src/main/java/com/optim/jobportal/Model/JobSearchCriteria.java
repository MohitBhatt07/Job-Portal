package com.optim.jobportal.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class JobSearchCriteria {
    private String title;
    private Boolean remote;
    private Integer experience;
}
