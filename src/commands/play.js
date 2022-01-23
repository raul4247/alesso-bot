import { QueryType } from 'discord-player'
import BotMessages from "../BotMessages.js"

async function play(message, args) {
    const search = args.join(' ').trim()

    if (!search || search.length == 0) {
        message.channel.send(BotMessages.UseHelpCommandMessage)
        return
    }

    const audioResource = await player.search(search, {
        requestedBy: message.member,
        searchEngine: QueryType.AUTO
    })

    if (!audioResource || !audioResource.tracks.length) {
        message.channel.send(BotMessages.SongNotFoundMessage)
        return
    }

    const queue = await player.createQueue(message.guild, {
        metadata: message.channel
    })

    try {
        if (!queue.connection)
            await queue.connect(message.member.voice.channel)
    } catch {
        await player.deleteQueue(message.guild.id)
        message.channel.send(BotMessages.JoiningErrorMessage)

        return
    }

    if (audioResource.playlist) {
        await message.channel.send(BotMessages.LoadingPlaylistMessage + '\n' + BotMessages.SongsFoundMessage + audioResource.tracks.length)
        queue.addTracks(audioResource.tracks)
    } else {
        const song = audioResource.tracks[0]
        await message.channel.send(BotMessages.LoadingSongMessage + song.title)
        queue.addTrack(song)
    }

    if (!queue.playing) await queue.play()
}


export default play