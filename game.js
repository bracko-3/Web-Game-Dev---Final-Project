var gameSettings = {
	playerSpeed: 250
}

var config = {
	width: 500,
	height: 500,
	backgroundColor: 0x000000,
	scene: [Scene0, Scene1, Scene2],
	pixelArt: true,
	physics: {
		default: "arcade",
		arcade: {
			debug: false
		}
	}
}

window.onload = function() {
	var game = new Phaser.Game(config);
}