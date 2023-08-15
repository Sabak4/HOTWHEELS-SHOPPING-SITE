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
document.querySelector(".motorcycleHotwheelsRedirect").addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "html/motorcycle_hotwheels_page.html";
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
    var locationFolder = "";
    if (keySession.includes('Pontiac_Firebird_67_400') || keySession.includes('Shelby_67_GT500_2010') || keySession.includes('Toyota_Celica_70_Green_2013') || keySession.includes('Dodge_Charger_71') || keySession.includes('ElCamino_71') || keySession.includes('Fort_Falcon_73_XB') || keySession.includes('DeLorean_81_DMC') || keySession.includes('Honda_90_Civic')) {
        locationFolder = "classic_cars";
    } else if (keySession.includes('BMW_E36_M3_Race') || keySession.includes('Bugatti_Chiron_Blue_16') || keySession.includes('Bugatti_Veyron') || keySession.includes('Lamborghini_Countach') || keySession.includes('Porshe_935') || keySession.includes('RRRoadsteer') || keySession.includes('SRT_Viper_GTS_R') || keySession.includes('Super_Blitzen_Green')) {
        locationFolder = "sports_car";
    } else if (keySession.includes('Kawasaki_Ninja_GPZ_900R') || keySession.includes('Honda_CB750_Cafe') || keySession.includes('Harley_Davidson_Fat_Boy_2012') || keySession.includes('Ducati_Diavel_2013') || keySession.includes('Ducati_DesertX') || keySession.includes('Ducati_1199_Panigale') || keySession.includes('Deadpool_Scooter') || keySession.includes('Batpod_2008')) {
        locationFolder = "motorcycles";
    } else if (keySession.includes('Batmobile_1966_Tv_Series') || keySession.includes('Batmobile_Arkham_Knight_2015') || keySession.includes('Batmobile_Batman_Forever') || keySession.includes('Batmobile_Batman_The_Animated_Series') || keySession.includes('Batmobile_Batman_v_Superman') || keySession.includes('Batmobile_Justice_League_2018') || keySession.includes('Batmobile_The_Batman') || keySession.includes('Batmobile_The_Dark_Knight')) {
        locationFolder = "batmobile";
    }

    if (valueSession > 0) {

        var imageURL = "images/" + locationFolder + "/" + keySession + ".jpg";
        console.log("The image URL is : " + imageURL);
        var imageName = keySession.replace(/_/g, ' ');
        console.log("The Image name URL is : " + imageName);
        // Here we are setting the image name which is going to be associated with each key n the sessionManager
        htmlcode = htmlcode + `
        <div class="cart_body_items">
        <div class="cart_body_image">
            <img src="${imageURL}" alt="${keySession}" >
            <p>${imageName}</p>
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

        /*
        This is for Classic Cars
        */
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

        /*
        This is for Sports Cars
        */

        // This check is for BMW_E36_M3_Race
        if (list_of_class_add_button.includes('BMW_E36_M3_Race')) {
            var count = sessionStorage.getItem('BMW_E36_M3_Race');
            count++;
            sessionStorage.setItem('BMW_E36_M3_Race', count);
            console.log(sessionStorage.getItem('BMW_E36_M3_Race'));
            document.querySelector(".cart_body_quantity.BMW_E36_M3_Race").innerHTML = `
            ${count}
            `;
            console.log("Count of BMW_E36_M3_Race is " + count);
        }

        //This check is for Bugatti_Chiron_Blue_16
        if (list_of_class_add_button.includes('Bugatti_Chiron_Blue_16')) {
            var count = sessionStorage.getItem('Bugatti_Chiron_Blue_16');
            count++;
            sessionStorage.setItem('Bugatti_Chiron_Blue_16', count);
            console.log(sessionStorage.getItem('Bugatti_Chiron_Blue_16'));
            document.querySelector(".cart_body_quantity.Bugatti_Chiron_Blue_16").innerHTML = `
            ${count}
            `;
            console.log("Count of Bugatti_Chiron_Blue_16 is " + count);
        }

        //This check is for Bugatti_Veyron
        if (list_of_class_add_button.includes('Bugatti_Veyron')) {
            var count = sessionStorage.getItem('Bugatti_Veyron');
            count++;
            sessionStorage.setItem('Bugatti_Veyron', count);
            console.log(sessionStorage.getItem('Bugatti_Veyron'));
            document.querySelector(".cart_body_quantity.Bugatti_Veyron").innerHTML = `
            ${count}
            `;
            console.log("Count of Bugatti_Veyron is " + count);
        }

        //This check is for Lamborghini_Countach
        if (list_of_class_add_button.includes('Lamborghini_Countach')) {
            var count = sessionStorage.getItem('Lamborghini_Countach');
            count++;
            sessionStorage.setItem('Lamborghini_Countach', count);
            console.log(sessionStorage.getItem('Lamborghini_Countach'));
            document.querySelector(".cart_body_quantity.Lamborghini_Countach").innerHTML = `
            ${count}
            `;
            console.log("Count of Lamborghini_Countach is " + count);
        }

        //This check is for Porshe_935
        if (list_of_class_add_button.includes('Porshe_935')) {
            var count = sessionStorage.getItem('Porshe_935');
            count++;
            sessionStorage.setItem('Porshe_935', count);
            console.log(sessionStorage.getItem('Porshe_935'));
            document.querySelector(".cart_body_quantity.Porshe_935").innerHTML = `
            ${count}
            `;
            console.log("Count of Porshe_935 is " + count);
        }

        //This check is for RRRoadsteer
        if (list_of_class_add_button.includes('RRRoadsteer')) {
            var count = sessionStorage.getItem('RRRoadsteer');
            count++;
            sessionStorage.setItem('RRRoadsteer', count);
            console.log(sessionStorage.getItem('RRRoadsteer'));
            document.querySelector(".cart_body_quantity.RRRoadsteer").innerHTML = `
            ${count}
            `;
            console.log("Count of RRRoadsteer is " + count);
        }

        //This check is for SRT_Viper_GTS_R
        if (list_of_class_add_button.includes('SRT_Viper_GTS_R')) {
            var count = sessionStorage.getItem('SRT_Viper_GTS_R');
            count++;
            sessionStorage.setItem('SRT_Viper_GTS_R', count);
            console.log(sessionStorage.getItem('SRT_Viper_GTS_R'));
            document.querySelector(".cart_body_quantity.SRT_Viper_GTS_R").innerHTML = `
            ${count}
            `;
            console.log("Count of SRT_Viper_GTS_R is " + count);
        }

        //This check is for Super_Blitzen_Green
        if (list_of_class_add_button.includes('Super_Blitzen_Green')) {
            var count = sessionStorage.getItem('Super_Blitzen_Green');
            count++;
            sessionStorage.setItem('Super_Blitzen_Green', count);
            console.log(sessionStorage.getItem('Super_Blitzen_Green'));
            document.querySelector(".cart_body_quantity.Super_Blitzen_Green").innerHTML = `
            ${count}
            `;
            console.log("Count of Super_Blitzen_Green is " + count);
        }

        /*
        This is for Motorcycle
        */

        // This check is for Kawasaki_Ninja_GPZ_900R
        if (list_of_class_add_button.includes('Kawasaki_Ninja_GPZ_900R')) {
            var count = sessionStorage.getItem('Kawasaki_Ninja_GPZ_900R');
            count++;
            sessionStorage.setItem('Kawasaki_Ninja_GPZ_900R', count);
            console.log(sessionStorage.getItem('Kawasaki_Ninja_GPZ_900R'));
            document.querySelector(".cart_body_quantity.Kawasaki_Ninja_GPZ_900R").innerHTML = `
            ${count}
            `;
            console.log("Count of Kawasaki_Ninja_GPZ_900R is " + count);
        }

        //This check is for Honda_CB750_Cafe
        if (list_of_class_add_button.includes('Honda_CB750_Cafe')) {
            var count = sessionStorage.getItem('Honda_CB750_Cafe');
            count++;
            sessionStorage.setItem('Honda_CB750_Cafe', count);
            console.log(sessionStorage.getItem('Honda_CB750_Cafe'));
            document.querySelector(".cart_body_quantity.Honda_CB750_Cafe").innerHTML = `
            ${count}
            `;
            console.log("Count of Honda_CB750_Cafe is " + count);
        }

        //This check is for Harley_Davidson_Fat_Boy_2012
        if (list_of_class_add_button.includes('Harley_Davidson_Fat_Boy_2012')) {
            var count = sessionStorage.getItem('Harley_Davidson_Fat_Boy_2012');
            count++;
            sessionStorage.setItem('Harley_Davidson_Fat_Boy_2012', count);
            console.log(sessionStorage.getItem('Harley_Davidson_Fat_Boy_2012'));
            document.querySelector(".cart_body_quantity.Harley_Davidson_Fat_Boy_2012").innerHTML = `
            ${count}
            `;
            console.log("Count of Harley_Davidson_Fat_Boy_2012 is " + count);
        }

        //This check is for Ducati_Diavel_2013
        if (list_of_class_add_button.includes('Ducati_Diavel_2013')) {
            var count = sessionStorage.getItem('Ducati_Diavel_2013');
            count++;
            sessionStorage.setItem('Ducati_Diavel_2013', count);
            console.log(sessionStorage.getItem('Ducati_Diavel_2013'));
            document.querySelector(".cart_body_quantity.Ducati_Diavel_2013").innerHTML = `
            ${count}
            `;
            console.log("Count of Ducati_Diavel_2013 is " + count);
        }

        //This check is for Ducati_DesertX
        if (list_of_class_add_button.includes('Ducati_DesertX')) {
            var count = sessionStorage.getItem('Ducati_DesertX');
            count++;
            sessionStorage.setItem('Ducati_DesertX', count);
            console.log(sessionStorage.getItem('Ducati_DesertX'));
            document.querySelector(".cart_body_quantity.Ducati_DesertX").innerHTML = `
            ${count}
            `;
            console.log("Count of Ducati_DesertX is " + count);
        }

        //This check is for Ducati_1199_Panigale
        if (list_of_class_add_button.includes('Ducati_1199_Panigale')) {
            var count = sessionStorage.getItem('Ducati_1199_Panigale');
            count++;
            sessionStorage.setItem('Ducati_1199_Panigale', count);
            console.log(sessionStorage.getItem('Ducati_1199_Panigale'));
            document.querySelector(".cart_body_quantity.Ducati_1199_Panigale").innerHTML = `
            ${count}
            `;
            console.log("Count of Ducati_1199_Panigale is " + count);
        }

        //This check is for Deadpool_Scooter
        if (list_of_class_add_button.includes('Deadpool_Scooter')) {
            var count = sessionStorage.getItem('Deadpool_Scooter');
            count++;
            sessionStorage.setItem('Deadpool_Scooter', count);
            console.log(sessionStorage.getItem('Deadpool_Scooter'));
            document.querySelector(".cart_body_quantity.Deadpool_Scooter").innerHTML = `
            ${count}
            `;
            console.log("Count of Deadpool_Scooter is " + count);
        }

        //This check is for Batpod_2008
        if (list_of_class_add_button.includes('Batpod_2008')) {
            var count = sessionStorage.getItem('Batpod_2008');
            count++;
            sessionStorage.setItem('Batpod_2008', count);
            console.log(sessionStorage.getItem('Batpod_2008'));
            document.querySelector(".cart_body_quantity.Batpod_2008").innerHTML = `
            ${count}
            `;
            console.log("Count of Batpod_2008 is " + count);
        }

        /*
        This is for Batmobile
        */

        // This check is for Batmobile_1966_Tv_Series
        if (list_of_class_add_button.includes('Batmobile_1966_Tv_Series')) {
            var count = sessionStorage.getItem('Batmobile_1966_Tv_Series');
            count++;
            sessionStorage.setItem('Batmobile_1966_Tv_Series', count);
            console.log(sessionStorage.getItem('Batmobile_1966_Tv_Series'));
            document.querySelector(".cart_body_quantity.Batmobile_1966_Tv_Series").innerHTML = `
        ${count}
        `;
            console.log("Count of Batmobile_1966_Tv_Series is " + count);
        }

        //This check is for Batmobile_Batman_Forever
        if (list_of_class_add_button.includes('Batmobile_Batman_Forever')) {
            var count = sessionStorage.getItem('Batmobile_Batman_Forever');
            count++;
            sessionStorage.setItem('Batmobile_Batman_Forever', count);
            console.log(sessionStorage.getItem('Batmobile_Batman_Forever'));
            document.querySelector(".cart_body_quantity.Batmobile_Batman_Forever").innerHTML = `
        ${count}
        `;
            console.log("Count of Batmobile_Batman_Forever is " + count);
        }

        //This check is for Batmobile_Batman_The_Animated_Series
        if (list_of_class_add_button.includes('Batmobile_Batman_The_Animated_Series')) {
            var count = sessionStorage.getItem('Batmobile_Batman_The_Animated_Series');
            count++;
            sessionStorage.setItem('Batmobile_Batman_The_Animated_Series', count);
            console.log(sessionStorage.getItem('Batmobile_Batman_The_Animated_Series'));
            document.querySelector(".cart_body_quantity.Batmobile_Batman_The_Animated_Series").innerHTML = `
        ${count}
        `;
            console.log("Count of Batmobile_Batman_The_Animated_Series is " + count);
        }

        //This check is for Batmobile_Batman_v_Superman
        if (list_of_class_add_button.includes('Batmobile_Batman_v_Superman')) {
            var count = sessionStorage.getItem('Batmobile_Batman_v_Superman');
            count++;
            sessionStorage.setItem('Batmobile_Batman_v_Superman', count);
            console.log(sessionStorage.getItem('Batmobile_Batman_v_Superman'));
            document.querySelector(".cart_body_quantity.Batmobile_Batman_v_Superman").innerHTML = `
        ${count}
        `;
            console.log("Count of Batmobile_Batman_v_Superman is " + count);
        }

        //This check is for Batmobile_Justice_League_2018
        if (list_of_class_add_button.includes('Batmobile_Justice_League_2018')) {
            var count = sessionStorage.getItem('Batmobile_Justice_League_2018');
            count++;
            sessionStorage.setItem('Batmobile_Justice_League_2018', count);
            console.log(sessionStorage.getItem('Batmobile_Justice_League_2018'));
            document.querySelector(".cart_body_quantity.Batmobile_Justice_League_2018").innerHTML = `
        ${count}
        `;
            console.log("Count of Batmobile_Justice_League_2018 is " + count);
        }

        //This check is for Batmobile_The_Batman
        if (list_of_class_add_button.includes('Batmobile_The_Batman')) {
            var count = sessionStorage.getItem('Batmobile_The_Batman');
            count++;
            sessionStorage.setItem('Batmobile_The_Batman', count);
            console.log(sessionStorage.getItem('Batmobile_The_Batman'));
            document.querySelector(".cart_body_quantity.Batmobile_The_Batman").innerHTML = `
        ${count}
        `;
            console.log("Count of Batmobile_The_Batman is " + count);
        }

        //This check is for Batmobile_The_Dark_Knight
        if (list_of_class_add_button.includes('Batmobile_The_Dark_Knight')) {
            var count = sessionStorage.getItem('Batmobile_The_Dark_Knight');
            count++;
            sessionStorage.setItem('Batmobile_The_Dark_Knight', count);
            console.log(sessionStorage.getItem('Batmobile_The_Dark_Knight'));
            document.querySelector(".cart_body_quantity.Batmobile_The_Dark_Knight").innerHTML = `
        ${count}
        `;
            console.log("Count of Batmobile_The_Dark_Knight is " + count);
        }

        //This check is for Batmobile_Arkham_Knight_2015
        if (list_of_class_add_button.includes('Batmobile_Arkham_Knight_2015')) {
            var count = sessionStorage.getItem('Batmobile_Arkham_Knight_2015');
            count++;
            sessionStorage.setItem('Batmobile_Arkham_Knight_2015', count);
            console.log(sessionStorage.getItem('Batmobile_Arkham_Knight_2015'));
            document.querySelector(".cart_body_quantity.Batmobile_Arkham_Knight_2015").innerHTML = `
        ${count}
        `;
            console.log("Count of Batmobile_Arkham_Knight_2015 is " + count);
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

        /*
        This is for the Classic Cars
        */

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

        /*
        This is for the Sports Cars
        */

        // This check is for Pontiac_Firebird_67_400
        if (list_of_class_add_button.includes('BMW_E36_M3_Race')) {
            var count = sessionStorage.getItem('BMW_E36_M3_Race');
            count--;
            if (count >= 0) {
                sessionStorage.setItem('BMW_E36_M3_Race', count);
                console.log(sessionStorage.getItem('BMW_E36_M3_Race'));
                document.querySelector(".cart_body_quantity.BMW_E36_M3_Race").innerHTML = `
            ${count}
            `;
                console.log("Count of BMW_E36_M3_Race is " + count);
            } else {
                alert("Cart item is already Empty cannot delete item");
            }
        }

        //This check is for Bugatti_Chiron_Blue_16
        if (list_of_class_add_button.includes('Bugatti_Chiron_Blue_16')) {
            var count = sessionStorage.getItem('Bugatti_Chiron_Blue_16');
            count--;
            if (count >= 0) {
                sessionStorage.setItem('Bugatti_Chiron_Blue_16', count);
                console.log(sessionStorage.getItem('Bugatti_Chiron_Blue_16'));
                document.querySelector(".cart_body_quantity.Bugatti_Chiron_Blue_16").innerHTML = `
            ${count}
            `;
                console.log("Count of Bugatti_Chiron_Blue_16 is " + count);
            } else {
                alert("Cart item is already Empty cannot delete item");
            }
        }

        //This check is for Bugatti_Veyron
        if (list_of_class_add_button.includes('Bugatti_Veyron')) {
            var count = sessionStorage.getItem('Bugatti_Veyron');
            count--;
            if (count >= 0) {
                sessionStorage.setItem('Bugatti_Veyron', count);
                console.log(sessionStorage.getItem('Bugatti_Veyron'));
                document.querySelector(".cart_body_quantity.Bugatti_Veyron").innerHTML = `
            ${count}
            `;
                console.log("Count of Bugatti_Veyron is " + count);
            } else {
                alert("Cart item is already Empty cannot delete item");
            }
        }

        //This check is for Lamborghini_Countach
        if (list_of_class_add_button.includes('Lamborghini_Countach')) {
            var count = sessionStorage.getItem('Lamborghini_Countach');
            count--;
            if (count >= 0) {
                sessionStorage.setItem('Lamborghini_Countach', count);
                console.log(sessionStorage.getItem('Lamborghini_Countach'));
                document.querySelector(".cart_body_quantity.Lamborghini_Countach").innerHTML = `
            ${count}
            `;
                console.log("Count of Lamborghini_Countach is " + count);
            } else {
                alert("Cart item is already Empty cannot delete item");
            }
        }

        //This check is for Porshe_935
        if (list_of_class_add_button.includes('Porshe_935')) {
            var count = sessionStorage.getItem('Porshe_935');
            count--;
            if (count >= 0) {
                sessionStorage.setItem('Porshe_935', count);
                console.log(sessionStorage.getItem('Porshe_935'));
                document.querySelector(".cart_body_quantity.Porshe_935").innerHTML = `
            ${count}
            `;
                console.log("Count of Porshe_935 is " + count);
            } else {
                alert("Cart item is already Empty cannot delete item");
            }
        }

        //This check is for RRRoadsteer
        if (list_of_class_add_button.includes('RRRoadsteer')) {
            var count = sessionStorage.getItem('RRRoadsteer');
            count--;
            if (count >= 0) {
                sessionStorage.setItem('RRRoadsteer', count);
                console.log(sessionStorage.getItem('RRRoadsteer'));
                document.querySelector(".cart_body_quantity.RRRoadsteer").innerHTML = `
            ${count}
            `;
                console.log("Count of RRRoadsteer is " + count);
            } else {
                alert("Cart item is already Empty cannot delete item");
            }
        }

        //This check is for SRT_Viper_GTS_R
        if (list_of_class_add_button.includes('SRT_Viper_GTS_R')) {
            var count = sessionStorage.getItem('SRT_Viper_GTS_R');
            count--;
            if (count >= 0) {
                sessionStorage.setItem('SRT_Viper_GTS_R', count);
                console.log(sessionStorage.getItem('SRT_Viper_GTS_R'));
                document.querySelector(".cart_body_quantity.SRT_Viper_GTS_R").innerHTML = `
            ${count}
            `;
                console.log("Count of SRT_Viper_GTS_R is " + count);
            } else {
                alert("Cart item is already Empty cannot delete item");
            }
        }

        //This check is for Super_Blitzen_Green
        if (list_of_class_add_button.includes('Super_Blitzen_Green')) {
            var count = sessionStorage.getItem('Super_Blitzen_Green');
            count--;
            if (count >= 0) {
                sessionStorage.setItem('Super_Blitzen_Green', count);
                console.log(sessionStorage.getItem('Super_Blitzen_Green'));
                document.querySelector(".cart_body_quantity.Super_Blitzen_Green").innerHTML = `
            ${count}
            `;
                console.log("Count of Super_Blitzen_Green is " + count);
            } else {
                alert("Cart item is already Empty cannot delete item");
            }
        }

        /*
        This is for the Motorcycle
        */

        // This check is for Kawasaki_Ninja_GPZ_900R
        if (list_of_class_add_button.includes('Kawasaki_Ninja_GPZ_900R')) {
            var count = sessionStorage.getItem('Kawasaki_Ninja_GPZ_900R');
            count--;
            if (count >= 0) {
                sessionStorage.setItem('Kawasaki_Ninja_GPZ_900R', count);
                console.log(sessionStorage.getItem('Kawasaki_Ninja_GPZ_900R'));
                document.querySelector(".cart_body_quantity.Kawasaki_Ninja_GPZ_900R").innerHTML = `
            ${count}
            `;
                console.log("Count of Kawasaki_Ninja_GPZ_900R is " + count);
            } else {
                alert("Cart item is already Empty cannot delete item");
            }
        }

        //This check is for Honda_CB750_Cafe
        if (list_of_class_add_button.includes('Honda_CB750_Cafe')) {
            var count = sessionStorage.getItem('Honda_CB750_Cafe');
            count--;
            if (count >= 0) {
                sessionStorage.setItem('Honda_CB750_Cafe', count);
                console.log(sessionStorage.getItem('Honda_CB750_Cafe'));
                document.querySelector(".cart_body_quantity.Honda_CB750_Cafe").innerHTML = `
            ${count}
            `;
                console.log("Count of Honda_CB750_Cafe is " + count);
            } else {
                alert("Cart item is already Empty cannot delete item");
            }
        }

        //This check is for Harley_Davidson_Fat_Boy_2012
        if (list_of_class_add_button.includes('Harley_Davidson_Fat_Boy_2012')) {
            var count = sessionStorage.getItem('Harley_Davidson_Fat_Boy_2012');
            count--;
            if (count >= 0) {
                sessionStorage.setItem('Harley_Davidson_Fat_Boy_2012', count);
                console.log(sessionStorage.getItem('Harley_Davidson_Fat_Boy_2012'));
                document.querySelector(".cart_body_quantity.Harley_Davidson_Fat_Boy_2012").innerHTML = `
            ${count}
            `;
                console.log("Count of Harley_Davidson_Fat_Boy_2012 is " + count);
            } else {
                alert("Cart item is already Empty cannot delete item");
            }
        }

        //This check is for Ducati_Diavel_2013
        if (list_of_class_add_button.includes('Ducati_Diavel_2013')) {
            var count = sessionStorage.getItem('Ducati_Diavel_2013');
            count--;
            if (count >= 0) {
                sessionStorage.setItem('Ducati_Diavel_2013', count);
                console.log(sessionStorage.getItem('Ducati_Diavel_2013'));
                document.querySelector(".cart_body_quantity.Ducati_Diavel_2013").innerHTML = `
            ${count}
            `;
                console.log("Count of Ducati_Diavel_2013 is " + count);
            } else {
                alert("Cart item is already Empty cannot delete item");
            }
        }

        //This check is for Ducati_DesertX
        if (list_of_class_add_button.includes('Ducati_DesertX')) {
            var count = sessionStorage.getItem('Ducati_DesertX');
            count--;
            if (count >= 0) {
                sessionStorage.setItem('Ducati_DesertX', count);
                console.log(sessionStorage.getItem('Ducati_DesertX'));
                document.querySelector(".cart_body_quantity.Ducati_DesertX").innerHTML = `
            ${count}
            `;
                console.log("Count of Ducati_DesertX is " + count);
            } else {
                alert("Cart item is already Empty cannot delete item");
            }
        }

        //This check is for Ducati_1199_Panigale
        if (list_of_class_add_button.includes('Ducati_1199_Panigale')) {
            var count = sessionStorage.getItem('Ducati_1199_Panigale');
            count--;
            if (count >= 0) {
                sessionStorage.setItem('Ducati_1199_Panigale', count);
                console.log(sessionStorage.getItem('Ducati_1199_Panigale'));
                document.querySelector(".cart_body_quantity.Ducati_1199_Panigale").innerHTML = `
            ${count}
            `;
                console.log("Count of Ducati_1199_Panigale is " + count);
            } else {
                alert("Cart item is already Empty cannot delete item");
            }
        }

        //This check is for Deadpool_Scooter
        if (list_of_class_add_button.includes('Deadpool_Scooter')) {
            var count = sessionStorage.getItem('Deadpool_Scooter');
            count--;
            if (count >= 0) {
                sessionStorage.setItem('Deadpool_Scooter', count);
                console.log(sessionStorage.getItem('Deadpool_Scooter'));
                document.querySelector(".cart_body_quantity.Deadpool_Scooter").innerHTML = `
            ${count}
            `;
                console.log("Count of Deadpool_Scooter is " + count);
            } else {
                alert("Cart item is already Empty cannot delete item");
            }
        }

        //This check is for Batpod_2008
        if (list_of_class_add_button.includes('Batpod_2008')) {
            var count = sessionStorage.getItem('Batpod_2008');
            count--;
            if (count >= 0) {
                sessionStorage.setItem('Batpod_2008', count);
                console.log(sessionStorage.getItem('Batpod_2008'));
                document.querySelector(".cart_body_quantity.Batpod_2008").innerHTML = `
            ${count}
            `;
                console.log("Count of Batpod_2008 is " + count);
            } else {
                alert("Cart item is already Empty cannot delete item");
            }
        }

        /*
        This is for the Batmobile
        */

        // This check is for Batmobile_1966_Tv_Series
        if (list_of_class_add_button.includes('Batmobile_1966_Tv_Series')) {
            var count = sessionStorage.getItem('Batmobile_1966_Tv_Series');
            count--;
            if (count >= 0) {
                sessionStorage.setItem('Batmobile_1966_Tv_Series', count);
                console.log(sessionStorage.getItem('Batmobile_1966_Tv_Series'));
                document.querySelector(".cart_body_quantity.Batmobile_1966_Tv_Series").innerHTML = `
            ${count}
            `;
                console.log("Count of Batmobile_1966_Tv_Series is " + count);
            } else {
                alert("Cart item is already Empty cannot delete item");
            }
        }

        //This check is for Batmobile_Arkham_Knight_2015
        if (list_of_class_add_button.includes('Batmobile_Arkham_Knight_2015')) {
            var count = sessionStorage.getItem('Batmobile_Arkham_Knight_2015');
            count--;
            if (count >= 0) {
                sessionStorage.setItem('Batmobile_Arkham_Knight_2015', count);
                console.log(sessionStorage.getItem('Batmobile_Arkham_Knight_2015'));
                document.querySelector(".cart_body_quantity.Batmobile_Arkham_Knight_2015").innerHTML = `
            ${count}
            `;
                console.log("Count of Batmobile_Arkham_Knight_2015 is " + count);
            } else {
                alert("Cart item is already Empty cannot delete item");
            }
        }

        //This check is for Batmobile_Batman_Forever
        if (list_of_class_add_button.includes('Batmobile_Batman_Forever')) {
            var count = sessionStorage.getItem('Batmobile_Batman_Forever');
            count--;
            if (count >= 0) {
                sessionStorage.setItem('Batmobile_Batman_Forever', count);
                console.log(sessionStorage.getItem('Batmobile_Batman_Forever'));
                document.querySelector(".cart_body_quantity.Batmobile_Batman_Forever").innerHTML = `
            ${count}
            `;
                console.log("Count of Batmobile_Batman_Forever is " + count);
            } else {
                alert("Cart item is already Empty cannot delete item");
            }
        }

        //This check is for Batmobile_Batman_The_Animated_Series
        if (list_of_class_add_button.includes('Batmobile_Batman_The_Animated_Series')) {
            var count = sessionStorage.getItem('Batmobile_Batman_The_Animated_Series');
            count--;
            if (count >= 0) {
                sessionStorage.setItem('Batmobile_Batman_The_Animated_Series', count);
                console.log(sessionStorage.getItem('Batmobile_Batman_The_Animated_Series'));
                document.querySelector(".cart_body_quantity.Batmobile_Batman_The_Animated_Series").innerHTML = `
            ${count}
            `;
                console.log("Count of Batmobile_Batman_The_Animated_Series is " + count);
            } else {
                alert("Cart item is already Empty cannot delete item");
            }
        }

        //This check is for Batmobile_Batman_v_Superman
        if (list_of_class_add_button.includes('Batmobile_Batman_v_Superman')) {
            var count = sessionStorage.getItem('Batmobile_Batman_v_Superman');
            count--;
            if (count >= 0) {
                sessionStorage.setItem('Batmobile_Batman_v_Superman', count);
                console.log(sessionStorage.getItem('Batmobile_Batman_v_Superman'));
                document.querySelector(".cart_body_quantity.Batmobile_Batman_v_Superman").innerHTML = `
            ${count}
            `;
                console.log("Count of Batmobile_Batman_v_Superman is " + count);
            } else {
                alert("Cart item is already Empty cannot delete item");
            }
        }

        //This check is for Batmobile_Justice_League_2018
        if (list_of_class_add_button.includes('Batmobile_Justice_League_2018')) {
            var count = sessionStorage.getItem('Batmobile_Justice_League_2018');
            count--;
            if (count >= 0) {
                sessionStorage.setItem('Batmobile_Justice_League_2018', count);
                console.log(sessionStorage.getItem('Batmobile_Justice_League_2018'));
                document.querySelector(".cart_body_quantity.Batmobile_Justice_League_2018").innerHTML = `
            ${count}
            `;
                console.log("Count of Batmobile_Justice_League_2018 is " + count);
            } else {
                alert("Cart item is already Empty cannot delete item");
            }
        }

        //This check is for Batmobile_The_Batman
        if (list_of_class_add_button.includes('Batmobile_The_Batman')) {
            var count = sessionStorage.getItem('Batmobile_The_Batman');
            count--;
            if (count >= 0) {
                sessionStorage.setItem('Batmobile_The_Batman', count);
                console.log(sessionStorage.getItem('Batmobile_The_Batman'));
                document.querySelector(".cart_body_quantity.Batmobile_The_Batman").innerHTML = `
            ${count}
            `;
                console.log("Count of Batmobile_The_Batman is " + count);
            } else {
                alert("Cart item is already Empty cannot delete item");
            }
        }

        //This check is for Batmobile_The_Dark_Knight
        if (list_of_class_add_button.includes('Batmobile_The_Dark_Knight')) {
            var count = sessionStorage.getItem('Batmobile_The_Dark_Knight');
            count--;
            if (count >= 0) {
                sessionStorage.setItem('Batmobile_The_Dark_Knight', count);
                console.log(sessionStorage.getItem('Batmobile_The_Dark_Knight'));
                document.querySelector(".cart_body_quantity.Batmobile_The_Dark_Knight").innerHTML = `
            ${count}
            `;
                console.log("Count of Batmobile_The_Dark_Knight is " + count);
            } else {
                alert("Cart item is already Empty cannot delete item");
            }
        }
    })
})


