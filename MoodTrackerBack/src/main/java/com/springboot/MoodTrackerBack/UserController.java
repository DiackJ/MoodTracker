package com.springboot.MoodTrackerBack;

import com.springboot.MoodTrackerBack.DTO.UpdateUserEmail;
import com.springboot.MoodTrackerBack.DTO.UpdateUserName;
import com.springboot.MoodTrackerBack.Entity.User;
import com.springboot.MoodTrackerBack.Repository.UserRepository;
import com.springboot.MoodTrackerBack.Service.UserService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private UserService userService;


    @PostMapping("/edit-name")
    public ResponseEntity<User> updateUserName(HttpServletRequest req, @RequestBody UpdateUserName dto){
        User user = userService.editUserName(req, dto);

        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @PostMapping("/edit-email")
    public ResponseEntity<User> updateUserEmail(HttpServletRequest req, @RequestBody UpdateUserEmail dto){
        User user = userService.editUserEmail(req, dto);

        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @DeleteMapping("/delete-account")
    public ResponseEntity<?> deleteAccount(HttpServletRequest req){
        User user = userService.getUserInfo(req);

        userRepository.deleteById(user.getId());

        return new ResponseEntity<>(HttpStatus.OK); 
    }
}
