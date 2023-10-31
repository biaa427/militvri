var imgList = document.getElementById("img-list");
var caroBtns = document.getElementsByClassName("caro-btn");

var status = 0;
var positionUit = -100;

function slideImg(x) {
    var i;

    for (i = 0; i < caroBtns.length; i++) {
        caroBtns[i].style.backgroundColor = "#ffffff44";
        
    }

    caroBtns[x].style.backgroundColor = "#fff";
    position = x * positionUit;
    imgList.style.left = position + "%";
}