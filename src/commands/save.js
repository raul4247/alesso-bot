import BotMessages from '../BotMessages.js'

async function save(message) {

    const queue = player.getQueue(message.guild.id)

    if (!queue || !queue.playing) {
        message.channel.send(BotMessages.EmptyQueueMessage)
        return
    }

    message.member.send(BotMessages.SavedSongMessage + queue.current.title + '\n' + queue.current.url).catch(error => {
        console.log(`Error saving song: ${error.message}`)
        message.channel.send(BotMessages.UnknownErrorMessage)
    })
}

export default save