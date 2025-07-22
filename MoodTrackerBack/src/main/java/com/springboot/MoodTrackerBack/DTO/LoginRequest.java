package com.springboot.MoodTrackerBack.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

public class LoginRequest {
    private String email;
    private String password;

    public LoginRequest(){}

    public String getEmail(){return this.email;}
    public String getPassword(){return this.password;}
}
