document.querySelector(".cart").addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "cart.html";
})

// These 4 functions will redirect to the page where we can add the items to the card

// Redirect from the Cart Page to the classic hotwheels page
document.querySelector(".classicHotwheelsRedirect").addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "html/classic_hotwheels_page.html";
})

// Redirect from the Cart Page to the Sports Hotwheels Page
document.querySelector(".sportsHotwheelsRedirect").addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "html/sports_hotwheels_page.html";
})

// Redirect from the Cart Page to the Truck Hotwheels Page
document.querySelector(".truckHotwheelsRedirect").addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "html/truck_hotwheels_page.html";
})

// Redirect from the Cart Page to the Batmobile Hotwheels Page
document.querySelector(".batmanHotwheelsRedirect").addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "html/batmobile_hotwheels_page.html";
})

// Redirect from Cart Page to Homepage
document.querySelector(".homePageRedirect").addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "homepage.html";
})

// This checking is for Classic cars 
var htmlcode = "";
for (var i = 0; i < sessionStorage.length; i++) {

    var keySession = sessionStorage.key(i);
    var valueSession = sessionStorage.getItem(keySession);

    if (valueSession > 0) {


        var imageURL = "../images/classic_cars/" + keySession + ".jpg";
        htmlcode = htmlcode + `
        <div class="cart_body_image">
            <img src="${imageURL}" alt="${keySession}" >
        </div>
        <div class="cart_body_button">
            <Button class="add_quantity_button">Remove</BUtton>
            <Button class="add_quantity_button">Add</Button>
        </div>
        <div class="cart_body_quantity">
            ${valueSession}
        </div>`;
    }
}
document.querySelector(".cart_flex_container").innerHTML = htmlcode;

document.querySelector(".add_quantity_button").addEventListener("click", function(event) {
    
})

