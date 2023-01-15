const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('This is the help command!'),
    async execute (interaction, client) {
        
        const embed = new EmbedBuilder()
        .setColor("Red")
        .setTitle("Help Center")
        .setDescription(`Help Command Guide:`)
        .setImage("https://media.discordapp.net/attachments/1013407170588590092/1059486188425203772/standard.gif")
        .addFields({ name: "Page 1", value: "Help & Resources "})
        .addFields({ name: "Page 2", value: "Community Commands "})
        .addFields({ name: "Page 3", value: "Moderation Commands "})

        const embed2 = new EmbedBuilder()
        .setColor("Blue")
        .setTitle("Community Commands")
        .addFields({ name: "/help", value: "Do /help for the commands list & support"})
        .addFields({ name: "/ping", value: "Do /ping to see Latency"})
        .addFields({ name: "/sayhello", value: "Do /sayhello to say hello"})
        .addFields({ name: "/supportserver", value: "Do /supportserver to join the support server"})
        .addFields({ name: "/avatar", value: "Do /avatar to see the avatar"})
        .addFields({ name: "/stats", value: "Do /stats to see the bot stats"})
        .setFooter({ text: "Community Commands"})
        .setTimestamp()

        const embed3 = new EmbedBuilder()
        .setColor("Green")
        .setTitle("Moderation Commands")
        .addFields({ name: "/clear", value: "Do /clear to clear the message"})
        .addFields({ name: "/kick", value: "Do /kick to kick the member"})
        .addFields({ name: "/warn", value: "Do /warn to warn the member"})
        .setFooter({ text: "Moderation Commands"})
        .setTimestamp()

        const button = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
            .setCustomId(`page1`)
            .setLabel(`Page 1`)
            .setStyle(ButtonStyle.Success),

            new ButtonBuilder()
            .setCustomId(`page2`)
            .setLabel(`Page 2`)
            .setStyle(ButtonStyle.Success),

            new ButtonBuilder()
            .setCustomId(`page3`)
            .setLabel(`Page 3`)
            .setStyle(ButtonStyle.Success),
        )

        const message = await interaction.reply({ embeds: [embed], components: [button] });
        const collector = await message.createMessageComponentCollector();

        collector.on('collect', async i => {
            
            if (i.customId === 'page1') {
                
                if (i.user.id !== interaction.user.id) {
                    return await i.reply({ content: `Only ${interaction.user.tag} can use these buttons!`, ephemeral: true})
                }
                await i.update({ embeds: [embed], components: [button] })
            }

            if (i.customId === 'page2') {
                
                if (i.user.id !== interaction.user.id) {
                    return await i.reply({ content: `Only ${interaction.user.tag} can use these buttons!`, ephemeral: true})
                }
                await i.update({ embeds: [embed2], components: [button] })
            }

            if (i.customId === 'page3') {
                
                if (i.user.id !== interaction.user.id) {
                    return await i.reply({ content: `Only ${interaction.user.tag} can use these buttons!`, ephemeral: true})
                }
                await i.update({ embeds: [embed3], components: [button] })
            }
        })


    }
}