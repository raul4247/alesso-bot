import BotMessages from "../BotMessages.js"

async function resume(message) {
    
    const queue = player.getQueue(message.guild.id)

    if (!queue) {
        message.channel.send(BotMessages.EmptyQueueMessage)
        return
    }

    if (queue.setPaused(false))
        message.channel.send(BotMessages.QueueResumedMessage)
    else
        message.channel.send(BotMessages.UnknownErrorMessage)
}

export default resume