const Discord = require("discord.js");

const Client = new Discord.Client;


Client.on('ready', () => {
console.log(`Logged in as ${Client.user.tag}!`)
Client.user.setStatus('online')
Client.user.setPresence({
game: {
        name: 'vous accueillir',
        type: "Playing",
        url: "https://discordapp.com/"}});
Client.user.setActivity('vous accueillir');
});
Client.on('guildMemberAdd', member => {
    let embed = new Discord.MessageEmbed()
        .setFooter(`Nous sommes désormais ${member.guild.memberCount} membres 😁 `)
        .setAuthor(`${member.user.username} \n Merci à toi de rejoindre le serveur`, member.user.displayAvatarURL())
        .setDescription(`Bienvenue à toi dans la mafia \n Je te laisse te présenter dans le channel dédié pour et ensuite de prendre tes rôles dans #cmd-bot`)
        .setColor("#35f092")
        .setImage("https://avf.asso.fr/bourgoin-jallieu/wp-content/uploads/sites/353/2019/03/Bienvenue.jpg")

        member.guild.channels.cache.get("794591160614125568").send(embed)
})

Client.on('guildMemberRemove', member => {
   let embed = new Discord.MessageEmbed()
           .setFooter(`Nous sommes désormais ${member.guild.memberCount} membres 🤥 `)
           .setAuthor(`${member.user.username} nous quitte...`, member.user.displayAvatarURL())
           .setDescription("On espère tous te revoir ici, un jour...")
           .setColor("#35f092")
           .setImage("https://f4.bcbits.com/img/0011710833_10.jpg")
           member.guild.channels.cache.get("794592677773180940").send(embed)
})

Client.login(process.env.TOKEN);
