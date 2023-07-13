document.querySelector(".cart").addEventListener("click",function(event) {
    event.preventDefault();
    window.location.href = "cart.html";
})

// These 4 functions will redirect to the page where we can add the items to the card

// Redirect from the Cart Page to the classic hotwheels page
document.querySelector(".classicHotwheelsRedirect").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "html/classic_hotwheels_page.html";
})

// Redirect from the Cart Page to the Sports Hotwheels Page
document.querySelector(".sportsHotwheelsRedirect").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "html/sports_hotwheels_page.html";
})

// Redirect from the Cart Page to the Truck Hotwheels Page
document.querySelector(".truckHotwheelsRedirect").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "html/truck_hotwheels_page.html";
})

// Redirect from the Cart Page to the Batmobile Hotwheels Page
document.querySelector(".batmanHotwheelsRedirect").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "html/batmobile_hotwheels_page.html";
})

// Redirect from Cart Page to Homepage
document.querySelector(".homePageRedirect").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "homepage.html";
})