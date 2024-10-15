// document.getElementsByTagName("a")[0].style.color = "#000";
//
// let style = "color: red;background-color: yellow;";
//
// document.getElementsByTagName("a")[0].style.cssText = style;

var navBar = document.getElementById("nav-bar");
var loginForm = document.getElementById("login");
var dashboard = document.getElementById("dashboard");
var customerForm = document.getElementById("customer");
var itemForm = document.getElementById("item");
var orderForm = document.getElementById("order");

navBar.style.display = "none";
loginForm.style.display = "block";
dashboard.style.display = "none";
customerForm.style.display = "none";
itemForm.style.display = "none";
orderForm.style.display = "none";

var userName  =  document.getElementsByClassName("form-control")[0];
var password  =  document.getElementsByClassName("form-control")[1];

// Check if elements are properly selected
console.log("Login Form:", loginForm);
console.log("Dashboard:", dashboard);

userName.addEventListener("keypress", function (event) {
    password.focus();
});

password.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        document.getElementById("btnLogin").click();
    }
});

document.getElementById("btnLogin").addEventListener("click", function() {
    console.log("Login button clicked");

    if (userName.value === "a" && password.value === "1") {
        console.log("Valid login");
        navBar.style.display = "block";
        loginForm.style.setProperty('display', 'none', 'important'); // Hide login form
        dashboard.style.display = "block"; // Show dashboard
        customerForm.style.display = "none";
        itemForm.style.display = "none";
        orderForm.style.display = "none";
        changeStyle(0);
    } else {
        alert("Please enter a valid username and password");
        userName.value = "";
        password.value = "";
    }
});

document.getElementById("nav-dashboard").addEventListener("click", function() {
    dashboard.style.display = "block";
    customerForm.style.display = "none";
    itemForm.style.display = "none";
    orderForm.style.display = "none";
    changeStyle(0)
});

document.getElementById("nav-customer").addEventListener("click", function() {
    dashboard.style.display = "none";
    customerForm.style.display = "block";
    itemForm.style.display = "none";
    orderForm.style.display = "none";
    changeStyle(1)
});

document.getElementById("nav-item").addEventListener("click", function() {
    dashboard.style.display = "none";
    customerForm.style.display = "none";
    itemForm.style.display = "block";
    orderForm.style.display = "none";
    changeStyle(2)
});

document.getElementById("nav-order").addEventListener("click", function() {
    dashboard.style.display = "none";
    customerForm.style.display = "none";
    itemForm.style.display = "none";
    orderForm.style.display = "block";
    changeStyle(3)
});

function changeStyle(index){
    var navItems = document.getElementsByClassName("nav-item");
    for (var i = 0; i < navItems.length; i++) {
        navItems[i].style.border = "none";
    }
    navItems[index].style.borderBottom = "2px solid #0d6efd";
}

