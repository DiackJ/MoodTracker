package com.springboot.MoodTrackerBack.Service;

import com.springboot.MoodTrackerBack.DTO.UserDTO;
import com.springboot.MoodTrackerBack.ENUM.Gender;
import com.springboot.MoodTrackerBack.Entity.User;
import com.springboot.MoodTrackerBack.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder encoder;

    @Autowired
    public UserService(UserRepository userRepository, PasswordEncoder encoder){
        this.userRepository = userRepository;
        this.encoder = encoder;
    }

    public void createUser(UserDTO dto){
//        if(userRepository.findUserByEmail(dto.getEmail()).orElseThrow() != null){
//            throw new IllegalArgumentException("user already exists with this email");
//        }

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

        userRepository.save(user);
    }
}
