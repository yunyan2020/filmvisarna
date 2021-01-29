package com.company;


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

        new ShowMyBookings(app);


        // Endpoints to fetch data from database

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


        // Endpoints to create new data for database

        app.post("/rest/customerdetails", (req,res) -> {
            var customer = req.body(Customer.class);
            var savedCustomer = collection("Customer").save(customer);

            System.out.println(savedCustomer);
            res.json(savedCustomer);

        });

        app.post("/rest/movieshow",(req,res) ->{
            var movie = req.body(Movie.class);

            //save an object to the collection, which returns
            var savedMovie = collection("Movie").save(movie);
            System.out.println(savedMovie);
            //respond with saved object
            res.json(savedMovie);
        });


        // Endpoints to delete data from database

        app.delete("/rest/movie/:id", (req, res) -> {
            var id = req.params("id");
            collection("Movie").deleteById(id);

            res.send("delete ok");
        });

        app.listen(4000); // Will listen on port 4000

    }
}
