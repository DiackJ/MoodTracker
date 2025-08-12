package com.springboot.MoodTrackerBack.DTO;

public class AverageMoodSleepDTO {
    private long averageMood;
    private long averageSleep;

    public AverageMoodSleepDTO(){}
    public AverageMoodSleepDTO(long averageMood, long averageSleep){
        this.averageMood = averageMood;
        this.averageSleep = averageSleep;
    }

    public long getAverageMood(){return this.averageMood;}
    public void setAverageMood(long mood){this.averageMood = mood;}
    public long getAverageSleep(){return this.averageSleep;}
    public void setAverageSleep(long sleep){this.averageSleep = sleep;}
}
