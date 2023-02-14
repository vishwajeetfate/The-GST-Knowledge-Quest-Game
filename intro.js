class intro extends Phaser.Scene {
    constructor() {
      super({ key: "intro" });
    }
  
    preload() {
        this.load.video("intro","assets/q.mp4")
        this.load.audio("introAudio", "assets/q.mp3")
    }

    create() {
        let intro = this.add.video(640,360 ,"intro")
        intro.play();
        let audio = this.sound.add("introAudio")
        audio.play();
        intro.once("complete",function()
        {
         this.scene.start("GameMenu")
         audio.stop();
        },this)

        
    }
}