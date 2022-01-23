import configs from './Configs.js'
import BotMessages from './BotMessages.js'
import processCommand from './commands/commandProcessor.js'

function loadBot() {

    client.once('ready', () => {
        console.log('alesso-bot is live! 🌎')
    })

    client.on('messageCreate', message => {

        if (message.author.bot) return

        if (!message.guild) return

        if (!message.content.startsWith(configs.commandPrefix)) return

        if (!message.member.voice.channel) {
            message.channel.send(BotMessages.JoinVoiceChannelMessage)
            return
        }

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) {
            message.channel.send(BotMessages.JoinBotVoiceChannelMessage)
            return
        }

        const args = message.content.slice(configs.commandPrefix.length).trim().split(' ')
        const command = args.shift()?.toLowerCase()

        console.log({
            'user': message.author.username,
            'command': command,
            'args': args
        })

        processCommand(client, message, command, args)
    })
}

export default loadBot