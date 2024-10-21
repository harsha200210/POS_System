let navBar = $("#nav-bar");
//var loginForm = document.getElementById("login");
let dashboardForm = $("#dashboard");
let customerForm = $("#customer");
let itemForm = $("#item");
let orderForm = $("#order");
let container = $(".container");

navBar.css("display" , "block");
//loginForm.style.display = "none";
dashboardForm.css("display" , "block");
customerForm.css("display" , "none");
itemForm.css("display" , "none");
orderForm.css("display" , "none");
container.css("display" , "none");

// var userName  =  document.getElementsByClassName("form-control")[0];
// var password  =  document.getElementsByClassName("form-control")[1];
//
// userName.addEventListener("keypress", function (event) {
//     password.focus();
// });
//
// password.addEventListener("keypress", function (event) {
//     if (event.key === "Enter") {
//         document.getElementById("btnLogin").click();
//     }
// });
//
// document.getElementById("btnLogin").addEventListener("click", function() {
//     console.log("Login button clicked");
//
//     if (userName.value === "a" && password.value === "1") {
//         console.log("Valid login");
//         navBar.style.display = "block";
//         loginForm.style.setProperty('display', 'none', 'important'); // Hide login form
//         dashboard.style.display = "block"; // Show dashboard
//         customerForm.style.display = "none";
//         itemForm.style.display = "none";
//         orderForm.style.display = "none";
//         changeStyle(0);
//
//         if (window.matchMedia("(max-width: 575.98px)").matches) {
//             container.style.display = "inline-block";
//         }
//
//     } else {
//         alert("Please enter a valid username and password");
//         userName.value = "";
//         password.value = "";
//     }
// });

// phone size menu bar icon display
setInterval(() => {
    if (window.matchMedia("(max-width: 575.98px)").matches) {
        container.css("display" , "inline-block");
    } else {
        container.css("display" , "none");
        $(".menu-div").css("display" , "none");
    }
},100);

// phone size menu display
function myFunction(x) {
    x.classList.toggle("change");
    checkMenuDisplay();
}

// check menu display
var menuDiv = $(".menu-div");

function checkMenuDisplay(){
    if (menuDiv.css("display") === "grid") {
        menuDiv.css("display" , "none");
    } else {
        menuDiv.css("display" , "grid");
    }
}

// main section change display
function changeDisplay(dashboard,customer,item,order){
    dashboardForm.css("display" , dashboard);
    customerForm.css("display" , customer);
    itemForm.css("display" , item);
    orderForm.css("display" , order);
}

changeStyle(0);

// menu bar dashboard button click action
$("#dashboard-btn-menu").on("click", function(){
    changeDisplay("block", "none", "none", "none");
    myFunction(container[0]);
});

// menu bar customer button click action
$("#customer-btn-menu").on("click", function() {
    changeDisplay("none", "block", "none", "none");
    myFunction(container[0]);
});

// menu bar item button click action
$("#item-btn-menu").on("click", function() {
    changeDisplay("none", "none", "block", "none");
    myFunction(container[0]);
});

// menu bar order button click action
$("#order-btn-menu").on("click", function() {
    changeDisplay("none", "none", "none", "block");
    myFunction(container[0]);
});

// navigation bar dashboard button click action
$("#nav-dashboard").on("click", function() {
    changeDisplay("block", "none", "none", "none");
    changeStyle(0)
});

// navigation bar customer button click action
$("#nav-customer").on("click", function() {
    changeDisplay("none", "block", "none", "none");
    changeStyle(1)
});

// navigation bar item button click action
$("#nav-item").on("click", function() {
    changeDisplay("none", "none", "block", "none");
    changeStyle(2)
});

// navigation bar order button click action
$("#nav-order").on("click", function() {
    changeDisplay("none", "none", "none", "block");
    changeStyle(3)
});

// navigation bar buttons border style
function changeStyle(index){
    let navItems = $(".nav-item");
    for (var i = 0; i < navItems.length; i++) {
        $(navItems[i]).css("border", "none");
    }
    $(navItems[index]).css("borderBottom", "2px solid #0d6efd");
}




