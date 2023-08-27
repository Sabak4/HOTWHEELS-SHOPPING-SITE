package com.hotwheels;

import com.hotwheels.entity.HotwheelsWarehouseInventoryEntity;
import com.hotwheels.repository.HotwheelsWarehouseInventoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

// Here we ara inserting values into the database when the code is getting started
@Component
public class WarehouseCommandLineRunner implements CommandLineRunner {

    @Autowired
    private HotwheelsWarehouseInventoryRepository repository;
    @Override
    public void run(String... args) throws Exception {

        List<HotwheelsWarehouseInventoryEntity> list = new ArrayList<>();
        // Classic Cars
        list.add(new HotwheelsWarehouseInventoryEntity("Pontiac_Firebird_67_400",20,150.00));
        list.add(new HotwheelsWarehouseInventoryEntity("Shelby_67_GT500_2010",20,150.00));
        list.add(new HotwheelsWarehouseInventoryEntity("Toyota_Celica_70_Green_2013",20,150.00));
        list.add(new HotwheelsWarehouseInventoryEntity("Dodge_Charger_71",20,150.00));
        list.add(new HotwheelsWarehouseInventoryEntity("ElCamino_71",20,150.00));
        list.add(new HotwheelsWarehouseInventoryEntity("Fort_Falcon_73_XB",20,150.00));
        list.add(new HotwheelsWarehouseInventoryEntity("DeLorean_81_DMC",20,150.00));
        list.add(new HotwheelsWarehouseInventoryEntity("Honda_90_Civic",20,150.00));

        // Sports Cars
        list.add(new HotwheelsWarehouseInventoryEntity("BMW_E36_M3_Race",20,150.00));
        list.add(new HotwheelsWarehouseInventoryEntity("Bugatti_Chiron_Blue_16",20,150.00));
        list.add(new HotwheelsWarehouseInventoryEntity("Bugatti_Veyron",20,150.00));
        list.add(new HotwheelsWarehouseInventoryEntity("Lamborghini_Countach",20,150.00));
        list.add(new HotwheelsWarehouseInventoryEntity("Porshe_935",20,150.00));
        list.add(new HotwheelsWarehouseInventoryEntity("RRRoadsteer",20,150.00));
        list.add(new HotwheelsWarehouseInventoryEntity("SRT_Viper_GTS_R",20,150.00));
        list.add(new HotwheelsWarehouseInventoryEntity("Super_Blitzen_Green",20,150.00));

        //Motorcycles
        list.add(new HotwheelsWarehouseInventoryEntity("Kawasaki_Ninja_GPZ_900R",20,150.00));
        list.add(new HotwheelsWarehouseInventoryEntity("Honda_CB750_Cafe",20,150.00));
        list.add(new HotwheelsWarehouseInventoryEntity("Harley_Davidson_Fat_Boy_2012",20,150.00));
        list.add(new HotwheelsWarehouseInventoryEntity("Ducati_Diavel_2013",20,150.00));
        list.add(new HotwheelsWarehouseInventoryEntity("Ducati_DesertX",20,150.00));
        list.add(new HotwheelsWarehouseInventoryEntity("Ducati_1199_Panigale",20,150.00));
        list.add(new HotwheelsWarehouseInventoryEntity("Deadpool_Scooter",20,150.00));
        list.add(new HotwheelsWarehouseInventoryEntity("Batpod_2008",20,150.00));

        // Batmobile
        list.add(new HotwheelsWarehouseInventoryEntity("Batmobile_1966_Tv_Series",20,150.00));
        list.add(new HotwheelsWarehouseInventoryEntity("Batmobile_Arkham_Knight_2015",20,150.00));
        list.add(new HotwheelsWarehouseInventoryEntity("Batmobile_Batman_Forever",20,150.00));
        list.add(new HotwheelsWarehouseInventoryEntity("Batmobile_Batman_The_Animated_Series",20,150.00));
        list.add(new HotwheelsWarehouseInventoryEntity("Batmobile_Batman_v_Superman",20,150.00));
        list.add(new HotwheelsWarehouseInventoryEntity("Batmobile_Justice_League_2018",20,150.00));
        list.add(new HotwheelsWarehouseInventoryEntity("Batmobile_The_Batman",20,150.00));
        list.add(new HotwheelsWarehouseInventoryEntity("Batmobile_The_Dark_Knight",20,150.00));


        // Now we are adding all of them to the database
        repository.saveAll(list);

    }
}
