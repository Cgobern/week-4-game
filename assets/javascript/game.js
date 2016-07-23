//this means your javascript is working if 'test' shows up in your console log
console.log('test')

//allows heading to fade in once documnet is ready
$(document).ready(function () {
	var characters = new Array(4);
	characters[0] = new Character ('Aang', 93, 1, 56);
	characters[1] = new Character ('Toph', 110, 12, 40);
	characters[2] = new Character ('Zuko', 150, 3, 32);
	characters[3] = new Character ('Katara', 121, 4, 15);

	var hitpoints = [120, 130, 140, 150];

	var fighter = -1;
	var nemesis = -1;
	var losingRow = new Array;
	var roundOver = false;
	var numberOfWins = 0;

	function fighter(name, health, attack, counter) {
		this.name = name;
		this.image = image;
		this.health = health;
		this.attack = attack;
		this.counter = counter;
		this.status = 'available';
	}

	function showFighterPool () {
		$('#fighters').empty();
		for (ctr = 0; ctr < fighters.length)
	}
	$(".fighter").on("click", function(){
		selectFighter(this.getAttribute("driver-id"));
	});




















});