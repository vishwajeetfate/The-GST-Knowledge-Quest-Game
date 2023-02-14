class QuizScore extends Phaser.Scene {
  constructor() {
    super({ key: "QuizScore" });
  }

  preload() {
    this.load.image("background", "assets/GAME MENU-03.png");
    this.load.image("retry", "assets/retry button-02.png");
    this.load.image("soundOn", "assets/soundon-02.png");
    this.load.image("soundOff", "assets/soundoff-05.png");
    this.load.audio("beachSound", "assets/x.mp3");
    
  }

  create() {
    let logo = this.add.image(640, 360, "background");
    let beachSound = this.sound.add("beachSound", { loop: true });
    beachSound.play();

    let play = this.add.image(640, 670, "retry");
    play.setInteractive();
    play.on("pointerdown", function () {
      this.scene.start("GameMenu");
      beachSound.stop();
    }, this);

    let soundOn = this.add.image(50, 50, "soundOn");
    soundOn.setInteractive();
    soundOn.on("pointerdown", function () {
      soundOn.visible = false;
      soundOff.visible = true;
      beachSound.pause();
    });
      
    this.add.text(400, 520, "Congratulations!", {
      font: "75px Fantasy",
      fill: "#2FB2ED",
      align: "center"
    });


    let soundOff = this.add.image(50, 50, "soundOff");
    soundOff.setInteractive();
    soundOff.visible = false;
    soundOff.on("pointerdown", function () {
      soundOff.visible = false;
      soundOn.visible = true;
      beachSound.resume();
    });
  }
 

}
