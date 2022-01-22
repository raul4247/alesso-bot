import Discord from 'discord.js'
import dotenv from 'dotenv'
import { COMMAND_PREFIX } from './const.js'

dotenv.config()

const client = new Discord.Client({ intents: ['GUILDS', 'GUILD_MESSAGES'] })

client.once('ready', () => {
    console.log('alesso-bot is live! 🌎')
})

client.on('messageCreate', message => {

    // Ignores bot's own messages
    if (message.author.bot) return

    const command = message.content.split(' ')[0]

    // Ignores non commands
    if (!command.startsWith(COMMAND_PREFIX)) return

    // Ignores empty command
    if (command === COMMAND_PREFIX) return

    const commandArgs = message.content.split(' ').slice(1)

    console.log({
        'User': message.author.username,
        'Command': command,
        'Args': commandArgs
    })

    switch (command.substring(COMMAND_PREFIX.length)) {
        case 'play':
            message.channel.send('Bora! 🎵')
            break

            default:
            message.channel.send('Não conheço esse comando 😢')
    }
})

client.login(process.env.BOT_TOKEN)
