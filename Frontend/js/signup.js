// This will redirect to the index.html page when an click is registered
document.querySelector(".loginRedirect").addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "index.html";
})

// On successfull Sign Up it will also redirect to the Login Page
document.querySelector(".signUpButton").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "index.html";
})

