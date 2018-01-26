var splash = function (){},
playSound = true,
playMusic = true,
music;

splash.prototype = {

  loadScripts: function () {
    game.load.script('gamemenu','assets/GameMenu.js');
    game.load.script('thegame', 'assets/Game.js');
    game.load.script('gameover','assets/GameOver.js');
    game.load.script('credits', 'assets/Credits.js');
    game.load.script('options', 'assets/Options.js');
  },

  loadBgm: function () {
    game.load.audio('THE COGS', 'assets/The Cogs.mp3');
  },

  loadImages: function () {
  },

  init: function ()  {
    this.loadingBar = game.make.sprite(game.world.centerX-(387/2), 400, "loading");
    this.status     = game.make.text(game.world.centerX, 380, 'Loading...', {fill: 'white'});
    utils.centerGameObjects([this.status]);
    }
  // The preload function then will call all of the previously defined functions:
  preload: function () {
    // Add the loadingbar to the scene:
    var loadingBar;
    loadingBar = game.add.sprite(game.world.centerX, 400, "loading");
    // Tell phaser to use laodingBar as our preload progess bar
    game.add.existing(this.loadingBar);
    game.add.existing(this.status);
    this.load.setPreloadSprite(this.loadingBar);
    this.loadScripts();
    this.loadImages();
    this.loadBgm();
  },

  addGameStates: function () {

    game.state.add("GameMenu",GameMenu);
    game.state.add("Game",Game);
    game.state.add("GameOver",GameOver);
    game.state.add("Credits",Credits);
    game.state.add("Options",Options);
  },

  addGameMusic: function () {
    music = game.add.audio('dangerous');
    music.loop = true;
    music.play();
  },

   create: function() {
    this.status.setText('Ready!');

    setTimeout(function () {
      // We will load the main menu here
    }, 5000);
  }
};