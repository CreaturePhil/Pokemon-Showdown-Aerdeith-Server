var cmds = {
	creaturephil: function(target, room, user) {
        if (!this.canBroadcast()) return;
        this.sendReplyBox('<center><img width="100%" height="100%" src="http://i.imgur.com/8H9dtEd.gif"><br />' +
        	'<img height="100" src="http://cdn.bulbagarden.net/upload/thumb/1/1c/674Pancham.png/250px-674Pancham.png"><br/>' +
        	'Ace: Pancham<br />' +
        	'Insert Catchphrase here.');
	},
};

for (var i in cmds) CommandParser.commands[i] = cmds[i];