package com.company.models;

import express.database.Model;

@Model
public class Customer {

    private String email;
    private String password;

    Customer() {}

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

    @Override
    public String toString() {
        return "Customer{" +
                "email='" + email + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
