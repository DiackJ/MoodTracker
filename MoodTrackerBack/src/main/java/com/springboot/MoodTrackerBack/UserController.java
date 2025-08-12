package com.springboot.MoodTrackerBack;

import com.springboot.MoodTrackerBack.DTO.ProfileUpdateRequest;
import com.springboot.MoodTrackerBack.Entity.User;
import com.springboot.MoodTrackerBack.Repository.UserRepository;
import com.springboot.MoodTrackerBack.Service.UserService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private UserService userService;


    @PostMapping("/edit-profile")
    public ResponseEntity<User> updateProfile(HttpServletRequest req, @RequestBody ProfileUpdateRequest dto){
        User user = userService.editUserInfo(req, dto);

        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @PostMapping("/delete-account")
    public ResponseEntity<?> deleteAccount(HttpServletRequest req){
        userService.deleteAccount(req);

        return new ResponseEntity<>(HttpStatus.OK); 
    }
}
