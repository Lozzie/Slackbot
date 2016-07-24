/**
 * Your slackbot token is available as the global variable:

process.env.SLACKBOT_TOKEN

 * When deployed to now.sh, the URL of your application is available as the
 * global variable:

process.env.NOW_URL

 * The URL is useful for advanced use cases such as setting up an Outgoing
 * webhook:
 * https://github.com/howdyai/botkit/blob/master/readme-slack.md#outgoing-webhooks-and-slash-commands
 *
 */

var Botkit = require('botkit');
var controller = Botkit.slackbot();
var bot = controller.spawn({
  token: process.env.SLACKBOT_TOKEN
})

bot.startRTM(function(error, whichBot, payload) {
  if (error) {
    throw new Error('Could not connect to Slack');
  }
});

//heard 'hello' and responds
controller.hears('hello',
	['direct_message', 'direct_mention', 'mention', 'ambient'], 
		function(whichBot, message) {
  			whichBot.reply(message, 'Hi there matey!');
});

//hears and mention and responds
controller.hears('',
	['direct_message', 'direct_mention', 'mention', 'ambient'], 
		function(whichBot, message) {
			whichBot.reply(message, 'Thanks for the message matey, how can I help?')
});


//hears request for user list and responds
var userlist = all_user_data
var usernumber = all_user_data.length

controller.hears(['who goes there', 'message_received', 'direct_mention', 'mention', 'ambient'] function(bot,message) {

  // start a conversation to handle this response.
  bot.startConversation(message,function(err,convo) {

    convo.ask('there are' + 'usernumber' + 'of you, want to know who? '[
      {
        pattern: 'No',
        callback: function(response,convo) {
          convo.say('OK you are done!');
          convo.next();
        }
      },
      {
        pattern: bot.utterances.yes,
        callback: function(response,convo) {
          convo.say(message 'userlist');
          // do something else...
          convo.next();

        }
      },
      {
        pattern: bot.utterances.no,
        callback: function(response,convo) {
          convo.say('Perhaps later.');
          // do something else...
          convo.next();
        }
      },
      {
        default: true,
        callback: function(response,convo) {
          // just repeat the question
          convo.repeat();
          convo.next();
        }
      }
    ]);

  })

});
