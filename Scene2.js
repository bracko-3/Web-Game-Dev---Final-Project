class Scene2 extends Phaser.Scene {
    constructor(){
        super("playGame");
    }

    create() {
        this.background = this.add.tileSprite(0, 0, config.width, config.height, "background");
        this.background.setOrigin(0, 0);

        this.player = this.physics.add.sprite(config.width/2 - 100, config.height/2, "player");
        this.player.angle += 90;
        this.player.play("thrust");
        this.cursorKeys = this.input.keyboard.createCursorKeys();
        this.player.setCollideWorldBounds(true);
    }

    update() {
        this.background.tilePositionX += 0.5;

        this.movePlayerManager();
    }

    movePlayerManager() {
        if(this.cursorKeys.up.isDown) {
            this.player.setVelocityY(-gameSettings.playerSpeed);
        }
        else if(this.cursorKeys.down.isDown) {
            this.player.setVelocityY(gameSettings.playerSpeed)
        }
    }
}