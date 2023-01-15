const { SlashCommandBuilder} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Gets latency"),

    async execute(interaction, client) {
        const msg = await interaction.reply({
            content: "Pinging...",
            fetchReply: true,
        });
        const latency = `${msg.createdTimestamp - interaction.createdTimestamp}`;

        interaction.editReply({
            content: `Pong!\nLatency is ${latency}ms\nAPI Latency is ${client.ws.ping}ms`,
        });
    },
};