import BotMessages from "../BotMessages.js"

async function quit(message) {

    const queue = player.getQueue(message.guild.id)

    if (!queue || !queue.playing) {
        message.channel.send(BotMessages.EmptyQueueMessage)
        return
    }

    queue.destroy()
    message.channel.send(BotMessages.QuittingMessage)
}

export default quit