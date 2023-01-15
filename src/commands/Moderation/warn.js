const { SlashCommandBuilder } = require(`@discordjs/builders`);
const { PermissionsBitField, EmbedBuilder, Embed } = require('discord.js');
const { QuickDB } = require('quick.db');
const db = new QuickDB();

module.exports = {
    data: new SlashCommandBuilder()
    .setName("warn")
    .setDescription("Warns a member")
    .addUserOption(option => option.setName(`target`).setDescription(`The user you would like to warn`).setRequired(true))
    .addStringOption(option => option.setName(`reason`).setDescription(`The reason for warning the user`).setRequired(false)),
    async execute (interaction) {

        if (!interaction.member.permissions.has(PermissionsBitField.Flags.KickMembers)) return await interaction.reply({ content: "You don't have permission to execute this command!", ephemeral: true})
        
        const member = interaction.options.getUser(`target`);
        let reason = interaction.options.getString(`reason`);

        if (!reason) reason = "No reason provided";

        const dmEmbed = new EmbedBuilder()
        .setColor("Blue")
        .setDescription(`:white_check_mark:  ${member.tag} has been **warned** | Reason: ${reason}`)

        await interaction.reply({ embeds: [dmEmbed] });

        await member.send({ embeds: [dmEmbed] }).catch(err => {
            return;
        })

        db.add(`warn_${member}`,1);
    }
}


