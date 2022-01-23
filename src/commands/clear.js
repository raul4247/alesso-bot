import BotMessages from "../BotMessages.js"

async function clear(message) {

    const queue = player.getQueue(message.guild.id)

    if (!queue || !queue.playing) {
        message.channel.send(BotMessages.EmptyQueueMessage)
        return
    } 

    if (!queue.tracks[0]) {
        message.channel.send(BotMessages.EmptyQueueMessage)
        return
    } 

    await queue.clear()

    message.channel.send(BotMessages.QueueClearedMessage)
}

export default clear