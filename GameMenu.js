class GameMenu extends Phaser.Scene {
    constructor() {
      super({ key: "GameMenu" });
    }
  
    preload() {
     
      this.bg = this.load.image("background", "assets/GAME MENU-03.png");
      this.load.audio("beachSound", "assets/x.mp3")
      this.load.image("play", "assets/PLAY BUTTON-02.png");
      this.load.image("soundOn", "assets/soundon-02.png");
      this.load.image("soundOff", "assets/soundoff-05.png");
    }
  
    create() {
      let logo = this.add.image(640, 360, "background");
      let beachSound = this.sound.add("beachSound", { loop: true });
      beachSound.play();
  
      let play = this.add.image(650, 550, "play");
      play.setInteractive();
      play.on("pointerdown", function () {
        this.scene.start("Quiz1");
        beachSound.stop();
      }, this);

      this.add.text(900, 650, "Created By- Vishwajeet fate ", {
        font: "30px Arial Narrow",
        fill: "#000000",
        align: "center"
      });
  
      let soundOn = this.add.image(50, 50, "soundOn");
      soundOn.setInteractive();
      soundOn.on("pointerdown", function () {
        soundOn.visible = false;
        soundOff.visible = true;
        beachSound.pause();
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
  