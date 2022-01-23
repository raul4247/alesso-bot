import play from './play.js'
import pause from './pause.js'
import resume from './resume.js'
import queue from './queue.js'

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
                // skipCommand()
                break
            case 'queue':
                queue(message)
                break
            case 'quit':
                // quitCommand()
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