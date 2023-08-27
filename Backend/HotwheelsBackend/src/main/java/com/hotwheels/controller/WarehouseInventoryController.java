package com.hotwheels.controller;

import com.hotwheels.entity.CarNameAndQuantityPOJO;
import com.hotwheels.entity.HotwheelsWarehouseInventoryEntity;
import com.hotwheels.repository.HotwheelsWarehouseInventoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
/*
This Controller will communicate between the backend service and the table "warehouse_inventory_database"
 */
@RestController
public class WarehouseInventoryController {

    @Autowired
    private HotwheelsWarehouseInventoryRepository repository;

    // Here we are get all the data from the table
    // URL : "http://localhost:5000/inventory/getAllCarDetails"
    @GetMapping("/inventory/getAllCarDetails")
    public ResponseEntity<List<HotwheelsWarehouseInventoryEntity>>  getAllCarDetails() {
        return ResponseEntity.ok(repository.findAll());
    }

    // Here we are update the no of quantity in the database
    // URL : "http://localhost:5000/inventory/updateQuantity"
    // JSON Body :
    /*
    {
    "carName": "Pontiac_Firebird_67_400",
    "noOfQuantity": 5
    }
     */
    @PostMapping("/inventory/updateQuantity")
    private ResponseEntity<HotwheelsWarehouseInventoryEntity>  updateQuantity(@RequestBody CarNameAndQuantityPOJO updateCarDetails) {
        HotwheelsWarehouseInventoryEntity warehouseCarDetails = getSingleCarDetails(updateCarDetails.getCarName());
        if( warehouseCarDetails !=null  ) {
            if(warehouseCarDetails.getNo_of_quantity() < updateCarDetails.getNoOfQuantity()) {
                System.out.println(updateCarDetails.getCarName() + " is out of stock");
                return ResponseEntity.status(HttpStatus.CONFLICT).body(null);
            }
            int updatedNoOfQuantity = warehouseCarDetails.getNo_of_quantity() - updateCarDetails.getNoOfQuantity();
            System.out.println(updateCarDetails.getCarName() + " updated no of quantity is : " + updatedNoOfQuantity);
            return ResponseEntity.ok(repository.save(new HotwheelsWarehouseInventoryEntity(warehouseCarDetails.getCar_name(),updatedNoOfQuantity,warehouseCarDetails.getPrice_per_quantity())));
        }
        System.out.println("The Car with name " + updateCarDetails.getCarName() + " is not present in the database" );
        return ResponseEntity.status(HttpStatus.CONFLICT).body(null);
    }

    // Here we are getting only car details by using only the car_name from the database
    private HotwheelsWarehouseInventoryEntity getSingleCarDetails(String carName) {
        if(repository.findById(carName).isPresent()) {
            return repository.findById(carName).get();
        }
        return null;
    }
}
