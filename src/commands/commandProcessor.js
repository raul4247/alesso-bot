import play from './play.js'
import pause from './pause.js'
import resume from './resume.js'
import queue from './queue.js'
import clear from './clear.js'
import skip from './skip.js'
import quit from './quit.js'

function processComand(client, message, command, args) {
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
            case 'quit':
                quit(message)
                break
            case 'help':
                // helpCommand()
                break
            default:
            // need help? use helpCommand
        }
    } catch (e) {
        console.log(`Error: ${e}`)
        message.channel.send(BotMessages.ErrorMessage)
    }
}

export default processComand