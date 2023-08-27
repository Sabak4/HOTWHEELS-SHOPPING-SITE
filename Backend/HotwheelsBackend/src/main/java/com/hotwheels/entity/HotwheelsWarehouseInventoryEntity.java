package com.hotwheels.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "warehouse_inventory_database")
public class HotwheelsWarehouseInventoryEntity {

    @Id
    @Column(name = "car_name")
    private String car_name;

    @Column(name = "no_of_quantity")
    private int no_of_quantity;

    @Column(name = "price_per_quantity")
    private Double price_per_quantity;

    public HotwheelsWarehouseInventoryEntity() {
    }

    public HotwheelsWarehouseInventoryEntity(String car_name, int no_of_quantity, Double price_per_quantity) {
        this.car_name = car_name;
        this.no_of_quantity = no_of_quantity;
        this.price_per_quantity = price_per_quantity;
    }

    public String getCar_name() {
        return car_name;
    }

    public void setCar_name(String car_name) {
        this.car_name = car_name;
    }

    public int getNo_of_quantity() {
        return no_of_quantity;
    }

    public void setNo_of_quantity(int no_of_quantity) {
        this.no_of_quantity = no_of_quantity;
    }

    public Double getPrice_per_quantity() {
        return price_per_quantity;
    }

    public void setPrice_per_quantity(Double price_per_quantity) {
        this.price_per_quantity = price_per_quantity;
    }

    @Override
    public String toString() {
        return "HotwheelsWarehouseInventoryEntity{" +
                "car_name='" + car_name + '\'' +
                ", no_of_quantity=" + no_of_quantity +
                ", price_per_quantity=" + price_per_quantity +
                '}';
    }
}
