module.exports = {
    name: 'rules',
    description: "embeds!",
    execute(message, args, cmd, client, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#2ECC71')
        .setTitle('Rules')
        .setURL('https://reddit.com/r/yandere')
        .setDescription('Welcome to r/yandere discord server!')
        .addFields(
            {name: '***Student Bill of Rights:*** ', value: '***学生の権利の請求書***'},
            {name: '1', value: '```All students have the right to be able to say what they want (unless it includes threatening someone else).```'},
            {name: '2', value: '```All students have the right to be able to post what they want (unless it breaks Discord T.O.S., or our rules).```'},
            {name: '3', value: '```All students have the right to know what they did wrong and are being punished for. Minor punishments will be given out first. Kicks and bans will explained and given out when necessary only. ```'},
            {name: '4', value: '```All students have a right from unwarranted abuse.```'},
            {name: '***Rules ***', value: '***校則***'},
            {name: '1 ', value: '```Be respectful of other students. If you are not, do not expect respect back.```'},
            {name: '2', value: '```Do not harass other students. This includes both here, and in private messages. If you have video proof of this or other violations, please give to staff if you want something done.```'},
            {name: '3', value: '```Here, speech is not restricted unless it breaks the previous rules. Political correctness is Not allowed. If you personally do not like how someone talks, then the decision falls to you.```'},
            {name: '4', value: '```Keep chats in their respective places. Deviations are expected, we are all human; however, if you continue, you will be warned.```'},
            
        )
        .setImage('https://64.media.tumblr.com/a7a0ababb0c7f431789703f6da959869/2a3db0e0f90d3331-0b/s500x750/1d1901f15e87ced38e13347ef34f7f9a37ceb730.gif')
        .setFooter('Please enjoy your stay!');
        message.channel.send(newEmbed);
    }
}