import BotMessages from "../BotMessages.js"

async function remove(message, args) {

    const queue = player.getQueue(message.guild.id)

    if (!queue || !queue.playing) {
        message.channel.send(BotMessages.EmptyQueueMessage)
        return
    }

    const position =  Number(args.join(' ').trim())

    if (Number.isInteger(position) && position >= 1 && position <= queue.tracks.length) {
        const song = queue.tracks[position -1]
        await message.channel.send(BotMessages.RemovedSongMessage + song.title)
        queue.remove(song)
    } else {
        message.channel.send(BotMessages.UseHelpCommandMessage)
        return
    }
}

export default remove