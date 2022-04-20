var img = document.getElementById('img');

var arr = ['img1.jpg','img2.jpg','img3.jpg','img4.jpg','img5.jpg',];
var folder = './img/';

var len = arr.length;
var index = 0;
function next() {
    if(index== len -1){
        index = 0;
        img.src = folder+arr[index];
    }else{
        index++;
        img.src =folder+ arr[index];
    }
}
function prev() {
    if(index== 0){
        index = len-1;
        img.src = folder+arr[index];
    }else{
        index--;
        img.src =folder+ arr[index];
    }
}