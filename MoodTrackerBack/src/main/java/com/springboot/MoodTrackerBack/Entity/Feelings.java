package com.springboot.MoodTrackerBack.Entity;

import jakarta.persistence.*;

import java.util.Date;

@Entity
public class Feelings {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Date entryDate;
    private String feeling;
    @ManyToOne
    @JoinColumn(name = "daily_log_id")
    private DailyLog dailyLog;

    public Feelings(){}

    public Long getId(){return this.id;}
    public void setId(Long id){this.id = id;}
    public Date getEntryDate(){return this.entryDate;}
    public void setEntryDate(Date date){this.entryDate = date;}
    public String getFeeling(){return this.feeling;}
    public void setFeeling(String feeling){this.feeling = feeling;}
    public DailyLog getDailyLog(){return this.dailyLog;}
    public void setDailyLog(DailyLog log){this.dailyLog = log;}
}
