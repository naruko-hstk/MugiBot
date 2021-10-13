/* eslint-disable max-len */
/* eslint-disable no-tabs */

const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('info')
		.setDescription('Get infomation')
		.addSubcommand((subcommand) =>
			subcommand
				.setName('user')
				.setDescription('Info about a user')
				.addUserOption((option) => option.setName('target')
					.setDescription('The user')
					.setRequired(true)))
		.addSubcommand((subcommand) =>
			subcommand
				.setName('server')
				.setDescription('Info about the server')),
	async execute(interaction) {
		if (interaction.options.getSubcommand() === 'user') {
			const user = interaction.options.getUser('target');
			const userinfo = new MessageEmbed()
				.setColor('RANDOM')
				.setTitle(`Here is **${user.username}**'s information'`)
				.setAuthor('むぎちゃん', 'https://cdn.discordapp.com/avatars/882519953100656680/dd87a83415c4f4b77ade768d34e694f4.png', 'https://csj.yeyunstudio.com')
				.setDescription('Generated by Project CSJ with Discord.js')
				.setThumbnail(`${user.avatarURL({ dynamic: true })}`)
				.addFields(
					{
						name: 'Username',
						value: `${user.username}`,
						inline: false,
					},
					{
						name: 'Full Username',
						value: `${user.tag}`,
						inline: false,
					},
					{
						name: 'User ID',
						value: `${user.id}`,
						inline: false,
					},
					{
						name: 'User Create @',
						value: `${user.createdAt}`,
						inline: false,
					},
				)
				.setFooter('Copyright © Project CSJ', 'https://cdn.discordapp.com/avatars/882519953100656680/dd87a83415c4f4b77ade768d34e694f4.png');
			interaction.reply({ embeds: [userinfo], ephemeral: true });
		}
		else {
			const guild = interaction.guild;
			const afk = guild.afkTimeout / 60;
			const guildinfo = new MessageEmbed()
				.setColor('RANDOM')
				.setTitle(`Here is **${guild.name}**'s information`)
				.setAuthor('G Cat Beta Version', 'https://cdn.discordapp.com/avatars/882519953100656680/dd87a83415c4f4b77ade768d34e694f4.png', 'https://csj.yeyunstudio.com')
				.setDescription('由Project CSJ使用Discord.js生成')
				.setThumbnail(`${guild.iconURL({ dynamic: true })}`)
				.addFields(
					{
						name: 'Guild Name',
						value: `${guild.name}`,
						inline: false,
					},
					{
						name: 'Guild\s Description',
						value: `${guild.description}`,
						inline: false,
					},
					{
						name: 'Guild ID',
						value: `${guild.id}`,
						inline: false,
					},
					{
						name: 'Guild Owner',
						value: `<@${guild.ownerId}>`,
						inline: false,
					},
					{
						name: 'Guild\'s AFK Channel',
						value: `${guild.afkChannel}`,
						inline: false,
					},
					{
						name: 'AFK\'s definition in this Guild',
						value: `${afk} minute(s)`,
						inline: false,
					},
					{
						name: 'Guild\'s Member Count',
						value: `${guild.memberCount}`,
						inline: false,
					},
					/*
					{
						name: 'Guild\'s Bot Count',
						value: `${BotCount}`,
						inline: false,
					},
					{
						name: 'Guild\'s Role Count',
						value: `${RoleCount}`,
						inline: false,
					},
					{
						name: 'Guild\'s Text Channel Count',
						value: `${TextChannelCount}`,
						inline: false,
					},
					{
						name: 'Guild\'s Voice Channel Count',
						value: `${VoiceChannelCount}`,
						inline: false,
					},
					{
						name: 'Guild\'s Stage Channel Count',
						value: `${StageChannelCount}`,
						inline: false,
					},
					*/
					{
						name: 'Guild\'s Boost Level',
						value: `${guild.premiumTier}`,
						inline: false,
					},
					{
						name: 'Guild\'s Boost Count',
						value: `${guild.premiumSubscriptionCount}`,
						inline: false,
					},
					{
						name: 'Guild Create @',
						value: `${guild.createdAt}`,
						inline: false,
					},
				)
				.setFooter('Copyright © Project CSJ', 'https://cdn.discordapp.com/avatars/882519953100656680/dd87a83415c4f4b77ade768d34e694f4.png');
			interaction.reply({ embeds: [guildinfo], ephemeral: true });
		}
	},
};
