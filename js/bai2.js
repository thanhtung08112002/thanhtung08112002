
var userNameElement = document.getElementById('username');
var dateElement = document.getElementById('date');
var genderElement = document.querySelectorAll('.gender');
var chooseElement = document.getElementById('choose');
var moneyElement = document.getElementById('money');
var error_messElement = document.querySelectorAll('.error_mess');

function form() {
    var flag = true;
    if(userNameElement.value == '') {
        error_notification(userNameElement,0,'Bạn chưa nhập thông tin');
        flag = false;
    }else{
        error_remove(userNameElement,0);
    }
    if(dateElement.value == '') {
        error_notification(dateElement,1,'Bạn chưa chọn ngày sinh');
        flag = false;
    }else{
        error_remove(dateElement,1);
    }
    if (!genderElement[0].checked && !genderElement[1].checked ) {
        error_notification(genderElement[0],2,'Bạn chưa chọn giới tính');
        flag = false;
    }else{
        error_remove(genderElement[0],2);
    }
    if(chooseElement.value =='0'){
        error_notification(chooseElement,3,'Bạn chưa chọn chức vụ');
        flag = false;
    }else{
        error_remove(chooseElement,3);
    }
    if (flag==true) {
        alert('hoàn thành')
    }
    return flag;
}
function error_notification(element,index,text) {
    element.parentElement.classList.add('invalid');
    error_messElement[index].innerHTML = text;
}
function error_remove(element,index) {
    element.parentElement.classList.remove('invalid');
    error_messElement[index].innerHTML = '';
}
chooseElement.onchange = function() {
    if (chooseElement.value == '1') {
        moneyElement.value ='20000000';
    }else if (chooseElement.value == '2') {
        moneyElement.value ='15000000';
    }else if (chooseElement.value == '3') {
        moneyElement.value ='10000000';
    }else{
        moneyElement.value ='';
    }
}
function reset() {
    form.reset();
}