class Scene1 extends Phaser.Scene {
    constructor(){
        super("bootGame");
    }

    preload() {
        this.load.image("background", "assets/images/background2.png");
        this.load.image("ship", "assets/images/ship3");

        this.load.spritesheet("player", "assets/spritesheets/player.png", {
            frameWidth: 16,
            frameHeight: 24
        });

        this.load.image("pipe", "assets/images/pole.png");
    }

    create() {
        this.scene.start("playGame");

        this.anims.create({
            key: "thrust",
            frames: this.anims.generateFrameNumbers("player"),
            frameRate: 20,
            repeat: -1
        });
    }
}

