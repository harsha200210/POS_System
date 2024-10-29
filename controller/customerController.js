import CustomerModel from "../model/customerModel.js";
import {customers_array} from "../db/database.js";
import {setDataDropdowns} from "./orderController.js"
import {setTotalValues} from "./dashboardController.js";
import {NAME, NIC, EMAIL, TEL, QTY} from "../util/regex.js";

const customer = {
    customer_id : 1,
    name : "harsha",
    address : "horana",
    nic : "2002102",
    email : "harsha@gmail.com",
    tel : 1234567
}

customers_array.push(customer);

let cusBody = $("#customer-tbl-body");
let cusId = $("#inputId");
let cusName = $("#inputName");
let cusAddress = $("#inputAddress");
let cusNic = $("#inputNic");
let cusEmail = $("#inputEmail");
let cusTel = $("#inputTel");

// save button action
$("#customer-save").on("click", function() {
    if (validationCustomerInput()){
        const customer = new CustomerModel(cusId.val(),cusName.val(),cusAddress.val(),cusNic.val(),cusEmail.val(),cusTel.val())
        customers_array.push(customer);
        loadCustomerData();
        clearCustomerInputs();
        setDataDropdowns();
        setCustomerID();
        setTotalValues();
    }
});

// set Customer ID
let setCustomerID = () => {
    if (customers_array.length === 0) {
        cusId.val(1);
    } else {
        cusId.val(parseInt(customers_array[customers_array.length - 1].customer_id) + 1);
    }
}

setCustomerID();

let clearCustomerInputs = () => {
    cusName.val("");
    cusAddress.val("");
    cusNic.val("");
    cusEmail.val("");
    cusTel.val("");
    $("#input-search-customer-id").val("");
}

// customer table add data
let loadCustomerData = () => {
    cusBody.children().remove();

    customers_array.map((value,index) => {
        let data = `<tr><td>${value.customer_id}</td><td>${value.name}</td><td>${value.address}</td><td>${value.nic}</td><td>${value.email}</td><td>${value.tel}</td></tr>`;
        cusBody.append(data);
    });
}

loadCustomerData();

// customer table click row get data
cusBody.on('click', 'tr', function () {
    const row = $(this);
    console.log(row.index());

    // const customer = {
    //     customer_id: row.children().eq(0).text(),
    //     name: row.children().eq(1).text(),
    //     address: row.children().eq(2).text(),
    //     nic: row.children().eq(3).text(),
    //     email: row.children().eq(4).text(),
    //     tel: row.children().eq(5).text()
    // };

    let customer = customers_array[row.index()];
    setCustomerDataInput(customer);
    console.log(customer);
});

let setCustomerDataInput = (customer) => {
    cusId.val(customer.customer_id);
    cusName.val(customer.name);
    cusAddress.val(customer.address);
    cusNic.val(customer.nic);
    cusEmail.val(customer.email);
    cusTel.val(customer.tel);
}

$("#customer-clear").on("click", function() {
    clearCustomerInputs();
});

$("#customer-delete").on("click", function() {
    let deletedId = cusId.val();
    customers_array.map((value,index) => {
        if (value.customer_id === deletedId) {
            customers_array.splice(index, 1);
        }
    });
    loadCustomerData();
    clearCustomerInputs();
    setTotalValues();
    setCustomerID();
});

$("#customer-update").on("click", function() {
    let updateId = cusId.val();

    if (validationCustomerInput()){
        customers_array.forEach((value, index) => {
            if (value.customer_id === updateId) {
                customers_array[index].name = cusName.val();
                customers_array[index].address = cusAddress.val();
                customers_array[index].nic = cusNic.val();
                customers_array[index].email = cusEmail.val();
                customers_array[index].tel = cusTel.val();
            }
        });

        loadCustomerData();
        clearCustomerInputs();
        setCustomerID();
    }
});

$("#view-all-customer").on("click", function() {
    loadCustomerData();
    $("#input-search-customer-id").val("");
});

$("#search-customer").on("click", function() {
    let searchId = $("#input-search-customer-id").val();

    if (QTY.test(searchId)){
        customers_array.map((value,index) => {
            if (value.customer_id === searchId) {
                cusBody.children().remove();

                let data = `<tr><td>${value.customer_id}</td><td>${value.name}</td><td>${value.address}</td><td>${value.nic}</td><td>${value.email}</td><td>${value.tel}</td></tr>`;
                cusBody.append(data);
            }
        });
    } else {
        alert("Invalid Customer ID");
    }
});

const validationCustomerInput = () => {
    if (NAME.test(cusName.val())){
        if (cusAddress.val() !== "") {
            if (NIC.test(cusNic.val())) {
                if (EMAIL.test(cusEmail.val())){
                    if (TEL.test(cusTel.val())) {
                        return true;
                    } else {
                        alert("Invalid tel");
                    }
                } else {
                    alert("Invalid Email");
                }
            } else {
                alert("Invalid nic");
            }
        } else {
            alert("Invalid address");
        }
    } else {
        alert("Invalid Name");
    }
    return false;
}
