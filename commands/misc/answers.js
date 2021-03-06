const { MessageEmbed } = require('discord.js');
const { Command } = require('discord.js-commando');

module.exports = class AnswersCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'answers',
      aliases: ['asw', 'respuestas', 'kotae', 'kaito'],
      group: 'misc',
      memberName: 'answers',
      description: `Nya.`,
      guildOnly: true,
      throttling: {
        usages: 3,
        duration: 5,
      },
      args: [
        {
          key: 'nya',
          prompt: '',
          type: 'string',
          default: ''
        }
      ]    
    });
  }

  run(msg, { nya }) {
    const owner = process.env.ownerId;
    //let keys = ['nya', 'pls', 'please', 'chii', 'emiliabestgirl'];

    if (msg.author.id === owner) { return msg.reply('Ooh, my Nyaster. You know the answers. \nI thought you trusted me to give the answers :('); }

    if (nya === 'chii') {
      const embed = new MessageEmbed().setTitle('Answers!').setColor('ff00ff').setFooter('Answers may be different as per my myaster\'s handwriting');

      embed.setDescription('My dear never gave me any answers-nya!');

      return msg.embed(embed);
    } else if (nya !== 'chii') {
      return msg.reply('Ha, that won\'t affect me, you weakling, nya!')
    } else {
      return msg.reply('Nyo!');
    }
  }
}