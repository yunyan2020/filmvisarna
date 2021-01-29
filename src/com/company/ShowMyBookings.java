package com.company;
import express.Express;

import static express.database.Database.collection;

public class ShowMyBookings {
    private Express app;

    public ShowMyBookings(Express app){
        this.app = app;
        initShowMyBookings();
    }

    private void initShowMyBookings(){
        // Endpoints to fetch data from database
        app.get("/rest/bookings",(req,res) ->{
            var myBookings = collection("Booking").find();
            res.json(myBookings);
        });
    }
}
