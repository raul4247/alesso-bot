import BotMessages from "../BotMessages.js"

async function skip(message) {

    const queue = player.getQueue(message.guild.id)

    if (!queue || !queue.playing) {
        message.channel.send(BotMessages.EmptyQueueMessage)
        return
    } 

    if (queue.skip())
        message.channel.send(BotMessages.SkippingSongMessage + queue.current.title)
    else
        message.channel.send(BotMessages.UnknownErrorMessage)

}

export default skip