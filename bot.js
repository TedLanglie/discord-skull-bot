require('dotenv').config()

const Discord = require('discord.js')
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS"] })

client.on('ready', () => {
    console.log("Bot is ready to go!")
})

client.on('messageReactionAdd', (reaction, user) => {
    let limit = 5; // number of skull reactions you need
    if (reaction.emoji.name == '💀' && reaction.count == limit)
    {
        let graveEmbed = new Discord.MessageEmbed()
        .setColor('#c35748')
        .setAuthor({name: reaction.message.author.username})
        .setTitle('"' + reaction.message.content + '"')
        .setImage(reaction.message.author.displayAvatarURL())
        .setThumbnail('https://images.emojiterra.com/twitter/512px/1f480.png');
    
        client.channels.cache.get('995253766007828571').send({ embeds: [graveEmbed] });

    }
  });

client.login(process.env.BOT_TOKEN)