const { SlashCommandBuilder, EmbedBuilder, client } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('stats')
        .setDescription('Get statistics on the bot!'),

    async execute(interaction, client) {

        let days = Math.floor(client.uptime / 86400000);
        let hours = Math.floor(client.uptime / 3600000) % 23
        let minutes = Math.floor(client.uptime / 60000) % 60
        let seconds = Math.floor(client.uptime / 1000) % 60
        let totalUptime = `\`${days}\` days, \`${hours}\` hours, \`${minutes}\` minutes`

        let totalMembers = client.users.cache.size;
        let totalServers = client.guilds.cache.size;

        let botPfp = client.user.displayAvatarURL()

        const embed = new EmbedBuilder()
            .setTitle("Infina's Stats")
            .setThumbnail(botPfp)
            .setColor('Red')
            .addFields(
                { name: "**💻Developer(s)**", value: "Chaitanya126 (2)#7175", inline: true },
                { name: "**🌍Language**", value: "JavaScript", inline: true },
                { name: "**🌐Total Servers**", value: `${totalServers}`, inline: false },
                { name: "**🧔Total Members**", value: `${totalMembers}`, inline: true },
                { name: "**🆙Uptime**", value: `${totalUptime}`, inline: false }
            )

        await interaction.reply({ embeds: [embed] });
    }
}