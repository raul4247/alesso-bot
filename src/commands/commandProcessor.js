import play from './play.js'
import pause from './pause.js'
import resume from './resume.js'
import queue from './queue.js'
import clear from './clear.js'
import skip from './skip.js'
import save from './save.js'
import filter from './filter.js'
import slowed from './slowed.js'
import remove from './remove.js'
import quit from './quit.js'
import BotMessages from '../BotMessages.js'

function processComand(message, command, args) {
    try {
        switch (command) {
            case 'play':
                play(message, args)
                break
            case 'pause':
                pause(message)
                break
            case 'resume':
                resume(message)
                break
            case 'skip':
                skip(message)
                break
            case 'clear':
                clear(message)
                break
            case 'queue':
                queue(message)
                break
            case 'save':
                save(message)
                break
            case 'filter':
                filter(message, args)
                break       
            case 'slowed':
                slowed(message)
                break
            case 'remove':
                remove(message, args)
                break
            case 'quit':
                quit(message)
                break

            case 'chuta':
                let rand = args[Math.floor(Math.random() * args.length)]
                message.channel.send(rand + ' rodou! 🤝')
                break
            case 'help':
                message.channel.send(BotMessages.HelpMessage)
                break
            default:
                message.channel.send(BotMessages.UseHelpCommandMessage)
        }
    } catch (e) {
        console.log(`Error: ${e}`)
        message.channel.send(BotMessages.ErrorMessage)
    }
}

export default processComand