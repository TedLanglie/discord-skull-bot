require('dotenv').config()

const Discord = require('discord.js')
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS"] })

client.on('ready', () => {
    console.log("Bot is ready to go!")
})

let previousMessage = '';

client.on('messageReactionAdd', (reaction, user) => {
    let limit = 6; // number of skull reactions you need

    if(reaction.message.channel.id !== "995253766007828571" && reaction.message.channel.id !== "893205918836211762")
    {
        if (reaction.emoji.name == '💀' && reaction.count == limit)
        {
            if(reaction.message.content !== previousMessage)
            {
                let graveEmbed = new Discord.MessageEmbed()
                .setColor('#c35748')
                .setAuthor({name: reaction.message.author.username})
                .setTitle('"' + reaction.message.content + '"')
                .setImage(reaction.message.author.displayAvatarURL())
                .setDescription(reaction.message.url)
                .setThumbnail('https://images.emojiterra.com/twitter/512px/1f480.png');

                previousMessage = reaction.message.content;
                client.channels.cache.get('995253766007828571').send({ embeds: [graveEmbed] });
            }
        }
    }
  });

client.login(process.env.BOT_TOKEN)