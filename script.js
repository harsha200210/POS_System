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

// const customer = {
//     customer_id : 1,
//     name : "harsha",
//     address : "horana",
//     nic : "2002102",
//     email : "harsha@gmail.com",
//     tel : 1234567
// }
//
// customers_array.push(customer);
//
// let cusBody = $("#customer-tbl-body");
// let cusId = $("#inputId");
// let cusName = $("#inputName");
// let cusAddress = $("#inputAddress");
// let cusNic = $("#inputNic");
// let cusEmail = $("#inputEmail");
// let cusTel = $("#inputTel");
//
// // save button action
// $("#customer-save").on("click", function() {
//     if (validationCustomerInput()){
//         const customer = new CustomerModel(cusId.val(),cusName.val(),cusAddress.val(),cusNic.val(),cusEmail.val(),cusTel.val())
//         customers_array.push(customer);
//         loadCustomerData();
//         clearCustomerInputs();
//         setDataDropdowns();
//     }
// });
//
// let clearCustomerInputs = () => {
//     cusId.val("");
//     cusName.val("");
//     cusAddress.val("");
//     cusNic.val("");
//     cusEmail.val("");
//     cusTel.val("");
// }
//
// // customer table add data
// let loadCustomerData = () => {
//     cusBody.children().remove();
//
//     customers_array.map((value,index) => {
//         let data = `<tr><td>${value.customer_id}</td><td>${value.name}</td><td>${value.address}</td><td>${value.nic}</td><td>${value.email}</td><td>${value.tel}</td></tr>`;
//         cusBody.append(data);
//     });
// }
//
// loadCustomerData();
//
// // customer table click row get data
// cusBody.on('click', 'tr', function () {
//     const row = $(this);
//     console.log(row.index());
//
//     // const customer = {
//     //     customer_id: row.children().eq(0).text(),
//     //     name: row.children().eq(1).text(),
//     //     address: row.children().eq(2).text(),
//     //     nic: row.children().eq(3).text(),
//     //     email: row.children().eq(4).text(),
//     //     tel: row.children().eq(5).text()
//     // };
//
//     let customer = customers_array[row.index()];
//     setCustomerDataInput(customer);
//     console.log(customer);
// });
//
// let setCustomerDataInput = (customer) => {
//     cusId.val(customer.customer_id);
//     cusName.val(customer.name);
//     cusAddress.val(customer.address);
//     cusNic.val(customer.nic);
//     cusEmail.val(customer.email);
//     cusTel.val(customer.tel);
// }
//
// $("#customer-clear").on("click", function() {
//    clearCustomerInputs();
// });
//
// $("#customer-delete").on("click", function() {
//     let deletedId = cusId.val();
//     customers_array.map((value,index) => {
//         if (value.customer_id === deletedId) {
//             customers_array.splice(index, 1);
//         }
//     });
//     loadCustomerData();
//     clearCustomerInputs();
// });
//
// $("#customer-update").on("click", function() {
//     let updateId = cusId.val();
//
//     if (validationCustomerInput()){
//         customers_array.forEach((value, index) => {
//             if (value.customer_id === updateId) {
//                 customers_array[index].name = cusName.val();
//                 customers_array[index].address = cusAddress.val();
//                 customers_array[index].nic = cusNic.val();
//                 customers_array[index].email = cusEmail.val();
//                 customers_array[index].tel = cusTel.val();
//             }
//         });
//
//         loadCustomerData();
//         clearCustomerInputs();
//     }
// });
//
// $("#view-all-customer").on("click", function() {
//     loadCustomerData();
// });
//
// $("#search-customer").on("click", function() {
//    let searchId = $("#input-search-customer-id").val();
//
//    customers_array.map((value,index) => {
//        if (value.customer_id === searchId) {
//            cusBody.children().remove();
//
//            let data = `<tr><td>${value.customer_id}</td><td>${value.name}</td><td>${value.address}</td><td>${value.nic}</td><td>${value.email}</td><td>${value.tel}</td></tr>`;
//            cusBody.append(data);
//        }
//    })
// });
//
// const validationCustomerInput = () => {
//     let name = /^[A-Za-z]+(?: [A-Za-z]+)*$/;
//     let address = /^([A-z0-9]|[-\\,.@+]|\\\\s){4,}$/;
//     let nic = /^([0-9]{9}[x|X|v|V]|[0-9]{12})$/;
//     let email = /^([A-z])([A-z0-9.]){1,}[@]([A-z0-9]){1,10}[.]([A-z]){2,5}$/;
//     let tel = /^[0]([1-9]{2})([0-9]){7}$/;
//
//     if (name.test(cusName.val())){
//         if (address.test(cusAddress.val())) {
//             if (nic.test(cusNic.val())) {
//                 if (email.test(cusEmail.val())){
//                     if (tel.test(cusTel.val())) {
//                         return true;
//                     } else {
//                         alert("Invalid tel");
//                     }
//                 } else {
//                     alert("Invalid Email");
//                 }
//             } else {
//                 alert("Invalid nic");
//             }
//         } else {
//             alert("Invalid address");
//         }
//     } else {
//         alert("Invalid Name");
//     }
//     return false;
// }


//////////////////////////////////////////////////////////////////////////////////////////


// let itemBody = $("#item-table-body");
// let itemId = $("#inputItemId");
// let itemModel = $("#inputModel");
// let itemPrice = $("#inputPrice");
// let itemQty = $("#inputQuantity");
//
// // save button action
// $("#item-save").on("click", function() {
//     if (validationItemInputs()){
//         const item = new ItemModel(itemId.val(),itemModel.val(),itemPrice.val(),itemQty.val());
//         item_array.push(item);
//         loadItemData();
//         clearItemInputs();
//         setDataDropdowns();
//     }
// });
//
// let clearItemInputs = () => {
//     itemId.val("");
//     itemModel.val("");
//     itemPrice.val("");
//     itemQty.val("");
// }
//
// // item table add data
// let loadItemData = () => {
//     itemBody.children().remove();
//
//     item_array.map((value,index) => {
//         let data = `<tr><td>${value.item_id}</td><td>${value.model}</td><td>${value.price}</td><td>${value.qty}</td></tr>`;
//         itemBody.append(data);
//     });
// }
//
// // item table click row get data
// itemBody.on('click', 'tr', function () {
//     const row = $(this);
//     console.log(row.index());
//
//     let item = item_array[row.index()];
//     setItemDataInput(item);
// });
//
// let setItemDataInput = (item) => {
//     itemId.val(item.item_id);
//     itemModel.val(item.model);
//     itemPrice.val(item.price);
//     itemQty.val(item.qty);
// }
//
// $("#item-clear").on("click", function() {
//     clearItemInputs();
// });
//
// $("#item-delete").on("click", function() {
//     let deletedId = itemId.val();
//     item_array.map((value,index) => {
//         if (value.item_id === deletedId) {
//             item_array.splice(index, 1);
//         }
//     })
//     loadItemData();
//     clearItemInputs();
// });
//
// $("#item-update").on("click", function() {
//     if (validationItemInputs()){
//         let updateId = itemId.val();
//
//         item_array.map((value, index) => {
//             if (value.item_id === updateId) {
//                 item_array[index].model = itemModel.val();
//                 item_array[index].price = itemPrice.val();
//                 item_array[index].qty = itemQty.val();
//             }
//         });
//
//         loadItemData();
//         clearItemInputs();
//     }
// });
//
// $("#view-all-items").on("click", function() {
//     loadItemData();
// });
//
// $("#search-item").on("click", function() {
//     let searchId = $("#input-search-item-id").val();
//
//     item_array.map((value,index) => {
//         if (value.item_id === searchId) {
//             itemBody.children().remove();
//
//             let data = `<tr><td>${value.item_id}</td><td>${value.model}</td><td>${value.price}</td><td>${value.qty}</td></tr>`;
//             itemBody.append(data);
//         }
//     })
// });
//
// let validationItemInputs = () => {
//     let price = /^([0-9]){1,}[.]([0-9]){1,}$/;
//     let qty = /^[0-9]{1,5}$/;
//
//     if (itemModel.val() !== "") {
//         if (price.test(itemPrice.val())) {
//             if (qty.test(itemQty.val())) {
//                 return true;
//             } else {
//                 alert("Invalid quantity");
//             }
//         } else {
//             alert("Invalid price");
//         }
//     } else {
//         alert("invalid Model")
//     }
//     return false;
// }

///////////////////////////////////////////////////////////////////////////////////////////


// let orderId = $("#inputOrderId");
// let customerId = $("#inputCustomerId");
// let customerName = $("#inputCustomerName");
// let date = new Date();
// let inventoryIdDropDown = $("#inputInventoryId");
// let inventoryModel = $("#inputOrderModel");
// let inventoryPrice = $("#inputOrderPrice");
// let onHandQty = $("#inputOnHandQty");
// let orderQty = $("#inputOrderQty");
// let addBtn = $("#addBtn");
// let orderDetailTblBody = $("#orderDetailTblBody");
//
// // add button action
// addBtn.on("click", function() {
//    let data = `<tr><td>${inventoryIdDropDown.text()}</td><td>${inventoryModel.val()}</td><td>${inventoryPrice.val()}</td><td>${orderQty.val()}</td><td>${parseFloat(inventoryPrice.val()) * parseInt(orderQty.val())}</td></tr>`;
//    orderDetailTblBody.append(data);
// });
//
// // customer id eka click kla wita button eke text eka set wenw
// $("#customerIds").on("click", "li", function() {
//     const selectId = $(this);
//     customerId.text(selectId.text());
//     customerName.val(customers_array[selectId.text()-1].name); // meka hriynne na
// });
//
// // item id eka click kla wita button eke text eka set wenw
// $("#itemIds").on("click", "li", function() {
//     const selectId = $(this);
//     inventoryIdDropDown.text(selectId.text());  // meka hriynne na
//     inventoryModel.val(item_array[selectId.text()-1].model);
//     inventoryPrice.val(item_array[selectId.text()-1].price);
//     onHandQty.val(item_array[selectId.text()-1].qty);
// });
//
//
// export let setDataDropdowns = () => {
//     // customer ids tika dropdown ekt set wenw
//     $("#customerIds").empty();
//     customers_array.map((value,index) => {
//         let data = `<li>${value.customer_id}</li>`;
//         $("#customerIds").append(data);
//     });
//
//     // item ids tika dropdown ekt set wenw
//     $("#itemIds").empty();
//     item_array.map((value,index) => {
//         let data = `<li>${value.item_id}</li>`;
//         $("#itemIds").append(data);
//     });
// }
//
// setDataDropdowns();


