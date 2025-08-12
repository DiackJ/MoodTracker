package com.springboot.MoodTrackerBack.DTO;

import com.springboot.MoodTrackerBack.Entity.Feelings;
import com.springboot.MoodTrackerBack.Entity.User;

import java.util.ArrayList;
import java.util.List;

public class DailyLogDTO {
    private int mood;
    private String reflection;
    private int minSleep;
    private int maxSleep;
    private List<Feelings> feelings;

    public DailyLogDTO(){
        this.feelings = new ArrayList<>();
    }

    public String getReflection(){return this.reflection;}
    public int getMinSleep(){return this.minSleep;}
    public int getMaxSleep(){return this.maxSleep;}
    public List<Feelings> getFeelings() {return this.feelings;}
    public int getMood(){return this.mood;}
}
