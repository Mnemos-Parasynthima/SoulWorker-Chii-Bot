const { MessageEmbed } = require('discord.js');
const { Command } = require('discord.js-commando');
const fetch = require('node-fetch');

module.exports = class PussyCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'pussy',
      aliases: ['pssy', 'clt', 'cum'],
      group: 'nsfw',
      memberName: 'pussy',
      description: 'No description necessary',
      throttling: {
        usages: 3,
        duration: 1,
      }
    });
  }

  async run(msg) {
    const owner = process.env.ownerId;
    const endpoints = ['pussy_jpg', 'cum_jpg'];
    const i = Math.floor(Math.random() * endpoints.length);

    if (msg.author.id === owner && msg.channel.nsfw === true) {
      const { url } = await fetch(`https://nekos.life/api/v2/img/${endpoints[i]}`)
        .then((res) => res.json());

      const embed = new MessageEmbed()
        .setTitle('Lewd Neko(s)')
        .setColor('#ff0000')
        .setImage(url)
        .setFooter(`Request by: ${msg.author.username} | Powered by nekos.life`, msg.author.displayAvatarURL({ size: 32 }))
        .setTimestamp();
        
      msg.embed(embed);
    } else if (msg.author.id !== owner) { msg.reply('Command not allowed');
    } else if (msg.channel.nsfw === false) { msg.reply('Illegal!');
    } else { return; }
  }
};