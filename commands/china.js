module.exports = {
    name: 'china',
    description: 'glory to china.',
    execute(message, args, cmd, client, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#FF0000')
        .setTitle('GLORY TO THE CHINESE COMMUNIST PARTY')
        .setURL('https://www.gov.cn/english/')
        .setDescription('china')
        .addFields(
            {name: 'Glory to China! ', value: "China (Chinese: 中国; pinyin: Zhōngguó; lit. 'Central State; Middle Kingdom'), officially the People's Republic of China (Chinese: 中华人民共和国; pinyin: Zhōnghuá Rénmín Gònghéguó; abbr. PRC), is a country in East Asia. It is the world's most populous country, with a population of more than 1.4 billion. China follows a single standard time offset of UTC+08:00 even though it spans five geographical time zones and borders 14 countries, the second most of any country in the world after Russia. Covering an area of approximately 9.6 million square kilometers (3.7 million mi2), it is the world's third or fourth largest country.[j] The country is officially divided into 23 provinces,[k] five autonomous regions, and four direct-controlled municipalities of Beijing (capital city), Tianjin, Shanghai (largest city), and Chongqing, as well as two special administrative regions, Hong Kong and Macau."},
        )
        .setImage('https://c.tenor.com/Tii3MhKr9voAAAAd/xi-jinping-clapping.gif')
        .setFooter('btw the linked url takes you to the official chinese website.');
        message.channel.send(newEmbed);
        
    }
}