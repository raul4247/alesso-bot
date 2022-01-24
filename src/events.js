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
        queue.metadata.send(BotMessages.AddedOnQueueMessage + track.title)
    })
    
    player.on('botDisconnect', (queue) => {
        queue.metadata.send(BotMessages.DisconnectedBotMessage)
    })
    
    player.on('channelEmpty', (queue) => {
        queue.metadata.send(EmptyChannelMessage)
    })
    
    player.on('queueEnd', (queue) => {
        queue.metadata.send(BotMessages.QueueEndedMessage)
    })
}

export default loadPlayerEvents