
var button = document.getElementsByClassName('playControl');
var hasClass = false;

button[0].click();

if(button[0].className.indexOf('playing') !== -1){
	hasClass = true;
}

hasClass;

