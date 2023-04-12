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
        this.player.setGravityY(500);

        const pipeDistance = 50;
        const height1 = 100 + Math.random() * 300;
        const height2 = 100 + Math.random() * 300;
        const height3 = 100 + Math.random() * 300;
        const pipeOneDistance = 300;
        const pipeTwoDistance = 500;
        const pipeThreeDistance = 700;

        // Add collision detection between player and pipes
        this.physics.add.collider(this.player, [this.pipe1, this.pipe2, this.pipe3, this.pipe4, this.pipe5, this.pipe6], () => {
            // Stop the game and show game over text when player collides with a pipe
            this.physics.pause();
            this.add.text(200, 250, 'Game Over', { fontSize: '32px', fill: '#000' });
          });

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
        // Check for space bar input
        if (Phaser.Input.Keyboard.JustDown(this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE))) {
        this.jump();
        }

        this.background.tilePositionX += 0.5;
        
        this.movePipe(this.pipe1);
        this.movePipe(this.pipe2);
        this.movePipe(this.pipe3);
        this.movePipe(this.pipe4);
        this.movePipe(this.pipe5);
        this.movePipe(this.pipe6);
    }

    movePipe(pipe) {
        pipe.x += -1.5;
    }

    jump() {
        this.player.setVelocityY(-200);
    }
}