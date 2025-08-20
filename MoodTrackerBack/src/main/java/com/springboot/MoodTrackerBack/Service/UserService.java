package com.springboot.MoodTrackerBack.Service;

import com.springboot.MoodTrackerBack.DTO.UpdateUserEmail;
import com.springboot.MoodTrackerBack.DTO.UpdateUserName;
import com.springboot.MoodTrackerBack.DTO.UserDTO;
import com.springboot.MoodTrackerBack.ENUM.Gender;
import com.springboot.MoodTrackerBack.Entity.User;
import com.springboot.MoodTrackerBack.Repository.UserRepository;
import com.springboot.MoodTrackerBack.Util.JwtUtil;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder encoder;
    private final JwtUtil jwtUtil;

    @Autowired
    public UserService(UserRepository userRepository, PasswordEncoder encoder, JwtUtil jwtUtil){
        this.userRepository = userRepository;
        this.encoder = encoder;
        this.jwtUtil = jwtUtil;
    }

    public User createUser(UserDTO dto){
        User user = new User();
        user.setEmail(dto.getEmail());
        user.setPassword(encoder.encode(dto.getPassword()));
        user.setName(dto.getName());
        try{
            user.setGender(Gender.valueOf(dto.getGender()));
        }catch (IllegalArgumentException e){
            throw new IllegalArgumentException("invalid gender input");
        }
        user.setDob(dto.getDob());
        user.setCreatedAt(new Timestamp(System.currentTimeMillis()));

        return userRepository.save(user);
    }

    //return user information
    public User getUserInfo(HttpServletRequest req){
        String token = jwtUtil.extractTokenFromCookie(req); //get token from cookie
        String email = jwtUtil.extractSubject(token); //extract user email
        //identify the current user using their email
        User user = userRepository.findUserByEmail(email).orElseThrow(() -> new UsernameNotFoundException("user not found"));

        System.out.println("User: " + user);
        System.out.println("Token: " + token);

        return user;
    }
//note to self: probably could've avoided separating the profile edit requests
//into two services/endpoints by doing some frontend logic to keep current
//name/email if the field was null. -_-
    //edit user profile info
    public User editUserName(HttpServletRequest req, UpdateUserName dto){
        String token = jwtUtil.extractTokenFromCookie(req);
        String email = jwtUtil.extractSubject(token);

        User user =userRepository.findUserByEmail(email).orElseThrow(() -> new UsernameNotFoundException("user not found"));

        user.setName(dto.getNewName());

        return userRepository.save(user);
    }

    public User editUserEmail(HttpServletRequest req, UpdateUserEmail dto){
        String token = jwtUtil.extractTokenFromCookie(req);
        String email = jwtUtil.extractSubject(token);

        User user = userRepository.findUserByEmail(email).orElseThrow(() -> new UsernameNotFoundException("user not found"));

        user.setEmail(dto.getNewEmail());

        return userRepository.save(user);
    }

    //delete account
//    public void deleteAccount(HttpServletRequest req){
//        String token = jwtUtil.extractTokenFromCookie(req);
//        String email = jwtUtil.extractSubject(token);
//        User user = userRepository.findUserByEmail(email).orElseThrow(() -> new UsernameNotFoundException("user not found"));
//
//        userReposi;
//    }
}
