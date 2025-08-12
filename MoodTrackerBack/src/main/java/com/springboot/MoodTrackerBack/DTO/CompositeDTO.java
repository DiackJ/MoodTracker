package com.springboot.MoodTrackerBack.DTO;

import com.springboot.MoodTrackerBack.DTO.DailyLogDTO;
import com.springboot.MoodTrackerBack.DTO.FeelingsDTO;
import com.springboot.MoodTrackerBack.Entity.Feelings;

import java.util.List;

public class CompositeDTO {
    private DailyLogDTO dailyLog;
    private List<String> feelings;

    public CompositeDTO(){}

    public DailyLogDTO getDailyLog(){return this.dailyLog;}
    public List<String> getFeelings(){return this.feelings;}
}
