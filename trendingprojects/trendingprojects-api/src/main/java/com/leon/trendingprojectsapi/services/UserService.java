package com.leon.trendingprojectsapi.services;

import com.leon.trendingprojectsapi.model.User;

import java.util.List;

public interface UserService {
    List<User> getUsers(String language);
}
