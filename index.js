var Botkit = require('botkit');
const readline = require('readline');
var sleep = require('sleep-async')();
var controller = Botkit.slackbot();
var bot = controller.spawn({
  token: "xoxb-27925085047-ra5zmqoAxtZ3vXZlvPshsqKX"
})
bot.startRTM(function(err,bot,payload) {
  if (err) {
    throw new Error('Could not connect to Slack');
  }
});

controller.hears(["hello","^hi$"],["direct_message","direct_mention","mention","ambient"],function(bot,message) {
  bot.reply(message,'Hurro');
});

controller.hears([":banana:","banana"],["direct_message","direct_mention","mention","ambient"],function(bot,message) {
  bot.reply(message,'Thanks!');
});

controller.hears([":apple:","apple"],["direct_message","direct_mention","mention","ambient"],function(bot,message) {
  bot.reply(message,'Ewww!');
});

controller.hears([":hamburger:","burger"],["direct_message","direct_mention","mention","ambient"],function(bot,message) {
  bot.reply(message,'Yum!');
});

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
rl.on('line', (cmd) => {
  console.log(`You just typed: ${cmd}`);
  bot.say( {
            text: `${cmd}`,
            channel: 'C0L38TBEE'
          }
        );
});


function randomSleep() {
    var r = Math.floor((Math.random() * 30) + 15) * 60 * 1000; //minutes
    sleep.sleep(r, function() {
        bot.say( {
            text: 'Monkey wanna banana!',
            channel: 'C0L38TBEE'
          }
        );

        console.log('Monkey say');
        randomSleep();
    });
}

randomSleep();