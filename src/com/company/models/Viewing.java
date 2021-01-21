package com.company.models;

import express.database.Model;
import org.dizitart.no2.objects.Id;

@Model
public class Viewing {

    @Id
    private String id;

    private String screen;
    private String movie;
    private String date;
    private String time;
    private int seatsTaken;

    public Viewing() {}

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getScreen() {
        return screen;
    }

    public void setScreen(String screen) {
        this.screen = screen;
    }

    public String getMovie() {
        return movie;
    }

    public void setMovie(String movie) {
        this.movie = movie;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public int getSeatsTaken() {
        return seatsTaken;
    }

    public void setSeatsTaken(int seatsTaken) {
        this.seatsTaken = seatsTaken;
    }

    @Override
    public String toString() {
        return "Viewing{" +
                "id='" + id + '\'' +
                ", screen='" + screen + '\'' +
                ", movie='" + movie + '\'' +
                ", date='" + date + '\'' +
                ", time='" + time + '\'' +
                ", seatsTaken=" + seatsTaken +
                '}';
    }

}
