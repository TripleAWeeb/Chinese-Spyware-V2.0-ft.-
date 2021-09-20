module.exports = {
    name: 'youtube',
    description: 'Imperialist propaganda.',
    execute(message, args, cmd, client, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#FF0000')
        .setTitle('Disgusting imperialist scum website.')
        .setURL('https://www.youtube.com')
        .setDescription('death to american imperialism')
        .addFields(
            {name: 'PROCEED WITH CAUSION', value: "THE FOLLOWING WEBSITE IS EXTREMELY DANGEROUS TO ANYONE THAT CLICKS ON THE URL. https://www.youtube.com"},
        )
        .setImage('https://i.imgur.com/42cBdg2.gif?noredirect')
        .setFooter('/danger//danger//danger//danger//danger//danger/');
        message.channel.send(newEmbed);
        
    }
}