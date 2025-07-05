package com.springboot.MoodTrackerBack.Util;

import com.springboot.MoodTrackerBack.Entity.User;
import com.springboot.MoodTrackerBack.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailsService implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException{
        User user = userRepository.findUserByEmail(email).orElseThrow();
        return new CustomUserDetails(user);
    }
}
