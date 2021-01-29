package com.company.models;

import express.database.Model;
import org.dizitart.no2.objects.Id;

import java.util.ArrayList;
import java.util.List;

@Model
public class Customer {

    @Id
    private String id;

    private String email;
    private String password;
    private String name;
    private ArrayList<Booking> bookings;

    public Customer() {}

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public ArrayList<Booking> getBookings() {
        return bookings;
    }

    public void setBookings(ArrayList<Booking> bookings) {
        this.bookings = bookings;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }


    @Override
    public String toString() {
        return "Customer{" +
                "id='" + id + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", name='" + name + '\'' +
                ", bookings=" + bookings +
                '}';
    }
}
