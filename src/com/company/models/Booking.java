package com.company.models;
import express.database.Model;
import org.dizitart.no2.objects.Id;

import java.util.ArrayList;

@Model
public class Booking {

    @Id
    private String id;
    private Customer customer;
    private Viewing viewing;
    private int tickets;
    private int price;

    public Booking(){}

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public Viewing getViewing() {
        return viewing;
    }

    public void setViewing(Viewing viewing) {
        this.viewing = viewing;
    }

    public int getTickets() {
        return tickets;
    }

    public void setTickets(int tickets) {
        this.tickets = tickets;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }


    @Override
    public String toString() {
        return "Booking{" +
                "id='" + id + '\'' +
                ", customer=" + customer +
                ", viewing=" + viewing +
                ", tickets=" + tickets +
                ", price=" + price +
                '}';
    }
}
