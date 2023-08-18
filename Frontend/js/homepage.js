document.querySelector(".cart").addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "cart.html";
})

// These 4 functions will redirect to the page where we can add the items to the card

// Redirect from the classic hotwheels carousel to the classic hotwheels page
document.querySelector(".classicHotwheelsRedirect").addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "html/classic_hotwheels_page.html";
})

// Redirect from the Sports Hotwheels to the Sports Hotwheels Page
document.querySelector(".sportsHotwheelsRedirect").addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "html/sports_hotwheels_page.html";
})

// Redirect from the Sports Hotwheels to the Truck Hotwheels Page
document.querySelector(".motorcycleHotwheelsRedirect").addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "html/motorcycle_hotwheels_page.html";
})

// Redirect from the Sports Hotwheels to the Batmobile Hotwheels Page
document.querySelector(".batmanHotwheelsRedirect").addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "html/batmobile_hotwheels_page.html";
})

// Here we are showing the username to the user and we are getting the username from the sessionManager
document.querySelector(".usernameButton").innerHTML = sessionStorage.getItem("username");

// logout of the user when username button is clicked and also send the user to the login page
document.querySelector(".usernameButton").addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "index.html";

})