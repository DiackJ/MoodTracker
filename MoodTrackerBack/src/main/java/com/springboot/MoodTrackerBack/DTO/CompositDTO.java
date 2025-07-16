package com.springboot.MoodTrackerBack.DTO;

public class CompositDTO {
    private MoodDTO mood;
    private SleepDTO sleep;

    CompositDTO(){}

    public MoodDTO getMood(){return this.mood;}
    public void setMood(MoodDTO mood){this.mood = mood;}
    public SleepDTO getSleep(){return this.sleep;}
    public void setSleep(SleepDTO sleep){this.sleep = sleep;}
}
