const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('sayhello')
    .setDescription('This is the sayhello command!'),
    async execute(interaction, client) {
        await interaction.reply ({content: 'Hello!'})
    }
}