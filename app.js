require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.on('ready', (c) => {
    console.log(`${c.user.tag} = ON`);
});


client.on('messageCreate', (message) => {
    console.log(message);

    if (message.author.bot) {
        return;
    };

    if (message.content === 'a')
        message.reply('teste');
}); 

client.login(process.env.TOKEN)