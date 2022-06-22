package com.leon.trendingprojectsapi.services;

import com.leon.trendingprojectsapi.model.User;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.stereotype.Service;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.ArrayList;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Override
    public List<User> getUsers(String language) {
        return processApiCall(language);
    }

    private List<User> processApiCall(String language) {

        String address = "https://gh-trending-api.herokuapp.com/developers/" + language;


        HttpClient client   = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
                                .uri(URI.create(address))
                                .GET()
                                .build();


        return  client.sendAsync(request, HttpResponse.BodyHandlers.ofString())
                .thenApply(HttpResponse::body)
                .thenApply(UserServiceImpl::parseJsonResponse)
                .join();

    }



    private static List<User> parseJsonResponse(String responseBody){

        List<User> popularUsers = new ArrayList<>();

        JSONArray detailedProjectList = new JSONArray(responseBody);
        for (int i = 0; i<detailedProjectList.length(); i++){
            JSONObject detailedProject = detailedProjectList.getJSONObject(i);

            String name         = detailedProject.getString("name");
            String userName     = detailedProject.getString("username");
            String avatar       = detailedProject.getString("avatar");
            String repoName     = detailedProject.getJSONObject("popularRepository").getString("repositoryName");
            String url          = detailedProject.getJSONObject("popularRepository").getString("url");
            String description  = (detailedProject.getJSONObject("popularRepository").get("description").equals(null))
                                ? "no description available" : detailedProject.getJSONObject("popularRepository").getString("description");

            User p = new User(i, name, userName, avatar, url, description, repoName);
            popularUsers.add(p);
        }

        return  popularUsers;
    }

}
