class Quiz10 extends Phaser.Scene {
    constructor() {
        super({ key: "Quiz10" });
    }

    preload() {
        this.bg = this.load.image("quiz_10", "assets/10.png");
        this.load.audio("a", "assets/t.mp3");
        this.load.audio("b", "assets/f.mp3");
    }

    create() {
        this.add.image(640, 360, 'quiz_10');
        let audio1 = this.sound.add('a');
        let audio2 = this.sound.add('b');

        
        
        let options = [
            "A) Fine and/or imprisonment ",
            "B) Blacklisting from GST network",
            "C) Both A and B ",
            "D) None of the above"
            
        ];
        let answer = 3;

        this.option1 = this.add.text(520, 330, options[0], {
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
                        this.scene.start('QuizScore');
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
                        this.scene.start('QuizScore');
                    }
                });
            }
        });
    
        this.option2 = this.add.text(520, 430, options[1], {
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
                this.time.addEvent({
                    delay: 2000,
                    callback: () => {
                        this.scene.start('QuizScore');
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
                        this.scene.start('QuizScore');
                    }
                });
            }
            
        });

        this.option3 = this.add.text(520, 530, options[2], {
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
                this.score += 1;
                this.time.addEvent({
                    delay: 2000,
                    callback: () => {
                        this.scene.start('QuizScore');
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
                        this.scene.start('QuizScore');
                    }
                });
            }
            
        });

        this.option4 = this.add.text(520, 630, options[3], {
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
                        this.scene.start('QuizScore');
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
                        this.scene.start('QuizScore');
                    }
                });
            }
            
        });
    }
}