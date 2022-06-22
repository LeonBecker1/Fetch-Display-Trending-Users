package com.leon.trendingprojectsapi.controller;
import com.leon.trendingprojectsapi.model.User;
import com.leon.trendingprojectsapi.services.UserService;

import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class UserController {

    private UserService userService;

    public UserController(UserService userService){
        this.userService = userService;
    }


    @GetMapping("/projects")
    public List<User> getPopularProjects(@RequestParam String language){
        return userService.getUsers(language);
    }

}
