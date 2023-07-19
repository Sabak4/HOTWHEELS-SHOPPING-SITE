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