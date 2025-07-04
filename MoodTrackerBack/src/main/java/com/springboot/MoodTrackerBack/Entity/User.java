package com.springboot.MoodTrackerBack.Entity;

import com.springboot.MoodTrackerBack.ENUM.Gender;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
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
    @Transient
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Log> logs;
}
