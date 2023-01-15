const { SlashCommandBuilder } = require('@discordjs/builders')
const { EmbedBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('supportserver')
    .setDescription('join the support server'),

    async execute(interaction) {
        const button = new ActionRowBuilder() 
        .addComponents( 
            new ButtonBuilder() 
            .setURL('https://discord.gg/wHrsFNTP') 
            .setLabel('Support Sevrer') 
            .setStyle(ButtonStyle.Link) 
        ) 
        const embed = new EmbedBuilder() 
        .setColor('Red') 
        .setDescription('**To Join The Support Server Click The Button Below**') 
        .setTitle('Support Server') 
        .setTimestamp();
        

                                
        await interaction.reply({ embeds: [embed], components: [button] }); 
    }
}