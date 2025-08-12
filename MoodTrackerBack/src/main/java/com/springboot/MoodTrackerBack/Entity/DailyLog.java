package com.springboot.MoodTrackerBack.Entity;

import jakarta.persistence.*;

import java.time.OffsetDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
public class DailyLog {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private Date entryDate;
    private int mood;
    private String reflection;
    private int minSleep;
    private int maxSleep;
    @OneToMany(mappedBy = "dailyLog", cascade = CascadeType.ALL)
    private List<Feelings> feelings;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    public DailyLog(){
        this.feelings = new ArrayList<>();
    }

    public Long getId(){return this.id;}
    public void setId(Long id){this.id = id;}
    public Date getEntryDate(){return this.entryDate;}
    public void setEntryDate(Date date){this.entryDate = date;}
    public String getReflection(){return this.reflection;}
    public void setReflection(String reflection){this.reflection = reflection;}
    public int getMinSleep(){return this.minSleep;}
    public void setMinSleep(int minSleep){this.minSleep = minSleep;}
    public int getMaxSleep(){return this.maxSleep;}
    public void setMaxSleep(int maxSleep){this.maxSleep = maxSleep;}
    public List<Feelings> getFeelings() {return this.feelings;}
    public void setFeelings(List<Feelings> feelings){this.feelings = feelings;}
    public User getUser(){return this.user;}
    public void setUser(User user){this.user = user;}
    public int getMood(){return this.mood;}
    public void setMood(int mood){this.mood = mood;}

}
