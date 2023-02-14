class Quiz9 extends Phaser.Scene {
    constructor() {
        super({ key: "Quiz9" });
    }

    preload() {
        this.bg = this.load.image("quiz_9", "assets/9.png");
        this.load.audio("a", "assets/t.mp3");
        this.load.audio("b", "assets/f.mp3");
    }

    create() {
        this.add.image(640, 360, 'quiz_9');
        let audio1 = this.sound.add('a');
        let audio2 = this.sound.add('b');

        

        
        let options = [
            "A)	No, GST cannot be claimed as input tax credit ",
        	"B) Yes, GST can be claimed as input tax credit",
            " C) GST can only be claimed as input tax credit under certain circumstances",
            "D) None of the above"
            
        ];
        let answer = 2;
        this.option1 = this.add.text(370, 330, options[0], {
            font: '24px Arial',
            fill: '#000',
            align: 'center',
        });
        this.option1.setInteractive();
        this.option1.on('pointerdown', () => {
            if (answer === 1) {
                this.score++;
                this.add.text(20, 600, 'Correct', {
                    font: '66px Fantasy',
                    fill: '#2FB2ED',
                    align: 'center',
                });
                audio1.play();
                this.time.addEvent({
                    delay: 2000,
                    callback: () => {
                        this.scene.start('Quiz10');
                    }
                });
            } else {
                this.add.text(20, 600, 'Wrong', {
                    font: '66px Fantasy',
                    fill: '#2FB2ED',
                    align: 'center',
                });
                audio2.play();
                this.time.addEvent({
                    delay: 2000,
                    callback: () => {
                        this.scene.start('Quiz10');
                    }
                });
            }
        });
    
        this.option2 = this.add.text(370, 430, options[1], {
            font: '24px Arial',
            fill: '#000',
            align: 'center',
        });
        this.option2.setInteractive();
        this.option2.on('pointerdown', () => {
            if (answer === 2) {
                this.score++;
                this.add.text(20, 600, 'Correct', {
                    font: '66px Fantasy',
                    fill: '#2FB2ED',
                    align: 'center',
                });
                audio1.play();
                this.score += 1;
                this.time.addEvent({
                    delay: 2000,
                    callback: () => {
                        this.scene.start('Quiz10');
                    }
                });
            } else {
                this.add.text(20, 600, 'Wrong', {
                    font: '66px Fantasy',
                    fill: '#2FB2ED',
                    align: 'center',
                });
                audio2.play();
                this.time.addEvent({
                    delay: 2000,
                    callback: () => {
                        this.scene.start('Quiz10');
                    }
                });
            }
            
        });

        this.option3 = this.add.text(370, 530, options[2], {
            font: '24px Arial',
            fill: '#000',
            align: 'center',
        });
        this.option3.setInteractive();
        this.option3.on('pointerdown', () => {
            if (answer === 3) {
                this.score++;
                this.add.text(20, 600, 'Correct', {
                    font: '66px Fantasy',
                    fill: '#2FB2ED',
                    align: 'center',
                });
                audio1.play();
                this.time.addEvent({
                    delay: 2000,
                    callback: () => {
                        this.scene.start('Quiz10');
                    }
                });
            } else {
                this.add.text(20, 600, 'Wrong', {
                    font: '66px Fantasy',
                    fill: '#2FB2ED',
                    align: 'center',
                });
                audio2.play();
                this.time.addEvent({
                    delay: 2000,
                    callback: () => {
                        this.scene.start('Quiz10');
                    }
                });
            }
            
        });

        this.option4 = this.add.text(370, 630, options[3], {
            font: '24px Arial',
            fill: '#000',
            align: 'center',
        });
        this.option4.setInteractive();
        this.option4.on('pointerdown', () => {
            if (answer === 4) {
                this.score++;
                this.add.text(20, 600, 'Correct', {
                    font: '66px Fantasy',
                    fill: '#2FB2ED',
                    align: 'center',
                });
                audio1.play();
                this.time.addEvent({
                    delay: 2000,
                    callback: () => {
                        this.scene.start('Quiz10');
                    }
                });
            } else {
                this.add.text(20, 600, 'Wrong', {
                    font: '66px Fantasy',
                    fill: '#2FB2ED',
                    align: 'center',
                });
                audio2.play();
                this.time.addEvent({
                    delay: 2000,
                    callback: () => {
                        this.scene.start('Quiz10');
                    }
                });
            }
            
        });
    }
}