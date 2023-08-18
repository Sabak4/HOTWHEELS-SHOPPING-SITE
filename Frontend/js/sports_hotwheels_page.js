document.querySelector(".cart").addEventListener("click",function(event) {
    event.preventDefault();
    window.location.href = "../cart.html";
})

// These 4 functions will redirect to the page where we can add the items to the card

// Redirect from the classic hotwheels carousel to the classic hotwheels page
document.querySelector(".classicHotwheelsRedirect").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "classic_hotwheels_page.html";
})

// Redirect from the Sports Hotwheels to the Sports Hotwheels Page
document.querySelector(".sportsHotwheelsRedirect").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "sports_hotwheels_page.html";
})

// Redirect from the Sports Hotwheels to the Truck Hotwheels Page
document.querySelector(".motorcycleHotwheelsRedirect").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "motorcycle_hotwheels_page.html";
})

// Redirect from the Sports Hotwheels to the Batmobile Hotwheels Page
document.querySelector(".batmanHotwheelsRedirect").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "batmobile_hotwheels_page.html";
})

//Redirect to the Homepage from Batmobile Page
document.querySelector(".header_button").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "../homepage.html"
})

// Here we are counting the number of times we are ADDING AN ITEM into the Cart and sending the value to "cart.html"

// We are doing for "BMW_E36_M3_Race"
document.querySelector(".add_to_cart.BMW_E36_M3_Race").addEventListener("click", function (event) {
    event.preventDefault();
    var count = sessionStorage.getItem('BMW_E36_M3_Race');
    if (!count) {
        count = 1;
    }
    else {
        count++;
    }
    sessionStorage.setItem('BMW_E36_M3_Race', count);
    console.log("BMW_E36_M3_Race : Count = " + count);
})
// We are doing for "Bugatti_Veyron"
document.querySelector(".add_to_cart.Bugatti_Veyron").addEventListener("click", function (event) {
    event.preventDefault();
    var count = sessionStorage.getItem('Bugatti_Veyron');
    if (!count) {
        count = 1;
    }
    else {
        count++;
    }
    sessionStorage.setItem('Bugatti_Veyron', count);
    console.log("Bugatti_Veyron : Count = " + count);
})
// We are doing for "Lamborghini_Countach"
document.querySelector(".add_to_cart.Lamborghini_Countach").addEventListener("click", function (event) {
    event.preventDefault();
    var count = sessionStorage.getItem('Lamborghini_Countach');
    if (!count) {
        count = 1;
    }
    else {
        count++;
    }
    sessionStorage.setItem('Lamborghini_Countach', count);
    console.log("Lamborghini_Countach : Count = " + count);
})
// We are doing for "Porshe_935"
document.querySelector(".add_to_cart.Porshe_935").addEventListener("click", function (event) {
    event.preventDefault();
    var count = sessionStorage.getItem('Porshe_935');
    if (!count) {
        count = 1;
    }
    else {
        count++;
    }
    sessionStorage.setItem('Porshe_935', count);
    console.log("Porshe_935 : Count = " + count);

})
// We are doing for "RRRoadsteer"
document.querySelector(".add_to_cart.RRRoadsteer").addEventListener("click", function (event) {
    event.preventDefault();
    var count = sessionStorage.getItem('RRRoadsteer');
    if (!count) {
        count = 1;
    }
    else {
        count++;
    }
    sessionStorage.setItem('RRRoadsteer', count);
    console.log("RRRoadsteer : Count = " + count);
})
// We are doing for "SRT_Viper_GTS_R"
document.querySelector(".add_to_cart.SRT_Viper_GTS_R").addEventListener("click", function (event) {
    event.preventDefault();
    var count = sessionStorage.getItem('SRT_Viper_GTS_R');
    if (!count) {
        count = 1;
    }
    else {
        count++;
    }
    sessionStorage.setItem('SRT_Viper_GTS_R', count);
    console.log("SRT_Viper_GTS_R : Count = " + count);
})
// We are doing for "Super_Blitzen_Green"
document.querySelector(".add_to_cart.Super_Blitzen_Green").addEventListener("click", function (event) {
    event.preventDefault();
    var count = sessionStorage.getItem('Super_Blitzen_Green');
    if (!count) {
        count = 1;
    }
    else {
        count++;
    }
    sessionStorage.setItem('Super_Blitzen_Green', count);
    console.log("Super_Blitzen_Green : Count = " + count);
})
// We are doing for "Bugatti_Chiron_Blue_16"
document.querySelector(".add_to_cart.Bugatti_Chiron_Blue_16").addEventListener("click", function (event) {
    event.preventDefault();
    var count = sessionStorage.getItem('Bugatti_Chiron_Blue_16');
    if (!count) {
        count = 1;
    }
    else {
        count++;
    }
    sessionStorage.setItem('Bugatti_Chiron_Blue_16', count);
    console.log("Bugatti_Chiron_Blue_16 : Count = " + count);
})

// Here we are counting the number of times we are REMOVING ITEM from the Cart and sending the value to "cart.html"

// We are doing for "BMW_E36_M3_Race"
document.querySelector(".remove_from_cart.BMW_E36_M3_Race").addEventListener("click", function (event) {
    event.preventDefault();
    var count = sessionStorage.getItem('BMW_E36_M3_Race');
    if (!count) {
        alert("Cart is Empty");
    } else if (count <= 0) {
        alert("Cart is Empty")
    }
    else {
        count--;
    }
    sessionStorage.setItem('BMW_E36_M3_Race', count);
    console.log("BMW_E36_M3_Race : Count = " + count);
})
// We are doing for "Bugatti_Chiron_Blue_16"
document.querySelector(".remove_from_cart.Bugatti_Chiron_Blue_16").addEventListener("click", function (event) {
    event.preventDefault();
    var count = sessionStorage.getItem('Bugatti_Chiron_Blue_16');
    if (!count) {
        alert("Cart is Empty");
    } else if (count <= 0) {
        alert("Cart is Empty")
    }
    else {
        count--;
    }
    sessionStorage.setItem('Bugatti_Chiron_Blue_16', count);
    console.log("Bugatti_Chiron_Blue_16 : Count = " + count);
})
// We are doing for "Bugatti_Veyron"
document.querySelector(".remove_from_cart.Bugatti_Veyron").addEventListener("click", function (event) {
    event.preventDefault();
    var count = sessionStorage.getItem('Bugatti_Veyron');
    if (!count) {
        alert("Cart is Empty");
    } else if (count <= 0) {
        alert("Cart is Empty")
    }
    else {
        count--;
    }
    sessionStorage.setItem('Bugatti_Veyron', count);
    console.log("Bugatti_Veyron : Count = " + count);
})
// We are doing for "Lamborghini_Countach"
document.querySelector(".remove_from_cart.Lamborghini_Countach").addEventListener("click", function (event) {
    event.preventDefault();
    var count = sessionStorage.getItem('Lamborghini_Countach');
    if (!count) {
        alert("Cart is Empty");
    } else if (count <= 0) {
        alert("Cart is Empty")
    }
    else {
        count--;
    }
    sessionStorage.setItem('Lamborghini_Countach', count);
    console.log("Lamborghini_Countach : Count = " + count);
})
// We are doing for "Porshe_935"
document.querySelector(".remove_from_cart.Porshe_935").addEventListener("click", function (event) {
    event.preventDefault();
    var count = sessionStorage.getItem('Porshe_935');
    if (!count) {
        alert("Cart is Empty");
    } else if (count <= 0) {
        alert("Cart is Empty")
    }
    else {
        count--;
    }
    sessionStorage.setItem('Porshe_935', count);
    console.log("Porshe_935 : Count = " + count);
})
// We are doing for "RRRoadsteer"
document.querySelector(".remove_from_cart.RRRoadsteer").addEventListener("click", function (event) {
    event.preventDefault();
    var count = sessionStorage.getItem('RRRoadsteer');
    if (!count) {
        alert("Cart is Empty");
    } else if (count <= 0) {
        alert("Cart is Empty")
    }
    else {
        count--;
    }
    sessionStorage.setItem('RRRoadsteer', count);
    console.log("RRRoadsteer : Count = " + count);
})
// We are doing for "SRT_Viper_GTS_R"
document.querySelector(".remove_from_cart.SRT_Viper_GTS_R").addEventListener("click", function (event) {
    event.preventDefault();
    var count = sessionStorage.getItem('SRT_Viper_GTS_R');
    if (!count) {
        alert("Cart is Empty");
    } else if (count <= 0) {
        alert("Cart is Empty")
    }
    else {
        count--;
    }
    sessionStorage.setItem('SRT_Viper_GTS_R', count);
    console.log("SRT_Viper_GTS_R : Count = " + count);
})
// We are doing for "Super_Blitzen_Green"
document.querySelector(".remove_from_cart.Super_Blitzen_Green").addEventListener("click", function (event) {
    event.preventDefault();
    var count = sessionStorage.getItem('Super_Blitzen_Green');
    if (!count) {
        alert("Cart is Empty");
    } else if (count <= 0) {
        alert("Cart is Empty")
    }
    else {
        count--;
    }
    sessionStorage.setItem('Super_Blitzen_Green', count);
    console.log("Super_Blitzen_Green : Count = " + count);
})

// Here we are showing the username to the user and we are getting the username from the sessionManager
document.querySelector(".usernameButton").innerHTML = sessionStorage.getItem("username");

// logout of the user when username button is clicked and also send the user to the login page
document.querySelector(".usernameButton").addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "../index.html";

})