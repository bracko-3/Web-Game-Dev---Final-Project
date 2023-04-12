class Scene1 extends Phaser.Scene {
    constructor(){
        super("bootGame");
    }

    preload() {
        this.load.image("background", "assets/images/background2.png");
        this.load.image("ship", "assets/images/ship3");
        this.load.image("gameover", "assets/images/gameover.png")
        this.load.image("0", "assets/images/0.png");
        this.load.image("1", "assets/images/1.png");
        this.load.image("2", "assets/images/2.png");
        this.load.image("3", "assets/images/3.png");
        this.load.image("4", "assets/images/4.png");
        this.load.image("5", "assets/images/5.png");
        this.load.image("6", "assets/images/6.png");
        this.load.image("7", "assets/images/7.png");
        this.load.image("8", "assets/images/8.png");
        this.load.image("9", "assets/images/9.png");

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
            frames: this.anims.generateFrameimages("player"),
            frameRate: 20,
            repeat: -1
        });
    }
}

