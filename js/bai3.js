var usernameElement = document.getElementById('username');
var phonenumberElement = document.getElementById('phonenumber');
var passElement = document.getElementById('pass');
var chooseElement = document.getElementById('choose');
var priceElement = document.getElementById('price');
var soluongElement = document.getElementById('soluong');
var moneyElement = document.getElementById('money');
var error_messElement = document.querySelectorAll('.error_mess');
var input = document.getElementsByTagName('input');
var reg_phone = /^0\d{9}$/;
var reg_pass = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&])[\w!@#$%&]{6,}$/
function form() {
    var flag =true;
    //User name
    if (usernameElement.value == '') {
        error_notification(usernameElement,0,'Thông tin chưa nhập');
        flag = false;
    }else{
        error_remove(usernameElement,0);
    }

    //phone number
    if (phonenumberElement.value == '') {
        error_notification(phonenumberElement,1,'Thông tin chưa nhập');
        flag = false;
    }else if(!reg_phone.test(phonenumberElement.value)) {
        error_notification(phonenumberElement,1,'Số điện thoại chưa chính xác');
        flag = false;
    } else{
        error_remove(phonenumberElement,1);
    }

    //mật khẩu
    if (passElement.value == '') {
        error_notification(passElement,2,'Thông tin chưa nhập');
        flag = false;
    }else if(!reg_pass.test(passElement.value)) {
        error_notification(passElement,2,'Mật khẩu phải có chữ hoa,số,ký tự đặc biệt và ít nhất 6 ký tự');
        flag = false;
    } else{
        error_remove(passElement,2);
    }
    
    //khóa học
    if (chooseElement.value == '0') {
        error_notification(chooseElement,3,'Thông tin chưa chọn');
        flag = false;
    }else{
        error_remove(chooseElement,3);
    }
    
    //số lượng
    if (soluongElement.value == '') {
        error_notification(soluongElement,5,'Thông tin chưa nhập');
        flag = false;
    }else if (soluongElement.value == '0') {
        error_notification(soluongElement,5,'Thông tin chưa nhập');
        flag = false;
    } else{
        error_remove(soluongElement,5);
    }
    return flag;
}
//Thông báo lỗi
function error_notification (element,index,text) {
    element.parentElement.classList.add('invalid');
    error_messElement[index].innerHTML = text;
}
//xóa thông báo lỗi
function error_remove (element,index) {
    element.parentElement.classList.remove('invalid');
    error_messElement[index].innerHTML = '';
}
//oninput
// function onin(element,index){
//     element.oninput = function () {
//         if (element.value == '') {
//             error_notification(element,index,'Thông tin chưa nhập');
//         }else{
//             error_remove(element,index);
//         }
//     }
// }
// onin(usernameElement,0);
// onin(phonenumberElement,1);
// onin(passElement,2);

chooseElement.onchange = function() {
    if (chooseElement.value == '1') {
        priceElement.value = '1000';
        error_remove(chooseElement,3);
        tongtien();
    }else if (chooseElement.value == '2') {
        priceElement.value = '2000';
        error_remove(chooseElement,3);
        tongtien();
    } else if(chooseElement.value == '3') {
        priceElement.value = '3000';
        error_remove(chooseElement,3);
        tongtien();
    }else{
        priceElement.value = 'Giá';
        error_notification(chooseElement,3,'Thông tin chưa chọn');
    }
}
soluongElement.onchange = function () {
    if (soluongElement.value !='') {
        error_remove(soluongElement,5);
    }
    tongtien();
}

function tongtien() {
    var soluongvalue = soluongElement.value
    var pricevalue= priceElement.value
    var sum = Number(soluongvalue) * Number(pricevalue);
    moneyElement.value = sum
}