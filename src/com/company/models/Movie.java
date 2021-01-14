package com.company.models;

import express.database.Model;
import org.dizitart.no2.objects.Id;

import java.util.ArrayList;

@Model
public class Movie {
    @Id
    private String id;

    //empty constructor
    public Movie(){  };

    private String title;
    private ArrayList<String> productionCountries;
    private String productionYear;
    private int length;
    private String genre;
    private String distributor;
    private String language;
    private String subtitles;
    private String director;
    private ArrayList<String> actors;
    private String description;
    private ArrayList<String> images;
    private ArrayList<String> youtubeTrailers;
    private ArrayList<Review> reviews;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public ArrayList<String> getProductionCountries() {
        return productionCountries;
    }

    public void setProductionCountries(ArrayList<String> productionCountries) {
        this.productionCountries = productionCountries;
    }

    public String getProductionYear() {
        return productionYear;
    }

    public void setProductionYear(String productionYear) {
        this.productionYear = productionYear;
    }

    public int getLength() {
        return length;
    }

    public void setLength(int length) {
        this.length = length;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public String getDistributor() {
        return distributor;
    }

    public void setDistributor(String distributor) {
        this.distributor = distributor;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public String getSubtitles() {
        return subtitles;
    }

    public void setSubtitles(String subtitles) {
        this.subtitles = subtitles;
    }

    public String getDirector() {
        return director;
    }

    public void setDirector(String director) {
        this.director = director;
    }

    public ArrayList<String> getActors() {
        return actors;
    }

    public void setActors(ArrayList<String> actors) {
        this.actors = actors;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public ArrayList<String> getImages() {
        return images;
    }

    public void setImages(ArrayList<String> images) {
        this.images = images;
    }

    public ArrayList<String> getYoutubeTrailers() {
        return youtubeTrailers;
    }

    public void setYoutubeTrailers(ArrayList<String> youtubeTrailers) {
        this.youtubeTrailers = youtubeTrailers;
    }

    public ArrayList<Review> getReviews() {
        return reviews;
    }

    public void setReviews(ArrayList<Review> reviews) {
        this.reviews = reviews;
    }
}
