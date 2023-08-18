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

// We are doing for "Kawasaki_Ninja_GPZ_900R"
document.querySelector(".add_to_cart.Kawasaki_Ninja_GPZ_900R").addEventListener("click", function (event) {
    event.preventDefault();
    var count = sessionStorage.getItem('Kawasaki_Ninja_GPZ_900R');
    if (!count) {
        count = 1;
    }
    else {
        count++;
    }
    sessionStorage.setItem('Kawasaki_Ninja_GPZ_900R', count);
    console.log("Kawasaki_Ninja_GPZ_900R : Count = " + count);
})
// We are doing for "Honda_CB750_Cafe"
document.querySelector(".add_to_cart.Honda_CB750_Cafe").addEventListener("click", function (event) {
    event.preventDefault();
    var count = sessionStorage.getItem('Honda_CB750_Cafe');
    if (!count) {
        count = 1;
    }
    else {
        count++;
    }
    sessionStorage.setItem('Honda_CB750_Cafe', count);
    console.log("Honda_CB750_Cafe : Count = " + count);
})
// We are doing for "Harley_Davidson_Fat_Boy_2012"
document.querySelector(".add_to_cart.Harley_Davidson_Fat_Boy_2012").addEventListener("click", function (event) {
    event.preventDefault();
    var count = sessionStorage.getItem('Harley_Davidson_Fat_Boy_2012');
    if (!count) {
        count = 1;
    }
    else {
        count++;
    }
    sessionStorage.setItem('Harley_Davidson_Fat_Boy_2012', count);
    console.log("Harley_Davidson_Fat_Boy_2012 : Count = " + count);
})
// We are doing for "Ducati_Diavel_2013"
document.querySelector(".add_to_cart.Ducati_Diavel_2013").addEventListener("click", function (event) {
    event.preventDefault();
    var count = sessionStorage.getItem('Ducati_Diavel_2013');
    if (!count) {
        count = 1;
    }
    else {
        count++;
    }
    sessionStorage.setItem('Ducati_Diavel_2013', count);
    console.log("Ducati_Diavel_2013 : Count = " + count);

})
// We are doing for "Ducati_DesertX"
document.querySelector(".add_to_cart.Ducati_DesertX").addEventListener("click", function (event) {
    event.preventDefault();
    var count = sessionStorage.getItem('Ducati_DesertX');
    if (!count) {
        count = 1;
    }
    else {
        count++;
    }
    sessionStorage.setItem('Ducati_DesertX', count);
    console.log("Ducati_DesertX : Count = " + count);
})
// We are doing for "Ducati_1199_Panigale"
document.querySelector(".add_to_cart.Ducati_1199_Panigale").addEventListener("click", function (event) {
    event.preventDefault();
    var count = sessionStorage.getItem('Ducati_1199_Panigale');
    if (!count) {
        count = 1;
    }
    else {
        count++;
    }
    sessionStorage.setItem('Ducati_1199_Panigale', count);
    console.log("Ducati_1199_Panigale : Count = " + count);
})
// We are doing for "Deadpool_Scooter"
document.querySelector(".add_to_cart.Deadpool_Scooter").addEventListener("click", function (event) {
    event.preventDefault();
    var count = sessionStorage.getItem('Deadpool_Scooter');
    if (!count) {
        count = 1;
    }
    else {
        count++;
    }
    sessionStorage.setItem('Deadpool_Scooter', count);
    console.log("Deadpool_Scooter : Count = " + count);
})
// We are doing for "Batpod_2008"
document.querySelector(".add_to_cart.Batpod_2008").addEventListener("click", function (event) {
    event.preventDefault();
    var count = sessionStorage.getItem('Batpod_2008');
    if (!count) {
        count = 1;
    }
    else {
        count++;
    }
    sessionStorage.setItem('Batpod_2008', count);
    console.log("Batpod_2008 : Count = " + count);
})

// Here we are counting the number of times we are REMOVING ITEM from the Cart and sending the value to "cart.html"

// We are doing for "Kawasaki_Ninja_GPZ_900R"
document.querySelector(".remove_from_cart.Kawasaki_Ninja_GPZ_900R").addEventListener("click", function (event) {
    event.preventDefault();
    var count = sessionStorage.getItem('Kawasaki_Ninja_GPZ_900R');
    if (!count) {
        alert("Cart is Empty");
    } else if (count <= 0) {
        alert("Cart is Empty")
    }
    else {
        count--;
    }
    sessionStorage.setItem('Kawasaki_Ninja_GPZ_900R', count);
    console.log("Kawasaki_Ninja_GPZ_900R : Count = " + count);
})
// We are doing for "Honda_CB750_Cafe"
document.querySelector(".remove_from_cart.Honda_CB750_Cafe").addEventListener("click", function (event) {
    event.preventDefault();
    var count = sessionStorage.getItem('Honda_CB750_Cafe');
    if (!count) {
        alert("Cart is Empty");
    } else if (count <= 0) {
        alert("Cart is Empty")
    }
    else {
        count--;
    }
    sessionStorage.setItem('Honda_CB750_Cafe', count);
    console.log("Honda_CB750_Cafe : Count = " + count);
})
// We are doing for "Harley_Davidson_Fat_Boy_2012"
document.querySelector(".remove_from_cart.Harley_Davidson_Fat_Boy_2012").addEventListener("click", function (event) {
    event.preventDefault();
    var count = sessionStorage.getItem('Harley_Davidson_Fat_Boy_2012');
    if (!count) {
        alert("Cart is Empty");
    } else if (count <= 0) {
        alert("Cart is Empty")
    }
    else {
        count--;
    }
    sessionStorage.setItem('Harley_Davidson_Fat_Boy_2012', count);
    console.log("Harley_Davidson_Fat_Boy_2012 : Count = " + count);
})
// We are doing for "Ducati_Diavel_2013"
document.querySelector(".remove_from_cart.Ducati_Diavel_2013").addEventListener("click", function (event) {
    event.preventDefault();
    var count = sessionStorage.getItem('Ducati_Diavel_2013');
    if (!count) {
        alert("Cart is Empty");
    } else if (count <= 0) {
        alert("Cart is Empty")
    }
    else {
        count--;
    }
    sessionStorage.setItem('Ducati_Diavel_2013', count);
    console.log("Ducati_Diavel_2013 : Count = " + count);
})
// We are doing for "Ducati_DesertX"
document.querySelector(".remove_from_cart.Ducati_DesertX").addEventListener("click", function (event) {
    event.preventDefault();
    var count = sessionStorage.getItem('Ducati_DesertX');
    if (!count) {
        alert("Cart is Empty");
    } else if (count <= 0) {
        alert("Cart is Empty")
    }
    else {
        count--;
    }
    sessionStorage.setItem('Ducati_DesertX', count);
    console.log("Ducati_DesertX : Count = " + count);
})
// We are doing for "Ducati_1199_Panigale"
document.querySelector(".remove_from_cart.Ducati_1199_Panigale").addEventListener("click", function (event) {
    event.preventDefault();
    var count = sessionStorage.getItem('Ducati_1199_Panigale');
    if (!count) {
        alert("Cart is Empty");
    } else if (count <= 0) {
        alert("Cart is Empty")
    }
    else {
        count--;
    }
    sessionStorage.setItem('Ducati_1199_Panigale', count);
    console.log("Ducati_1199_Panigale : Count = " + count);
})
// We are doing for "Deadpool_Scooter"
document.querySelector(".remove_from_cart.Deadpool_Scooter").addEventListener("click", function (event) {
    event.preventDefault();
    var count = sessionStorage.getItem('Deadpool_Scooter');
    if (!count) {
        alert("Cart is Empty");
    } else if (count <= 0) {
        alert("Cart is Empty")
    }
    else {
        count--;
    }
    sessionStorage.setItem('Deadpool_Scooter', count);
    console.log("Deadpool_Scooter : Count = " + count);
})
// We are doing for "Batpod_2008"
document.querySelector(".remove_from_cart.Batpod_2008").addEventListener("click", function (event) {
    event.preventDefault();
    var count = sessionStorage.getItem('Batpod_2008');
    if (!count) {
        alert("Cart is Empty");
    } else if (count <= 0) {
        alert("Cart is Empty")
    }
    else {
        count--;
    }
    sessionStorage.setItem('Batpod_2008', count);
    console.log("Batpod_2008 : Count = " + count);
})

// Here we are showing the username to the user and we are getting the username from the sessionManager
document.querySelector(".usernameButton").innerHTML = sessionStorage.getItem("username");

// logout of the user when username button is clicked and also send the user to the login page
document.querySelector(".usernameButton").addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "../index.html";

})