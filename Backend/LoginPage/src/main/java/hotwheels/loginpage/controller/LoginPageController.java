package hotwheels.loginpage.controller;

import hotwheels.loginpage.entitiy.HotwheelsUsersDataBaseEntity;
import hotwheels.loginpage.entitiy.UsernameAndPasswordPOJO;
import hotwheels.loginpage.repository.HotwheelsUsersDataBaseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class LoginPageController {

    @Autowired
    private HotwheelsUsersDataBaseRepository repository;

    // We are making a get call to the DataBase to get the username
    // Use the Following URL : "http://localhost:8085/login-page/getUser"
    // the json
    /*
    {
    "username": "sbasak",
    "password": "sbasak"
    }
    */
    @PostMapping("/login-page/getUser")
    @CrossOrigin
    public ResponseEntity<HotwheelsUsersDataBaseEntity>  getUser(@RequestBody UsernameAndPasswordPOJO userPassword) {
        System.out.println(userPassword);
        String username = userPassword.getUsername();
        String password = userPassword.getPassword();
        Optional<HotwheelsUsersDataBaseEntity> usernameByID = repository.findById(username);
        if(usernameByID.isPresent()) {
            if(usernameByID.get().getPassword().equals(password)) {
                System.out.println("the username and password matches");
                return ResponseEntity.ok(usernameByID.get()) ;
            }

            else
                return ResponseEntity.status(HttpStatus.CONFLICT).body(null);
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
    }

    public HotwheelsUsersDataBaseEntity getOnlyUser(String username) {
        Optional<HotwheelsUsersDataBaseEntity> usernameByID = repository.findById(username);
        if(usernameByID.isPresent()) {
            return usernameByID.get();
        }
        return null;
    }

    // We are adding a new user
    // we are also checking if the user is already present if it is present then we are not adding it
    // Use the Following URL : "http://localhost:8085/signup-page/addUser"
    // the json
    /*
    {
    "username": "sbasak",
    "password": "sbasak",
    "first_name": "Soumya",
    "last_name": "Basak",
    "date_of_birth": "1997-10-04"
    }
    */
    @PostMapping("/signup-page/addUser")
    @CrossOrigin
    public ResponseEntity<HotwheelsUsersDataBaseEntity>  addUser(@RequestBody HotwheelsUsersDataBaseEntity newUser) {
        System.out.println("The call is made to ADD user to the database");
        HotwheelsUsersDataBaseEntity user = getOnlyUser(newUser.getUsername());
        if(user ==null) {
            System.out.println("User Sucessfully Added : ");
            return ResponseEntity.ok(repository.save(newUser)) ;

        }
        return ResponseEntity.status(HttpStatus.CONFLICT).body(null);
    }

    // Get all the users
    // Use the Following URL : "http://localhost:8085/login-page/getAllUsers"
    @GetMapping("/login-page/getAllUsers")
    public List<HotwheelsUsersDataBaseEntity> getAllUsers() {
        return repository.findAll();
    }
}
