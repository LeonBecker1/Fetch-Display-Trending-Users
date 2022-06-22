package com.leon.trendingprojectsapi.model;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class User {
    private int id;
    private String name;
    private String userName;
    private String avatar;
    private String url;
    private String description;
    private String repoName;

}
