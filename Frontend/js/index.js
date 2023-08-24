const username = document.querySelector("#userNameInput");
const password = document.querySelector("#passwordInput");
const awsUrl = "http://hotwheels-backend.ap-south-1.elasticbeanstalk.com/";

// If the user doesn't have an account clicking on it will take to the sign up page
document.querySelector(".accountCreation").addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "signup.html";
})

//On successfull login it will take to the user to the homepage
document.querySelector(".loginButton").addEventListener("click", async function (event) {
    event.preventDefault();

    // Logging the username and the password in the console
    console.log("The username is : " + username.value);
    console.log("The password is : " + password.value);

    // for now we are hard codding the url which we have to send

    const requestData = {
        "username": `${username.value}`,
        "password": `${password.value}`
    };

    const completeUrl = awsUrl+"login-page/getUser";
    console.log("The complete URL is : " + completeUrl);

    try {
        const response = await fetch(completeUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestData)
        });

        console.log("The response is : ", response);
        if (response.ok) {
            const responseData = await response.json();
            console.log("Response:", responseData);
            sessionStorage.setItem("username", username.value);
            console.log(sessionStorage.getItem("username"));
            window.location.href = "homepage.html";
        } else {
            console.error("Request failed:", response.status, response.statusText);
        }
    } catch (error) {
        console.error("An error occurred:", error);
    }

})