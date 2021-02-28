package com.company;


import com.company.models.Booking;
import com.company.models.Customer;
import com.company.models.Movie;
import com.company.models.Viewing;
import express.Express;

import static express.database.Database.collection;

public class Main {

    public static void main(String[] args) {
        var app = new Express();

        // start collection database
        app.enableCollections("database/temp/db/awesome.db");

        new Authentication(app);

        app.get("/rest/bookings", (req, res) -> {
            var bookings = collection("Booking").find();
            res.json(bookings);
        });
        
        app.get("/rest/screens", (req, res) -> {
            var screens = collection("Screen").find();
            res.json(screens);
        });

        app.get("/rest/customerdetails", (req,res) -> {
            var customerDetails = collection("Customer").find();
            res.json(customerDetails);
        });

        app.get("/rest/movieshow",(req,res) ->{
            var movie = collection("Movie").find();
            res.json(movie);
        });

        app.get("/rest/movie/:id", (req, res) -> {
            var id = req.params("id");
            Movie movie = collection("Movie").findById(id);

            if(movie != null) {
                res.json(movie);
            } else {
                res.send("Movie not found");
            }
        });

        app.get("/rest/viewings",(req,res) -> {
            var viewing = collection("Viewing").find();
            res.json(viewing);
        });


        app.post("/rest/movieshow",(req,res) ->{
            var movie = req.body(Movie.class);

            //save an object to the collection, which returns
            var savedMovie = collection("Movie").save(movie);
            System.out.println(savedMovie);
            //respond with saved object
            res.json(savedMovie);
        });

        app.post("/rest/bookings", (req, res) -> {
            Customer customer = req.session("currentUser");

            if(customer == null) {
                res.send("Must be logged in to book");
                return;
            }

            Booking booking = req.body(Booking.class);
            booking.setCustomer(customer);

            collection("Booking").save(booking);
            res.json(booking);
        });


        // Endpoints to delete data from database

        app.delete("/rest/movie/:id", (req, res) -> {
            var id = req.params("id");
            collection("Movie").deleteById(id);

            res.send("delete ok");
        });

        app.listen(5000); // Will listen on port 5000

    }
}
