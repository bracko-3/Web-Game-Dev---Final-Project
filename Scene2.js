class Scene2 extends Phaser.Scene {
    constructor(){
        super("playGame");
    }

    create() {
        this.background = this.add.tileSprite(0, 0, config.width, config.height, "background");
        this.background.setOrigin(0, 0);
        this.background.displayWidth = 600;
        this.background.displayHeight = 700;

        this.player = this.physics.add.sprite(config.width/2 - 100, config.height/2, "player");
        this.player.angle += 90;
        this.player.play("thrust");
        this.cursorKeys = this.input.keyboard.createCursorKeys();
        this.player.setCollideWorldBounds(true);

        this.pipes = [];
        this.pipes.push(this.pipeObject(200));
        this.pipes.push(this.pipeObject(400));
    }

    update() {
        this.movePlayerManager();

        this.movePipe(this.pipes);
    }

    movePlayerManager() {
        if(this.cursorKeys.up.isDown) {
            this.player.setVelocityY(-gameSettings.playerSpeed);
        }
        else if(this.cursorKeys.down.isDown) {
            this.player.setVelocityY(gameSettings.playerSpeed)
        }
    }

    pipeObject(x) {
        //Random Height
        const height = 100 + Math.random() * 400;

        //Top Pipe
        this.pipe1 = this.add.sprite(x, height + 50, "pipe");
        this.pipe1.displayOriginX = 0;
        this.pipe1.displayOriginY = 0;

        //Bottom Pipe
        this.pipe2 = this.add.sprite(x, height - 50, "pipe");
        this.pipe2.displayOriginX = 0;
        this.pipe2.displayOriginY = 0;
        this.pipe2.displayHeight = -1 * this.pipe2.height;
    }

    movePipe(pipe) {
        pipe.x += -20;
    }
}