class Scene2 extends Phaser.Scene {
    constructor(){
        super("playGame");
    }

    create() {
        this.background = this.add.tileSprite(0, 0, config.width, config.height, "background");
        this.background.setOrigin(0, 0);
        this.background.displayWidth = 600;
        this.background.displayHeight = 500;

        this.player = this.physics.add.sprite(config.width/2 - 200, config.height/2, "player");
        this.player.angle += 90;
        this.player.play("thrust");
        this.cursorKeys = this.input.keyboard.createCursorKeys();
        this.player.setCollideWorldBounds(true);

        const pipeDistance = 50;
        const height1 = 100 + Math.random() * 300;
        const height2 = 100 + Math.random() * 300;
        const height3 = 100 + Math.random() * 300;
        const pipeOneDistance = 300;
        const pipeTwoDistance = 500;
        const pipeThreeDistance = 700;

        //------------------Pipe Row 1------------------------
        //Top Pipe
        this.pipe1 = this.add.sprite(pipeOneDistance, height1 + pipeDistance, "pipe");
        this.pipe1.displayOriginX = 0;
        this.pipe1.displayOriginY = 0;

        //Bottom Pipe
        this.pipe2 = this.add.sprite(pipeOneDistance, height1 - pipeDistance, "pipe");
        this.pipe2.displayOriginX = 0;
        this.pipe2.displayOriginY = 0;
        this.pipe2.displayHeight = -1 * this.pipe2.height;

        //------------------Pipe row 2------------------------
        //Top Pipe
        this.pipe3 = this.add.sprite(pipeTwoDistance, height2 + pipeDistance, "pipe");
        this.pipe3.displayOriginX = 0;
        this.pipe3.displayOriginY = 0;

        //Bottom Pipe
        this.pipe4 = this.add.sprite(pipeTwoDistance, height2 - pipeDistance, "pipe");
        this.pipe4.displayOriginX = 0;
        this.pipe4.displayOriginY = 0;
        this.pipe4.displayHeight = -1 * this.pipe2.height;

        //------------------Pipe row 3------------------------
        //Random Height
        //Top Pipe
        this.pipe5 = this.add.sprite(pipeThreeDistance, height3 + pipeDistance, "pipe");
        this.pipe5.displayOriginX = 0;
        this.pipe5.displayOriginY = 0;

        //Bottom Pipe
        this.pipe6 = this.add.sprite(pipeThreeDistance, height3 - pipeDistance, "pipe");
        this.pipe6.displayOriginX = 0;
        this.pipe6.displayOriginY = 0;
        this.pipe6.displayHeight = -1 * this.pipe2.height;
    }

    update() {
        this.movePlayerManager();

        this.movePipe(this.pipe1);
        this.movePipe(this.pipe2);
        this.movePipe(this.pipe3);
        this.movePipe(this.pipe4);
        this.movePipe(this.pipe5);
        this.movePipe(this.pipe6);
    }

    movePlayerManager() {
        if(this.cursorKeys.up.isDown) {
            this.player.setVelocityY(-gameSettings.playerSpeed);
        }
        else if(this.cursorKeys.down.isDown) {
            this.player.setVelocityY(gameSettings.playerSpeed)
        }
    }

    movePipe(pipe) {
        pipe.x += -1;
    }
}