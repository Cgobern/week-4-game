//this means your javascript is working if 'test' shows up in your console log
console.log('test')

//allows heading to fade in once documnet is ready
$(document).ready(function () {
	var characters = new Array(4);
	figthers[0] = new Fighter ('Aang', 'aang.jpg', 93, 1, 56);
	fighters[1] = new Fighter ('Toph', 'toph.jpg', 110, 12, 40);
	fighters[2] = new Fighter ('Zuko', 'Zuko.png', 150, 3, 32);
	fighters[3] = new Fighter ('Katara', 'katara.jpg', 121, 4, 15);

	var hitpoints = [120, 130, 140, 150];

	var fighter = -1;
	var nemesis = -1;
	var losingRow = new Array;
	var roundOver = false;
	var numberOfWins = 0;

	function fighter(name, image, health, attack, counter) {
		this.name = name;
		this.image = image;
		this.health = health;
		this.attack = attack;
		this.counter = counter;
		this.status = 'available';
	}

	function showFighterPool () {
		$('#fighters').empty();
		for (ctr = 0; ctr < fighters.length; ctr++) {
			if (fighters[ctr].status == 'available') {
				var $newFighter = $('<div>').addClass('fighter col-sm-3').attr('fighter-id', ctr)
				.html('<span class="name">'+ fighters[ctr].name)
			}
		}
	}
	$(".fighter").on("click", function(){
		selectFighter(this.getAttribute("driver-id"));
	});




















});