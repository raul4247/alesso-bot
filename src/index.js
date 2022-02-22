import { Client, Intents } from 'discord.js'
import { Player } from 'discord-player'
import loadBot from './bot.js'
import loadPlayerEvents from './events.js'
import dotenv from 'dotenv'
import http from 'http'

dotenv.config()

global.client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_VOICE_STATES
    ]
})

global.player = new Player(client, {
    initialVolume: 50,
    ytdlOptions: {
        quality: 'highestaudio',
        highWaterMark: 1 << 25
    }
})

loadBot()
loadPlayerEvents()

client.login(process.env.APP_TOKEN)

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-type': 'text/plain'
    })
    res.write('alesso-bot is running ☜(ﾟヮﾟ☜)')
    res.end()
}).listen(4000)