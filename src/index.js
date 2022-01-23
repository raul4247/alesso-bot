import { Client, Intents } from 'discord.js'
import { Player } from 'discord-player'
import loadBot from './bot.js'
import loadPlayerEvents from './events.js'
import dotenv from 'dotenv'

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