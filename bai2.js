var customerElement = document.getElementById('customer');
var qualityElement = document.getElementById('quality');
var priceElement = document.getElementById('price');
var quantityElement = document.getElementById('quantity');
var moneyElement = document.getElementById('money');
var costElement = document.getElementById('cost');
var genderElement = document.getElementsByName('gender');
var error_messElement = document.getElementsByClassName('error_mess');
var nofitication = 'Thông tin chưa nhập';

function form() {
    var flag = true;
    //customer
    if (customerElement.value == '') {
        error_nofitication(customerElement,0,nofitication);
        flag = false;
    }else{
        error_remove(customerElement,0);
    }
    //quality
    if (qualityElement.value == '0') {
        error_nofitication(qualityElement,1,'Thông tin chưa chọn');
        flag = false;
    }else{
        error_remove(qualityElement,1);
    }
    //price
    if (quantityElement.value == '') {
        error_nofitication(quantityElement,3,nofitication);
        flag = false;
    }else{
        error_remove(quantityElement,3);
    }
    //gender
    if (!genderElement[0].checked && !genderElement[1].checked) {
        error_nofitication(genderElement[0],5,nofitication);
        flag = false;
    }else{
        error_remove(genderElement[0],5);
    }
    return flag
}

function error_nofitication(element,index,text) {
    element.parentElement.classList.add('invalid');
    error_messElement[index].innerHTML = text;
}
function error_remove(element,index) {
    element.parentElement.classList.remove('invalid');
    error_messElement[index].innerHTML = '';
}
function onin(element,index,text) {
    element.oninput = function() {
        if(element.value == ''){
            error_nofitication(element,index,text)
        }else{
            error_remove(element,index);
        }
    }
}
onin(customerElement,0,nofitication);

genderElement[0].onchange = function() {
    if (!genderElement[0].checked ) {
        error_nofitication(genderElement[0],5,nofitication);
    }else{
        error_remove(genderElement[0],5);
    }
}
genderElement[1].onchange = function() {
    if (!genderElement[1].checked) {
        error_nofitication(genderElement[1],5,nofitication);
    }else{
        error_remove(genderElement[1],5);
    }
}

qualityElement.onchange = function () {
    if (qualityElement.value == '1') {
        priceElement.value = '500000';
        error_remove(qualityElement,1);
        tinhtong();
    }else if (qualityElement.value == '2') {
        priceElement.value = '300000';
        error_remove(qualityElement,1);
        tinhtong();
    } else if (qualityElement.value == '3') {
        priceElement.value = '100000';
        error_remove(qualityElement,1);
        tinhtong();
    }else {
        priceElement.value = '';
        error_nofitication(qualityElement,1,'Thông tin chưa chọn');
    }
}
quantityElement.onchange = function () {
    if (quantityElement.value == '0') {
        error_nofitication(quantityElement,3,nofitication)
    }else{
        error_remove(quantityElement,3);
    }
    tinhtong();
}
function tinhtong () {
    var quantity = quantityElement.value;
    var price = priceElement.value;
    var sum = Number(quantity) * Number(price);
    moneyElement.value = sum;
}