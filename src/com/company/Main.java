package com.company;


import com.company.models.Movie;
import express.Express;

import static express.database.Database.collection;

public class Main {

    public static void main(String[] args) {
        var app = new Express();

        // start collection database
        app.enableCollections("database/temp/db/awesome.db");

        app.get("/hello", (req, res) -> {
            res.send("<h1>Hello from Java Express!</h1>");
        });

        app.get("/rest/movieshow",(req,res) ->{
            var movie = collection("Movie").find();
            res.json(movie);
        });

        // endpoint to create a new picture
        app.post("/rest/movieshow",(req,res) ->{
            var movie = req.body(Movie.class);

            //save an object to the collection, which returns
            var savedMovie = collection("Movie").save(movie);
            System.out.println(savedMovie);
            //respond with saved object
            res.json(savedMovie);
        });
        //delete data from database
        app.delete("/rest/movie/:id", (req, res) -> {
            var id = req.params("id");
            collection("Movie").deleteById(id);

            res.send("delete ok");
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

        app.listen(4000); // Will listen on port 4000

    }
}
