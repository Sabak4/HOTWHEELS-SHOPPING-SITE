const firstName = document.querySelector("#inputFirstName");
const lastName = document.querySelector("#inputLastName");
const userName = document.querySelector("#inputUsername");
const dateOfBirth = document.querySelector("#inputDateOfBirth");
const password = document.querySelector("#inputPassword");

// This will redirect to the index.html page when an click is registered
document.querySelector(".loginRedirect").addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "index.html";
})

// On successfull Sign Up it will also redirect to the Login Page
document.querySelector(".signUpButton").addEventListener("click", async function (event) {
    event.preventDefault();

    // for now we are hard codding the url which we have to send

    /*
    {
    "username": "sbasak",
    "password": "sbasak",
    "first_name": "Soumya",
    "last_name": "Basak",
    "date_of_birth": "1997-10-04"
    }
    */
    const requestData = {
        "username": `${userName.value}`,
        "password": `${password.value}`,
        "first_name": `${firstName.value}`,
        "last_name": `${lastName.value}`,
        "date_of_birth": `${dateOfBirth.value}`
    };

    console.log("The json we are sending to the backend is : " , requestData);
    // Here we are making a post call to add users to the database
    // For now we are hardcoding the url
    try {
        const response = await fetch("/signup-page/addUser", {
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
            // window.location.href = "homepage.html";
        } else {
            console.error("Request failed:", response.status, response.statusText);
        }
    } catch (error) {
        console.error("An error occurred:", error);
    }
    // window.location.href = "index.html";
})

