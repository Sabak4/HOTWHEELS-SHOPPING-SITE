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

// We are doing for "Batmobile_1966_Tv_Series"
document.querySelector(".add_to_cart.Batmobile_1966_Tv_Series").addEventListener("click", function (event) {
    event.preventDefault();
    var count = sessionStorage.getItem('Batmobile_1966_Tv_Series');
    if (!count) {
        count = 1;
    }
    else {
        count++;
    }
    sessionStorage.setItem('Batmobile_1966_Tv_Series', count);
    console.log("Batmobile_1966_Tv_Series : Count = " + count);
})
// We are doing for "Batmobile_Arkham_Knight_2015"
document.querySelector(".add_to_cart.Batmobile_Arkham_Knight_2015").addEventListener("click", function (event) {
    event.preventDefault();
    var count = sessionStorage.getItem('Batmobile_Arkham_Knight_2015');
    if (!count) {
        count = 1;
    }
    else {
        count++;
    }
    sessionStorage.setItem('Batmobile_Arkham_Knight_2015', count);
    console.log("Batmobile_Arkham_Knight_2015 : Count = " + count);
})
// We are doing for "Batmobile_Batman_Forever"
document.querySelector(".add_to_cart.Batmobile_Batman_Forever").addEventListener("click", function (event) {
    event.preventDefault();
    var count = sessionStorage.getItem('Batmobile_Batman_Forever');
    if (!count) {
        count = 1;
    }
    else {
        count++;
    }
    sessionStorage.setItem('Batmobile_Batman_Forever', count);
    console.log("Batmobile_Batman_Forever : Count = " + count);
})
// We are doing for "Batmobile_Batman_The_Animated_Series"
document.querySelector(".add_to_cart.Batmobile_Batman_The_Animated_Series").addEventListener("click", function (event) {
    event.preventDefault();
    var count = sessionStorage.getItem('Batmobile_Batman_The_Animated_Series');
    if (!count) {
        count = 1;
    }
    else {
        count++;
    }
    sessionStorage.setItem('Batmobile_Batman_The_Animated_Series', count);
    console.log("Batmobile_Batman_The_Animated_Series : Count = " + count);

})
// We are doing for "Batmobile_Batman_v_Superman"
document.querySelector(".add_to_cart.Batmobile_Batman_v_Superman").addEventListener("click", function (event) {
    event.preventDefault();
    var count = sessionStorage.getItem('Batmobile_Batman_v_Superman');
    if (!count) {
        count = 1;
    }
    else {
        count++;
    }
    sessionStorage.setItem('Batmobile_Batman_v_Superman', count);
    console.log("Batmobile_Batman_v_Superman : Count = " + count);
})
// We are doing for "Batmobile_Justice_League_2018"
document.querySelector(".add_to_cart.Batmobile_Justice_League_2018").addEventListener("click", function (event) {
    event.preventDefault();
    var count = sessionStorage.getItem('Batmobile_Justice_League_2018');
    if (!count) {
        count = 1;
    }
    else {
        count++;
    }
    sessionStorage.setItem('Batmobile_Justice_League_2018', count);
    console.log("Batmobile_Justice_League_2018 : Count = " + count);
})
// We are doing for "Batmobile_The_Batman"
document.querySelector(".add_to_cart.Batmobile_The_Batman").addEventListener("click", function (event) {
    event.preventDefault();
    var count = sessionStorage.getItem('Batmobile_The_Batman');
    if (!count) {
        count = 1;
    }
    else {
        count++;
    }
    sessionStorage.setItem('Batmobile_The_Batman', count);
    console.log("Batmobile_The_Batman : Count = " + count);
})
// We are doing for "Batmobile_The_Dark_Knight"
document.querySelector(".add_to_cart.Batmobile_The_Dark_Knight").addEventListener("click", function (event) {
    event.preventDefault();
    var count = sessionStorage.getItem('Batmobile_The_Dark_Knight');
    if (!count) {
        count = 1;
    }
    else {
        count++;
    }
    sessionStorage.setItem('Batmobile_The_Dark_Knight', count);
    console.log("Batmobile_The_Dark_Knight : Count = " + count);
})

// Here we are counting the number of times we are REMOVING ITEM from the Cart and sending the value to "cart.html"

// We are doing for "Batmobile_1966_Tv_Series"
document.querySelector(".remove_from_cart.Batmobile_1966_Tv_Series").addEventListener("click", function (event) {
    event.preventDefault();
    var count = sessionStorage.getItem('Batmobile_1966_Tv_Series');
    if (!count) {
        alert("Cart is Empty");
    } else if (count <= 0) {
        alert("Cart is Empty")
    }
    else {
        count--;
    }
    sessionStorage.setItem('Batmobile_1966_Tv_Series', count);
    console.log("Batmobile_1966_Tv_Series : Count = " + count);
})
// We are doing for "Batmobile_Arkham_Knight_2015"
document.querySelector(".remove_from_cart.Batmobile_Arkham_Knight_2015").addEventListener("click", function (event) {
    event.preventDefault();
    var count = sessionStorage.getItem('Batmobile_Arkham_Knight_2015');
    if (!count) {
        alert("Cart is Empty");
    } else if (count <= 0) {
        alert("Cart is Empty")
    }
    else {
        count--;
    }
    sessionStorage.setItem('Batmobile_Arkham_Knight_2015', count);
    console.log("Batmobile_Arkham_Knight_2015 : Count = " + count);
})
// We are doing for "Batmobile_Batman_Forever"
document.querySelector(".remove_from_cart.Batmobile_Batman_Forever").addEventListener("click", function (event) {
    event.preventDefault();
    var count = sessionStorage.getItem('Batmobile_Batman_Forever');
    if (!count) {
        alert("Cart is Empty");
    } else if (count <= 0) {
        alert("Cart is Empty")
    }
    else {
        count--;
    }
    sessionStorage.setItem('Batmobile_Batman_Forever', count);
    console.log("Batmobile_Batman_Forever : Count = " + count);
})
// We are doing for "Batmobile_Batman_The_Animated_Series"
document.querySelector(".remove_from_cart.Batmobile_Batman_The_Animated_Series").addEventListener("click", function (event) {
    event.preventDefault();
    var count = sessionStorage.getItem('Batmobile_Batman_The_Animated_Series');
    if (!count) {
        alert("Cart is Empty");
    } else if (count <= 0) {
        alert("Cart is Empty")
    }
    else {
        count--;
    }
    sessionStorage.setItem('Batmobile_Batman_The_Animated_Series', count);
    console.log("Batmobile_Batman_The_Animated_Series : Count = " + count);
})
// We are doing for "Batmobile_Batman_v_Superman"
document.querySelector(".remove_from_cart.Batmobile_Batman_v_Superman").addEventListener("click", function (event) {
    event.preventDefault();
    var count = sessionStorage.getItem('Batmobile_Batman_v_Superman');
    if (!count) {
        alert("Cart is Empty");
    } else if (count <= 0) {
        alert("Cart is Empty")
    }
    else {
        count--;
    }
    sessionStorage.setItem('Batmobile_Batman_v_Superman', count);
    console.log("Batmobile_Batman_v_Superman : Count = " + count);
})
// We are doing for "Batmobile_Justice_League_2018"
document.querySelector(".remove_from_cart.Batmobile_Justice_League_2018").addEventListener("click", function (event) {
    event.preventDefault();
    var count = sessionStorage.getItem('Batmobile_Justice_League_2018');
    if (!count) {
        alert("Cart is Empty");
    } else if (count <= 0) {
        alert("Cart is Empty")
    }
    else {
        count--;
    }
    sessionStorage.setItem('Batmobile_Justice_League_2018', count);
    console.log("Batmobile_Justice_League_2018 : Count = " + count);
})
// We are doing for "Batmobile_The_Batman"
document.querySelector(".remove_from_cart.Batmobile_The_Batman").addEventListener("click", function (event) {
    event.preventDefault();
    var count = sessionStorage.getItem('Batmobile_The_Batman');
    if (!count) {
        alert("Cart is Empty");
    } else if (count <= 0) {
        alert("Cart is Empty")
    }
    else {
        count--;
    }
    sessionStorage.setItem('Batmobile_The_Batman', count);
    console.log("Batmobile_The_Batman : Count = " + count);
})
// We are doing for "Batmobile_The_Dark_Knight"
document.querySelector(".remove_from_cart.Batmobile_The_Dark_Knight").addEventListener("click", function (event) {
    event.preventDefault();
    var count = sessionStorage.getItem('Batmobile_The_Dark_Knight');
    if (!count) {
        alert("Cart is Empty");
    } else if (count <= 0) {
        alert("Cart is Empty")
    }
    else {
        count--;
    }
    sessionStorage.setItem('Batmobile_The_Dark_Knight', count);
    console.log("Batmobile_The_Dark_Knight : Count = " + count);
})

// Here we are showing the username to the user and we are getting the username from the sessionManager
document.querySelector(".usernameButton").innerHTML = sessionStorage.getItem("username");

// logout of the user when username button is clicked and also send the user to the login page
document.querySelector(".usernameButton").addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "../index.html";

})