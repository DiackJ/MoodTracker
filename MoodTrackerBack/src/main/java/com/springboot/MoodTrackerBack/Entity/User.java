package com.springboot.MoodTrackerBack.Entity;

import com.springboot.MoodTrackerBack.ENUM.Gender;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String email;
    private String password;
    private String name;
    @Enumerated(EnumType.STRING)
    private Gender gender;
    private LocalDate dob;
    private Timestamp created_at;
    @Transient
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Log> logs;

    public User(){
        this.logs = new ArrayList<>();
    }

    public long getId(){return this.id;}
    public void setId(long id){this.id = id;}
    public String getEmail(){return this.email;}
    public void setEmail(String email){this.email = email;}
    public String getPassword(){return this.password;}
    public void setPassword(String password){this.password = password;}
    public String getName(){return this.name;}
    public void setName(String name){this.name = name;}
    public LocalDate getDob(){return this.dob;}
    public void setDob(LocalDate DOB){this.dob = DOB;}
    public Gender getGender(){return this.gender;}
    public void setGender(Gender gender){this.gender = gender;}
    public Timestamp getCreatedAt(){return this.created_at;}
    public void setCreatedAt(Timestamp createdAt){this.created_at = createdAt;}
}
