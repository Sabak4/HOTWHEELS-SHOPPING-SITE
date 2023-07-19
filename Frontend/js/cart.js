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
// Here we are checking if we have any values inside stored the sessionStorage and according to it we are making having the cart system and also showing the quantity
var htmlcode = "";
for (var i = 0; i < sessionStorage.length; i++) {

    var keySession = sessionStorage.key(i);
    var valueSession = sessionStorage.getItem(keySession);

    if (valueSession > 0) {

        var imageURL = "../images/classic_cars/" + keySession + ".jpg";
        htmlcode = htmlcode + `
        <div class="cart_body_items">
        <div class="cart_body_image">
            <img src="${imageURL}" alt="${keySession}" >
        </div>
        <div class="cart_body_button">
            <Button class="remove_quantity_button ${keySession}">-</BUtton>
            <Button class="add_quantity_button ${keySession}">+</Button>
        </div>
        <div class="cart_body_quantity ${keySession}">
            ${valueSession}
        </div>
        </div>`;
    }
}
document.querySelector(".cart_flex_container").innerHTML = htmlcode;

// Here we are ADDING to the quantity of the cart
document.querySelectorAll(".add_quantity_button").forEach(function (button) {
    button.addEventListener("click", function (event) {

        // Here since classList returns a DOMTokenList object so we need to convert it to an array so that we can use .includes() function inside it
        var list_of_class_add_button = Array.from(event.target.classList);
        console.log("DomTokenList to an array conversion : " + list_of_class_add_button);

        // Here we are checking if we can find the classname from the list according to it adding the value in the sessionManager

        // This check is for Pontiac_Firebird_67_400
        if (list_of_class_add_button.includes('Pontiac_Firebird_67_400')) {
            var count = sessionStorage.getItem('Pontiac_Firebird_67_400');
            count++;
            sessionStorage.setItem('Pontiac_Firebird_67_400', count);
            console.log(sessionStorage.getItem('Pontiac_Firebird_67_400'));
            document.querySelector(".cart_body_quantity.Pontiac_Firebird_67_400").innerHTML = `
            ${count}
            `;
            console.log("Count of Pontiac_Firebird_67_400 is " + count);
        }

        //This check is for Shelby_67_GT500_2010
        if (list_of_class_add_button.includes('Shelby_67_GT500_2010')) {
            var count = sessionStorage.getItem('Shelby_67_GT500_2010');
            count++;
            sessionStorage.setItem('Shelby_67_GT500_2010', count);
            console.log(sessionStorage.getItem('Shelby_67_GT500_2010'));
            document.querySelector(".cart_body_quantity.Shelby_67_GT500_2010").innerHTML = `
            ${count}
            `;
            console.log("Count of Shelby_67_GT500_2010 is " + count);
        }

        //This check is for Toyota_Celica_70_Green_2013
        if (list_of_class_add_button.includes('Toyota_Celica_70_Green_2013')) {
            var count = sessionStorage.getItem('Toyota_Celica_70_Green_2013');
            count++;
            sessionStorage.setItem('Toyota_Celica_70_Green_2013', count);
            console.log(sessionStorage.getItem('Toyota_Celica_70_Green_2013'));
            document.querySelector(".cart_body_quantity.Toyota_Celica_70_Green_2013").innerHTML = `
            ${count}
            `;
            console.log("Count of Toyota_Celica_70_Green_2013 is " + count);
        }

        //This check is for Dodge_Charger_71
        if (list_of_class_add_button.includes('Dodge_Charger_71')) {
            var count = sessionStorage.getItem('Dodge_Charger_71');
            count++;
            sessionStorage.setItem('Dodge_Charger_71', count);
            console.log(sessionStorage.getItem('Dodge_Charger_71'));
            document.querySelector(".cart_body_quantity.Dodge_Charger_71").innerHTML = `
            ${count}
            `;
            console.log("Count of Dodge_Charger_71 is " + count);
        }

        //This check is for ElCamino_71
        if (list_of_class_add_button.includes('ElCamino_71')) {
            var count = sessionStorage.getItem('ElCamino_71');
            count++;
            sessionStorage.setItem('ElCamino_71', count);
            console.log(sessionStorage.getItem('ElCamino_71'));
            document.querySelector(".cart_body_quantity.ElCamino_71").innerHTML = `
            ${count}
            `;
            console.log("Count of ElCamino_71 is " + count);
        }

        //This check is for Fort_Falcon_73_XB
        if (list_of_class_add_button.includes('Fort_Falcon_73_XB')) {
            var count = sessionStorage.getItem('Fort_Falcon_73_XB');
            count++;
            sessionStorage.setItem('Fort_Falcon_73_XB', count);
            console.log(sessionStorage.getItem('Fort_Falcon_73_XB'));
            document.querySelector(".cart_body_quantity.Fort_Falcon_73_XB").innerHTML = `
            ${count}
            `;
            console.log("Count of Fort_Falcon_73_XB is " + count);
        }

        //This check is for DeLorean_81_DMC
        if (list_of_class_add_button.includes('DeLorean_81_DMC')) {
            var count = sessionStorage.getItem('DeLorean_81_DMC');
            count++;
            sessionStorage.setItem('DeLorean_81_DMC', count);
            console.log(sessionStorage.getItem('DeLorean_81_DMC'));
            document.querySelector(".cart_body_quantity.DeLorean_81_DMC").innerHTML = `
            ${count}
            `;
            console.log("Count of DeLorean_81_DMC is " + count);
        }

        //This check is for Honda_90_Civic
        if (list_of_class_add_button.includes('Honda_90_Civic')) {
            var count = sessionStorage.getItem('Honda_90_Civic');
            count++;
            sessionStorage.setItem('Honda_90_Civic', count);
            console.log(sessionStorage.getItem('Honda_90_Civic'));
            document.querySelector(".cart_body_quantity.Honda_90_Civic").innerHTML = `
            ${count}
            `;
            console.log("Count of Honda_90_Civic is " + count);
        }


    })
})


// Here we are DELETING to the quantity of the cart
document.querySelectorAll(".remove_quantity_button").forEach(function (button) {
    button.addEventListener("click", function (event) {

        // Here since classList returns a DOMTokenList object so we need to convert it to an array so that we can use .includes() function inside it
        var list_of_class_add_button = Array.from(event.target.classList);
        console.log("DomTokenList to an array conversion : " + list_of_class_add_button);

        // Here we are checking if we can find the classname from the list according to it adding the value in the sessionManager

        // This check is for Pontiac_Firebird_67_400
        if (list_of_class_add_button.includes('Pontiac_Firebird_67_400')) {
            var count = sessionStorage.getItem('Pontiac_Firebird_67_400');
            count--;
            if (count >= 0) {
                sessionStorage.setItem('Pontiac_Firebird_67_400', count);
                console.log(sessionStorage.getItem('Pontiac_Firebird_67_400'));
                document.querySelector(".cart_body_quantity.Pontiac_Firebird_67_400").innerHTML = `
            ${count}
            `;
                console.log("Count of Pontiac_Firebird_67_400 is " + count);
            } else {
                alert("Cart item is already Empty cannot delete item");
            }
        }

        //This check is for Shelby_67_GT500_2010
        if (list_of_class_add_button.includes('Shelby_67_GT500_2010')) {
            var count = sessionStorage.getItem('Shelby_67_GT500_2010');
            count--;
            if (count >= 0) {
                sessionStorage.setItem('Shelby_67_GT500_2010', count);
                console.log(sessionStorage.getItem('Shelby_67_GT500_2010'));
                document.querySelector(".cart_body_quantity.Shelby_67_GT500_2010").innerHTML = `
            ${count}
            `;
                console.log("Count of Shelby_67_GT500_2010 is " + count);
            } else {
                alert("Cart item is already Empty cannot delete item");
            }
        }

        //This check is for Toyota_Celica_70_Green_2013
        if (list_of_class_add_button.includes('Toyota_Celica_70_Green_2013')) {
            var count = sessionStorage.getItem('Toyota_Celica_70_Green_2013');
            count--;
            if (count >= 0) {
                sessionStorage.setItem('Toyota_Celica_70_Green_2013', count);
                console.log(sessionStorage.getItem('Toyota_Celica_70_Green_2013'));
                document.querySelector(".cart_body_quantity.Toyota_Celica_70_Green_2013").innerHTML = `
            ${count}
            `;
                console.log("Count of Toyota_Celica_70_Green_2013 is " + count);
            } else {
                alert("Cart item is already Empty cannot delete item");
            }
        }

        //This check is for Dodge_Charger_71
        if (list_of_class_add_button.includes('Dodge_Charger_71')) {
            var count = sessionStorage.getItem('Dodge_Charger_71');
            count--;
            if (count >= 0) {
                sessionStorage.setItem('Dodge_Charger_71', count);
                console.log(sessionStorage.getItem('Dodge_Charger_71'));
                document.querySelector(".cart_body_quantity.Dodge_Charger_71").innerHTML = `
            ${count}
            `;
                console.log("Count of Dodge_Charger_71 is " + count);
            } else {
                alert("Cart item is already Empty cannot delete item");
            }
        }

        //This check is for ElCamino_71
        if (list_of_class_add_button.includes('ElCamino_71')) {
            var count = sessionStorage.getItem('ElCamino_71');
            count--;
            if (count >= 0) {
                sessionStorage.setItem('ElCamino_71', count);
                console.log(sessionStorage.getItem('ElCamino_71'));
                document.querySelector(".cart_body_quantity.ElCamino_71").innerHTML = `
            ${count}
            `;
                console.log("Count of ElCamino_71 is " + count);
            } else {
                alert("Cart item is already Empty cannot delete item");
            }
        }

        //This check is for Fort_Falcon_73_XB
        if (list_of_class_add_button.includes('Fort_Falcon_73_XB')) {
            var count = sessionStorage.getItem('Fort_Falcon_73_XB');
            count--;
            if (count >= 0) {
                sessionStorage.setItem('Fort_Falcon_73_XB', count);
                console.log(sessionStorage.getItem('Fort_Falcon_73_XB'));
                document.querySelector(".cart_body_quantity.Fort_Falcon_73_XB").innerHTML = `
            ${count}
            `;
                console.log("Count of Fort_Falcon_73_XB is " + count);
            } else {
                alert("Cart item is already Empty cannot delete item");
            }
        }

        //This check is for DeLorean_81_DMC
        if (list_of_class_add_button.includes('DeLorean_81_DMC')) {
            var count = sessionStorage.getItem('DeLorean_81_DMC');
            count--;
            if (count >= 0) {
                sessionStorage.setItem('DeLorean_81_DMC', count);
                console.log(sessionStorage.getItem('DeLorean_81_DMC'));
                document.querySelector(".cart_body_quantity.DeLorean_81_DMC").innerHTML = `
            ${count}
            `;
                console.log("Count of DeLorean_81_DMC is " + count);
            } else {
                alert("Cart item is already Empty cannot delete item");
            }
        }

        //This check is for Honda_90_Civic
        if (list_of_class_add_button.includes('Honda_90_Civic')) {
            var count = sessionStorage.getItem('Honda_90_Civic');
            count--;
            if (count >= 0) {
                sessionStorage.setItem('Honda_90_Civic', count);
                console.log(sessionStorage.getItem('Honda_90_Civic'));
                document.querySelector(".cart_body_quantity.Honda_90_Civic").innerHTML = `
            ${count}
            `;
                console.log("Count of Honda_90_Civic is " + count);
            } else {
                alert("Cart item is already Empty cannot delete item");
            }
        }


    })
})


