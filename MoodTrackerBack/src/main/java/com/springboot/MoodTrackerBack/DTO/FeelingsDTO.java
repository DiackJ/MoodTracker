package com.springboot.MoodTrackerBack.DTO;

import com.springboot.MoodTrackerBack.Entity.DailyLog;
import jakarta.persistence.*;

public class FeelingsDTO {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String feeling;
    @ManyToOne
    @JoinColumn(name = "daily_log_id")
    private DailyLog dailyLog;

    public FeelingsDTO(){}

    public Long getId(){return this.id;}
    public void setId(Long id){this.id = id;}
    public String getFeeling(){return this.feeling;}
    public void setFeeling(String feeling){this.feeling = feeling;}
    public DailyLog getDailyLog(){return this.dailyLog;}
    public void setDailyLog(DailyLog log){this.dailyLog = log;}
}
