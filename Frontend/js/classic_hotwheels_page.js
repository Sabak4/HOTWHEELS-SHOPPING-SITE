document.querySelector(".cart").addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "../cart.html";
})

// These 4 functions will redirect to the page where we can add the items to the card

// Redirect from the classic hotwheels carousel to the classic hotwheels page
document.querySelector(".classicHotwheelsRedirect").addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "classic_hotwheels_page.html";
})

// Redirect from the Sports Hotwheels to the Sports Hotwheels Page
document.querySelector(".sportsHotwheelsRedirect").addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "sports_hotwheels_page.html";
})

// Redirect from the Sports Hotwheels to the Truck Hotwheels Page
document.querySelector(".motorcycleHotwheelsRedirect").addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "motorcycle_hotwheels_page.html";
})

// Redirect from the Sports Hotwheels to the Batmobile Hotwheels Page
document.querySelector(".batmanHotwheelsRedirect").addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "batmobile_hotwheels_page.html";
})

//Redirect to the Homepage from Batmobile Page
document.querySelector(".header_button").addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "../homepage.html"
})

// Here we are counting the number of times we are ADDING AN ITEM into the Cart and sending the value to "cart.html"

// We are doing for "Pontiac_Firebird_67_400"
document.querySelector(".add_to_cart.Pontiac_Firebird_67_400").addEventListener("click", function (event) {
    event.preventDefault();
    var count = sessionStorage.getItem('Pontiac_Firebird_67_400');
    if (!count) {
        count = 1;
    }
    else {
        count++;
    }
    sessionStorage.setItem('Pontiac_Firebird_67_400', count);
    console.log("Pontiac_Firebird_67_400 : Count = " + count);
})
// We are doing for "Shelby_67_GT500_2010"
document.querySelector(".add_to_cart.Shelby_67_GT500_2010").addEventListener("click", function (event) {
    event.preventDefault();
    var count = sessionStorage.getItem('Shelby_67_GT500_2010');
    if (!count) {
        count = 1;
    }
    else {
        count++;
    }
    sessionStorage.setItem('Shelby_67_GT500_2010', count);
    console.log("Shelby_67_GT500_2010 : Count = " + count);
})
// We are doing for "Toyota_Celica_70_Green_2013"
document.querySelector(".add_to_cart.Toyota_Celica_70_Green_2013").addEventListener("click", function (event) {
    event.preventDefault();
    var count = sessionStorage.getItem('Toyota_Celica_70_Green_2013');
    if (!count) {
        count = 1;
    }
    else {
        count++;
    }
    sessionStorage.setItem('Toyota_Celica_70_Green_2013', count);
    console.log("Toyota_Celica_70_Green_2013 : Count = " + count);
})
// We are doing for "Dodge_Charger_71"
document.querySelector(".add_to_cart.Dodge_Charger_71").addEventListener("click", function (event) {
    event.preventDefault();
    var count = sessionStorage.getItem('Dodge_Charger_71');
    if (!count) {
        count = 1;
    }
    else {
        count++;
    }
    sessionStorage.setItem('Dodge_Charger_71', count);
    console.log("Dodge_Charger_71 : Count = " + count);

})
// We are doing for "ElCamino_71"
document.querySelector(".add_to_cart.ElCamino_71").addEventListener("click", function (event) {
    event.preventDefault();
    var count = sessionStorage.getItem('ElCamino_71');
    if (!count) {
        count = 1;
    }
    else {
        count++;
    }
    sessionStorage.setItem('ElCamino_71', count);
    console.log("ElCamino_71 : Count = " + count);
})
// We are doing for "Fort_Falcon_73_XB"
document.querySelector(".add_to_cart.Fort_Falcon_73_XB").addEventListener("click", function (event) {
    event.preventDefault();
    var count = sessionStorage.getItem('Fort_Falcon_73_XB');
    if (!count) {
        count = 1;
    }
    else {
        count++;
    }
    sessionStorage.setItem('Fort_Falcon_73_XB', count);
    console.log("Fort_Falcon_73_XB : Count = " + count);
})
// We are doing for "DeLorean_81_DMC"
document.querySelector(".add_to_cart.DeLorean_81_DMC").addEventListener("click", function (event) {
    event.preventDefault();
    var count = sessionStorage.getItem('DeLorean_81_DMC');
    if (!count) {
        count = 1;
    }
    else {
        count++;
    }
    sessionStorage.setItem('DeLorean_81_DMC', count);
    console.log("DeLorean_81_DMC : Count = " + count);
})
// We are doing for "Honda_90_Civic"
document.querySelector(".add_to_cart.Honda_90_Civic").addEventListener("click", function (event) {
    event.preventDefault();
    var count = sessionStorage.getItem('Honda_90_Civic');
    if (!count) {
        count = 1;
    }
    else {
        count++;
    }
    sessionStorage.setItem('Honda_90_Civic', count);
    console.log("Honda_90_Civic : Count = " + count);
})

// Here we are counting the number of times we are REMOVING ITEM from the Cart and sending the value to "cart.html"

// We are doing for "Pontiac_Firebird_67_400"
document.querySelector(".remove_from_cart.Pontiac_Firebird_67_400").addEventListener("click", function (event) {
    event.preventDefault();
    var count = sessionStorage.getItem('Pontiac_Firebird_67_400');
    if (!count) {
        alert("Cart is Empty");
    } else if (count <= 0) {
        alert("Cart is Empty")
    }
    else {
        count--;
    }
    sessionStorage.setItem('Pontiac_Firebird_67_400', count);
    console.log("Pontiac_Firebird_67_400 : Count = " + count);
})
// We are doing for "Shelby_67_GT500_2010"
document.querySelector(".remove_from_cart.Shelby_67_GT500_2010").addEventListener("click", function (event) {
    event.preventDefault();
    var count = sessionStorage.getItem('Shelby_67_GT500_2010');
    if (!count) {
        alert("Cart is Empty");
    } else if (count <= 0) {
        alert("Cart is Empty")
    }
    else {
        count--;
    }
    sessionStorage.setItem('Shelby_67_GT500_2010', count);
    console.log("Shelby_67_GT500_2010 : Count = " + count);
})
// We are doing for "Toyota_Celica_70_Green_2013"
document.querySelector(".remove_from_cart.Toyota_Celica_70_Green_2013").addEventListener("click", function (event) {
    event.preventDefault();
    var count = sessionStorage.getItem('Toyota_Celica_70_Green_2013');
    if (!count) {
        alert("Cart is Empty");
    } else if (count <= 0) {
        alert("Cart is Empty")
    }
    else {
        count--;
    }
    sessionStorage.setItem('Toyota_Celica_70_Green_2013', count);
    console.log("Toyota_Celica_70_Green_2013 : Count = " + count);
})
// We are doing for "Dodge_Charger_71"
document.querySelector(".remove_from_cart.Dodge_Charger_71").addEventListener("click", function (event) {
    event.preventDefault();
    var count = sessionStorage.getItem('Dodge_Charger_71');
    if (!count) {
        alert("Cart is Empty");
    } else if (count <= 0) {
        alert("Cart is Empty")
    }
    else {
        count--;
    }
    sessionStorage.setItem('Dodge_Charger_71', count);
    console.log("Dodge_Charger_71 : Count = " + count);
})
// We are doing for "ElCamino_71"
document.querySelector(".remove_from_cart.ElCamino_71").addEventListener("click", function (event) {
    event.preventDefault();
    var count = sessionStorage.getItem('ElCamino_71');
    if (!count) {
        alert("Cart is Empty");
    } else if (count <= 0) {
        alert("Cart is Empty")
    }
    else {
        count--;
    }
    sessionStorage.setItem('ElCamino_71', count);
    console.log("ElCamino_71 : Count = " + count);
})
// We are doing for "Fort_Falcon_73_XB"
document.querySelector(".remove_from_cart.Fort_Falcon_73_XB").addEventListener("click", function (event) {
    event.preventDefault();
    var count = sessionStorage.getItem('Fort_Falcon_73_XB');
    if (!count) {
        alert("Cart is Empty");
    } else if (count <= 0) {
        alert("Cart is Empty")
    }
    else {
        count--;
    }
    sessionStorage.setItem('Fort_Falcon_73_XB', count);
    console.log("Fort_Falcon_73_XB : Count = " + count);
})
// We are doing for "DeLorean_81_DMC"
document.querySelector(".remove_from_cart.DeLorean_81_DMC").addEventListener("click", function (event) {
    event.preventDefault();
    var count = sessionStorage.getItem('DeLorean_81_DMC');
    if (!count) {
        alert("Cart is Empty");
    } else if (count <= 0) {
        alert("Cart is Empty")
    }
    else {
        count--;
    }
    sessionStorage.setItem('DeLorean_81_DMC', count);
    console.log("DeLorean_81_DMC : Count = " + count);
})
// We are doing for "Honda_90_Civic"
document.querySelector(".remove_from_cart.Honda_90_Civic").addEventListener("click", function (event) {
    event.preventDefault();
    var count = sessionStorage.getItem('Honda_90_Civic');
    if (!count) {
        alert("Cart is Empty");
    } else if (count <= 0) {
        alert("Cart is Empty")
    }
    else {
        count--;
    }
    sessionStorage.setItem('Honda_90_Civic', count);
    console.log("Honda_90_Civic : Count = " + count);
})