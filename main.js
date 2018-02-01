var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update }),Main=function(){};
Main.prototype={
	
	preload: function(){
		game.load.image('test', 'assets/Space.jpg')
		game.load.script('splash', 'assets/splash.js')
		game.load.script('utils', 'assets/utils.js')
	}
	create: function(){
          game.state.add('splash',splash);
          game.state.start('splash');
	}


};
game.state.add('Main',Main);
game.state.start('Main');