var usernameElement = document.getElementById('username');
var phoneElement = document.getElementById('phone');
var passElement = document.getElementById('pass');
var chonElement = document.getElementById('chon');
var giaElement = document.getElementById('gia');
var soluongElement = document.getElementById('soluong');
var thongbaoloiElement = document.getElementsByClassName('thongbaoloi');
var tienElement = document.getElementById('tien');
//câu 1
function form() {
var flag = true;
//họ tên
if(usernameElement.value == ''){
    thongbaoloi(usernameElement,0,'chưa nhập thông tin');
    flag = false
}else{
    xoathongbaoloi(usernameElement,0);
}

//điện thoại
var reg_phone = /^0[0-9]{9}$/
if(phoneElement.value == ''){
    thongbaoloi(phoneElement,1,'chưa nhập thông tin');
    flag = false
}else if(!reg_phone.test(phoneElement.value)){
    thongbaoloi(phoneElement,1,'Số bạn sai');
    flag = false
}else{
    xoathongbaoloi(phoneElement,1);
}
//mật khẩu
//lưu ý
//(?=.*[A-Z]) (?=.*[0-9]) (?=.*[!@#$%^&]) 

var reg_pass = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&])[\w!@#$%^&]{6,}$/
if(passElement.value == ''){
    thongbaoloi(passElement,2,'chưa nhập thông tin');
    flag = false
}else if(!reg_pass.test(passElement.value)){
    thongbaoloi(passElement,2,'mật khẩu cần chữ hoa,ký tự đặc biệt,số và ít nhất 6 ký tự');
    flag = false
}else{
    xoathongbaoloi(passElement,2);
}

//khóa học
if(chonElement.value == '0'){
    thongbaoloi(chonElement,3,'chưa chọn ');
    flag = false
}else{
    xoathongbaoloi(chonElement,3);
}

//só lượng
if(soluongElement.value == ''){
    thongbaoloi(soluongElement,5,'chưa chọn ');
    flag = false
}else if(soluongElement.value == '0'){
    thongbaoloi(soluongElement,5,'chưa chọn ');
    flag = false
}
else{
    xoathongbaoloi(soluongElement,5);
}

return flag;

}

function thongbaoloi(element,index,text) {
    element.parentElement.classList.add('loi');
    thongbaoloiElement[index].innerText = text
}

function xoathongbaoloi(element,index) {
    element.parentElement.classList.remove('loi');
    thongbaoloiElement[index].innerText = ''
}


//câu 2
chonElement.onchange =function () {
    if(chonElement.value=='1'){
        giaElement.value='1000';
        xoathongbaoloi(chonElement,3);
        tinhtong();
    }else if(chonElement.value=='2'){
        giaElement.value = '2000';
        xoathongbaoloi(chonElement,3);
        tinhtong();
    }else if(chonElement.value=='3'){
    giaElement.value = '3000';
    xoathongbaoloi(chonElement,3);
    tinhtong();
}else{
    giaElement.value = 'Giá'
    thongbaoloi(chonElement,3,'chưa chọn')
}
}

//câu 3
soluongElement.onchange = function() {
    if (soluongElement.value !='') {
    xoathongbaoloi(soluongElement,5);
    }
    tinhtong();
}
function tinhtong() {
    var soluong = soluongElement.value;
    var gia = giaElement.value
    var sum = Number(soluong) * Number(gia);
    tienElement.value = sum;
}