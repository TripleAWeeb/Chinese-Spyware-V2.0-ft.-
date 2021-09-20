module.exports = {
    name: 'tiananmen',
    description: 'glory to china.',
    execute(message, args, cmd, client, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#FF0000')
        .setTitle('TiananMen square')
        .setURL('https://www.google.com/maps/@39.9065562,116.397583,3a,75y,192.87h,90.72t/data=!3m8!1e1!3m6!1sAF1QipMwfoY6Hvx160QtpZVqymw8iH6MN1BUFsUXbXw!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMwfoY6Hvx160QtpZVqymw8iH6MN1BUFsUXbXw%3Dw203-h100-k-no-pi0.34774303-ya269.72537-ro0.47167346-fo100!7i5472!8i2736')
        .setDescription('china')
        .addFields(
            {name: 'Beautiful place ', value: "Tiananmen Square or Tian'anmen Square (/ˈtjɛnənmən/;[1] 天安门, Pinyin: Tiān'ānmén; Wade–Giles: Tʻien1-an1-mên2) is a city square in the city center of Beijing, China, located near the city's Central Business District and named after the eponymous Tiananmen (Gate of Heavenly Peace) located to its north, which separates it from the Forbidden City. The square contains the Monument to the People's Heroes, the Great Hall of the People, the National Museum of China, and the Mausoleum of Mao Zedong. Mao Zedong proclaimed the founding of the People's Republic of China in the square on October 1, 1949; the anniversary of this event is still observed there.[2] The size of Tiananmen Square is 765 x 282 meters (215,730 m2 or 53,31 acres).[3] It has great cultural significance as it was the site of several important events in Chinese history."},
        )
        .setImage('https://c.tenor.com/_2fZYQn7jXEAAAAM/sans-undertale.gif')
        .setFooter('Man going home in Beijing getting dunked on by Sans.');
        message.channel.send(newEmbed);
        
    }
}