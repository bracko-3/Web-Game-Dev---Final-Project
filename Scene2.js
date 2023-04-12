class Scene2 extends Phaser.Scene {
    constructor(){
        super("playGame");
    }

    create() {
        this.background = this.add.tileSprite(0, 0, config.width, config.height, "background");
        this.background.setOrigin(0, 0);
        this.background.displayWidth = 500;
        this.background.displayHeight = 500;

        this.player = this.physics.add.sprite(config.width/2 - 200, config.height/2, "player");
        this.player.angle += 90;
        this.player.play("thrust");
        this.cursorKeys = this.input.keyboard.createCursorKeys();
        this.player.setCollideWorldBounds(true);
        this.player.setGravityY(500);
        this.player.depth = 1;
        this.player.z = 1;

        const pipeDistance = 50;
        const height1 = 100 + Math.random() * 300;
        const height2 = 100 + Math.random() * 300;
        const height3 = 100 + Math.random() * 300;
        const height4 = 100 + Math.random() * 300;
        const pipeOneDistance = 600;
        const pipeTwoDistance = 800;
        const pipeThreeDistance = 1000;
        const pipeFourDistance = 1200;

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

        this.playerPositionText = this.add.text(10, 10, '', { fontSize: '16px', fill: '#000' });
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
            this.checkTopCollision();
            this.checkBottomCollision();

        // Check if pipes have gone off left side of screen, and reset position if they have
        const resetDistance = 535;
        if (this.pipe1.x < -this.pipe1.width && this.pipe2.x < -this.pipe2.width) {
            this.pipe1.x = resetDistance;
            this.pipe2.x = resetDistance;
            this.resetHeight(this.pipe1, this.pipe2);
        }
        if (this.pipe3.x < -this.pipe3.width && this.pipe4.x < -this.pipe4.width) {
            this.pipe3.x = resetDistance;
            this.pipe4.x = resetDistance;
            this.resetHeight(this.pipe3, this.pipe4);
        }
        if (this.pipe5.x < -this.pipe5.width && this.pipe6.x < -this.pipe6.width) {
            this.pipe5.x = resetDistance;
            this.pipe6.x = resetDistance;
            this.resetHeight(this.pipe5, this.pipe6);
        }

        this.playerPositionText.setText(`Pipe 1 Position: x = ${this.pipe1.x}, width = ${this.pipe1.width}`);
    }
    
    checkBottomCollision() {
        if (this.player.y >= this.pipe1.y && (this.pipe1.x >= 0 && this.pipe1.x <= this.player.x)) {
            this.gameOver();
        }
        if (this.player.y >= this.pipe3.y && (this.pipe3.x >= 0 && this.pipe3.x <= this.player.x)) {
            this.gameOver();
        }
        if (this.player.y >= this.pipe5.y && (this.pipe5.x >= 0 && this.pipe5.x <= this.player.x)) {
            this.gameOver();
        }
    }

    checkTopCollision() {
        if (this.player.y <= this.pipe2.y && (this.pipe2.x >= 0 && this.pipe2.x <= this.player.x)) {
            this.gameOver();
        }
        if (this.player.y <= this.pipe4.y && (this.pipe4.x >= 0 && this.pipe4.x <= this.player.x)) {
            this.gameOver();
        }
        if (this.player.y <= this.pipe6.y && (this.pipe6.x >= 0 && this.pipe6.x <= this.player.x)) {
            this.gameOver();
        }
    }
    
    gameOver() {
        this.player.setTint(0xff0000);
        this.gameOverText = this.add.text(config.width/2, config.height/2, 'Game Over', { fontSize: '32px', fill: '#fff' });
        this.gameOverText.setOrigin(0.5);
    }

    resetHeight(pipe1, pipe2) {
        const pipeDistance = 50;
        const newHeight = 100 + Math.random() * 300;
        pipe1.y = newHeight + pipeDistance;
        pipe2.y = newHeight - pipeDistance;
    }

    movePipe(pipe) {
        if (!this.gameOverText) {
            pipe.x += -1.5;
        }
    }

    jump() {
        this.player.setVelocityY(-200);
    }
}