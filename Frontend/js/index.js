// If the user doesn't have an account clicking on it will take to the sign up page
document.querySelector(".accountCreation").addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "signup.html";
})

//On successfull login it will take to the user to the homepage
document.querySelector(".loginButton").addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "homepage.html";
})