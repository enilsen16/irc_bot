var config = {
  channels: [""],
  server: "irc.freenode.net",
  botName: "erikbot"
}

var irc = require("irc");

var bot = new irc.Client(config.server, config.botName, {
  channels: config.channels
  });

bot.addListener("join", function(channel, who) {
  bot.say(channel, who + "Welcome back!");
});

bot.addListener("message", function(from, to, text, message) {
  bot.say(from, "¿Que?");
});

bot.addListener("message", function(from, to, text, message) {
  bot.say(config.channels[0], "¿Public que?");
});
