import BotMessages from "../BotMessages.js"

async function pause(message) {

    const queue = player.getQueue(message.guild.id)

    if (!queue) {
        message.channel.send(BotMessages.EmptyQueueMessage)
        return
    }

    if (queue.setPaused(true))
        message.channel.send(BotMessages.QueuePausedMessage)
    else
        message.channel.send(BotMessages.UnknownErrorMessage)
}

export default pause