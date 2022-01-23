import BotMessages from "../BotMessages.js"

async function queue(message) {
    const queue = player.getQueue(message.guild.id)

    if (!queue) {
        message.channel.send(BotMessages.EmptyQueueMessage)
        return
    }

    if (!queue.tracks[0]) {
        message.channel.send(BotMessages.LastSongOnQueueMessage)
        return
    }

    const tracksText = queue.tracks.map((track, index) =>
     `*${index + 1}* - ${track.title} [${track.requestedBy.username}]\n`
    ).reduce((prev, curr) => 
        prev + curr
    )

    message.channel.send(BotMessages.QueueStatusMessage + '\n' + tracksText)
}


export default queue