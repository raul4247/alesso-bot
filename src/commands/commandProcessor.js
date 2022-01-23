function processComand(client, message, command, args) {
    switch (command) {
        case 'play':
            console.log('- play command selected -')
            // playCommand()
            break
        case 'pause':
            console.log('- pause command selected -')
            // pauseCommand()
            break
        case 'skip':
            console.log('- skip command selected -')
            // skipCommand()
            break
        case 'queue':
            console.log('- queue command selected -')
            // queueCommand()
            break
        case 'quit':
            console.log('- quit command selected -')
            // quitCommand()
            break
        case 'help':
            console.log('- help command selected -')
            // helpCommand()
            break

        default:
            console.log('- command not found -')
        // helpCommand()
    }
}

export default processComand