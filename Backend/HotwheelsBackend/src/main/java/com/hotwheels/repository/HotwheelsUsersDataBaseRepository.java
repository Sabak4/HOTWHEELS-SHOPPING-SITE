package com.hotwheels.repository;


import com.hotwheels.entity.HotwheelsUsersDataBaseEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HotwheelsUsersDataBaseRepository extends JpaRepository<HotwheelsUsersDataBaseEntity,String> {
}
