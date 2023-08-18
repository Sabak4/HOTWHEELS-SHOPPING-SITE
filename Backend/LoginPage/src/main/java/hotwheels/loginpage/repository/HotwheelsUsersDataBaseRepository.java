package hotwheels.loginpage.repository;

import hotwheels.loginpage.entitiy.HotwheelsUsersDataBaseEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HotwheelsUsersDataBaseRepository extends JpaRepository<HotwheelsUsersDataBaseEntity,String> {
}
