class Scene0 extends Phaser.Scene {
    constructor(){
        super("bootGame");
    }

    preload() {
        this.load.image("background", "assets/images/background2.png");
        this.load.image("play", "assets/images/play.png");
        this.load.image("start", "assets/images/intro.png");
        this.load.image("2", "assets/images/2.png");
    }
    
    create() {
        this.background = this.add.tileSprite(0, 0, config.width, config.height, "background");
        this.background.setOrigin(0, 0);
        this.background.displayWidth = 500;
        this.background.displayHeight = 500;

        this.restartButton = this.add.sprite(config.width/2, config.height/2 + 85, 'button').setInteractive().setTexture('play');
        this.restartButton.setDisplaySize(100, 50);
        var hitZone = new Phaser.Geom.Rectangle(0, 0, 300, 80);
        this.restartButton.input.hitArea = hitZone;

        this.restartButton.on('pointerdown', () => {
            this.scene.start("startScene");
        });

        const mainMenuPrompt = this.add.image(this.cameras.main.centerX, 190, "start");
        const numberTwo = this.add.image(this.cameras.main.centerX + 105, 110, "2");
    }
}