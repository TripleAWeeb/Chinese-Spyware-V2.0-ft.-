module.exports = {
    name: 'physical exercise',
    description: 'How to live a long life',
    execute(message, args, cmd, client, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#FF0000')
        .setTitle("Glorious leader's steamy exercise~~~~")
        .setURL('https://cdn.discordapp.com/attachments/697912025375834252/886959501700399175/37lyoow1kxm71.png')
        .setDescription('MAO IS THE FIRST SIGMA MALE')
        .addFields(
            {name: ' ( ͡° ͜ʖ ͡°)', value: " ( ͡° ͜ʖ ͡°)"},
        )
        .setImage('https://cdn.discordapp.com/attachments/697912025375834252/886959501700399175/37lyoow1kxm71.png')
        .setFooter('SIGMA MALE SIGMA MALE SIGMA MALE SIGMA MALE');
        message.channel.send(newEmbed);
        
    }
}