package com.springboot.MoodTrackerBack;

import com.springboot.MoodTrackerBack.DTO.UserDTO;
import com.springboot.MoodTrackerBack.Repository.UserRepository;
import com.springboot.MoodTrackerBack.Service.UserService;
import com.springboot.MoodTrackerBack.Util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {
    @Autowired
    private UserService userService;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private JwtUtil jwtUtil;
    @Autowired
    private AuthenticationManager authenticationManager;

    @PostMapping("/auth/signup")
    public ResponseEntity<String> userSignup(@RequestBody UserDTO dto){
        userService.createUser(dto);
        return new ResponseEntity<>("user logged in", HttpStatus.CREATED);
    }
}
