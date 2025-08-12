package com.springboot.MoodTrackerBack.DTO;

public class MoodSleepDTO {
    private int mood;
    private int sleep;
    private String entryDate;

    public MoodSleepDTO(int mood, int sleep, String entryDate){
        //DateTimeFormatter format = DateTimeFormatter.ofPattern("MMM d");
        this.mood = mood;
        this.sleep = sleep;
        this.entryDate = entryDate;
    }

   public int getMood(){return this.mood;}
   public int getSleep(){return this.sleep;}
   public String getDate(){return this.entryDate;}

}
