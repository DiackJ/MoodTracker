package com.springboot.MoodTrackerBack.DTO;

public class ProfileUpdateRequest {
    private String newName;
    private String newEmail;

    public ProfileUpdateRequest(){}

    public String getNewName(){return this.newName;}
    public String getNewEmail(){return this.newEmail;}
}
