import Discord from 'discord.js'
import dotenv from 'dotenv'
import StringResources  from './stringResources.js'
import processCommand from './commands/commandProcessor.js' 

dotenv.config()

const client = new Discord.Client({ 
    intents: ['GUILDS', 'GUILD_MESSAGES'] 
})

client.once('ready', () => {
    console.log('alesso-bot is live! 🌎')
})

client.on('messageCreate', message => {

    // Ignores bot's own messages
    if (message.author.bot) return 

    // Ignore messages with no guild
    if (!message.guild) return

    // Ignore non-command messages
    if (!message.content.startsWith(StringResources.CommandPrefix)) return

    const args = message.content.slice(StringResources.CommandPrefix.length).trim().split(' ')
    const command = args.shift()?.toLowerCase()

    console.log({
        'user': message.author.username,
        'command': command,
        'args': args
    })

    processCommand(client, message, command, args)
})

client.login(process.env.BOT_TOKEN)
