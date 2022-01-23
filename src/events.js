import BotMessages from './BotMessages.js'

function loadPlayerEvents() {
    player.on('error', (queue, error) => {
        console.log(`Error: ${error.message} `)
    })
    
    player.on('connectionError', (queue, error) => {
        console.log(`Connection error: ${error.message}`)
    })
    
    player.on('trackStart', (queue, track) => {
        if (queue.repeatMode === 0)
            queue.metadata.send(BotMessages.PlayingSongMessage + track.title)
    })
    
    player.on('trackAdd', (queue, track) => {

    })
    
    player.on('botDisconnect', (queue) => {
    })
    
    player.on('channelEmpty', (queue) => {
    })
    
    player.on('queueEnd', (queue) => {
    })
}

export default loadPlayerEvents