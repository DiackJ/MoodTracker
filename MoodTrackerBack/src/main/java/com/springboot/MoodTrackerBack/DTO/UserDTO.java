package com.springboot.MoodTrackerBack.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

public class UserDTO {
    private String email;
    private String password;
    private String name;
    private String gender;
    private LocalDate dob;

    public UserDTO(){}

    public String getEmail(){return this.email;}
    public String getPassword(){return this.password;}
    public String getName(){return this.name;}
    public LocalDate getDob(){return this.dob;}
    public String getGender(){return this.gender;}
}
