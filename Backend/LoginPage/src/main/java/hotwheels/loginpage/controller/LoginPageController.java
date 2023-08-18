package hotwheels.loginpage.controller;

import hotwheels.loginpage.entitiy.HotwheelsUsersDataBaseEntity;
import hotwheels.loginpage.repository.HotwheelsUsersDataBaseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class LoginPageController {

    @Autowired
    private HotwheelsUsersDataBaseRepository repository;

    // We are making a get call to the DataBase to get the username
    // Use the Following URL : "http://localhost:8085/login-page/getUser?username=sbasak&password=sbasak"
    @GetMapping("/login-page/getUser")
    public HotwheelsUsersDataBaseEntity getUser(@RequestParam(name = "username",required = true) String username,
                                                 @RequestParam(name = "password",required = true) String password) {
        Optional<HotwheelsUsersDataBaseEntity> usernameByID = repository.findById(username);
        if(usernameByID.isPresent()) {
            if(usernameByID.get().getPassword().equals(password))
                return usernameByID.get();
            else
                return null;
        }
        return null;
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
    public HotwheelsUsersDataBaseEntity addUser(@RequestBody HotwheelsUsersDataBaseEntity newUser) {
        HotwheelsUsersDataBaseEntity user = getOnlyUser(newUser.getUsername());
        if(user ==null) {
            return repository.save(newUser);

        }
        return null;
    }

    // Get all the users
    // Use the Following URL : "http://localhost:8085/login-page/getAllUsers"
    @GetMapping("/login-page/getAllUsers")
    public List<HotwheelsUsersDataBaseEntity> getAllUsers() {
        return repository.findAll();
    }
}
