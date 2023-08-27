package com.hotwheels.entity;

public class CarNameAndQuantityPOJO {

    private String carName;

    private int noOfQuantity;

    public CarNameAndQuantityPOJO() {
    }

    public CarNameAndQuantityPOJO(String carName, int noOfQuantity) {
        this.carName = carName;
        this.noOfQuantity = noOfQuantity;
    }

    public String getCarName() {
        return carName;
    }

    public void setCarName(String carName) {
        this.carName = carName;
    }

    public int getNoOfQuantity() {
        return noOfQuantity;
    }

    public void setNoOfQuantity(int noOfQuantity) {
        this.noOfQuantity = noOfQuantity;
    }

    @Override
    public String toString() {
        return "CarNameAndQuantityPOJO{" +
                "carName='" + carName + '\'' +
                ", noOfQuantity=" + noOfQuantity +
                '}';
    }
}
