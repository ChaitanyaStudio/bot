const { SlashCommandBuilder, EmbedBuilder, Embed } = require("discord.js");

module.exports = {
    name: "messageCreate",
    async execute(message) {
        if (message.author.bot) return;

        const embed = new EmbedBuilder()
        .setColor('Red')
        .setDescription(`${message.author} Links Are Not Allowed In This Server!`)
        .setTimestamp();


        if (message.content.includes("https://") || message.content.includes("http://") || message.content.includes("discord.gg")) {
            message.delete();

            message.channel.send({ embeds: [embed] });
        }
    }
}