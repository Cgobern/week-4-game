//this means your javascript is working if 'test' shows up in your console log
console.log('test')

//allows heading to fade in once documnet is ready
$(document).ready(function () {
	$("body").fadeIn(3000);
	console.log("this is working");
});

$(document).ready(function () {
	var characters = new Array(4);
	characters[0] = new Character ('Aang', 'aang.jpg', 56, 1, 93);
	characters[1] = new Character ('Toph', 'toph.jpg', 40, 12, 110);
	characters[2] = new Character ('Zuko', 'Zuko.png', 32, 3, 150);
	characters[3] = new Character ('Katara', 'katara.jpg', 4, 121, 15);








});