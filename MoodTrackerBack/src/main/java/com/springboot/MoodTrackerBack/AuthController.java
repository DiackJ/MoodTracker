package com.springboot.MoodTrackerBack;

import com.springboot.MoodTrackerBack.DTO.LoginRequest;
import com.springboot.MoodTrackerBack.DTO.UserDTO;
import com.springboot.MoodTrackerBack.Entity.User;
import com.springboot.MoodTrackerBack.Repository.UserRepository;
import com.springboot.MoodTrackerBack.Service.UserService;
import com.springboot.MoodTrackerBack.Util.JwtUtil;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.time.Duration;

@RestController
public class AuthController {
    @Autowired
    private UserService userService;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private JwtUtil jwtUtil;
    @Autowired
    private AuthenticationManager authenticationManager;

    @PostMapping("/auth/signup")
    public ResponseEntity<String> userSignup(@RequestBody UserDTO dto, HttpServletResponse response){
        User user = userService.createUser(dto);
    //set cookies so that when a user signs up, they are authenticated and can access other enpoints
        String token = jwtUtil.generateToken(user.getEmail());

        ResponseCookie cookie = ResponseCookie.from("jwt", token)
                .httpOnly(true)
                .secure(false) //false for localhost testing
                .path("/")
                .maxAge(Duration.ofDays(7)) //7 days
                .sameSite("Lax") //for cross-origin
                .build();
        response.addHeader(HttpHeaders.SET_COOKIE, cookie.toString()); //add cookie to header
        System.out.println("signup cookie: " + cookie);
        return new ResponseEntity<>("signup successful", HttpStatus.CREATED);
    }

    @PostMapping("/auth/login")
    public ResponseEntity<String> userLogin(@RequestBody LoginRequest req, HttpServletResponse res){
        Authentication auth = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(req.getEmail(), req.getPassword())
        );
        if(auth.isAuthenticated()){
            String token = jwtUtil.generateToken(req.getEmail());

            ResponseCookie cookie = ResponseCookie.from("jwt", token)
                    .httpOnly(true)
                    .secure(false)
                    .sameSite("Lax")
                    .path("/")
                    .maxAge(Duration.ofDays(7))
                    .build();
            res.addHeader(HttpHeaders.SET_COOKIE, cookie.toString());
            return new ResponseEntity<>("login successful", HttpStatus.OK);
        }else{
            throw new BadCredentialsException("email or password is incorrect");
        }
    }

    @PostMapping("/auth/logout")
    public ResponseEntity<?> logoutUser(HttpServletResponse res){
        ResponseCookie cookie = ResponseCookie.from("jwt")
                .httpOnly(true)
                .secure(false)
                .sameSite("Lax")
                .path("/")
                .maxAge(0) //delete cookie
                .build();
        res.addHeader(HttpHeaders.SET_COOKIE, cookie.toString());
        return new ResponseEntity<>("logout successful", HttpStatus.OK);
    }

}
