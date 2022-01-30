# alesso-bot

![alesso-bot](https://user-images.githubusercontent.com/12114017/151721291-e660928f-beaa-4e79-844a-deab009d1b66.png)

## What is alesso-bot?

This is a simple Discord music player bot, created after YouTube massive music bot's shutdown in 2021.
The bot reads messages from Discord text channels and handle simple commands to control the music player.
Music can be fetched from YouTube, Spotify or SoundCloud.

The alesso-bot is a reference to the swedish DJ [Alesso](https://en.wikipedia.org/wiki/Alesso).

## Stack:

- [Node.js](https://nodejs.org/)
- [discord.js](discord.js.org/)
- [discord-player](https://www.npmjs.com/package/discord-player)

## How to install and run:

To install the dependencies:
`npm install`

To run locally:
`node .`

** Create a `.env` file, with the Discord's Bot token (APP_TOKEN)

## Available Commands:

### `!play`

Searches song, and inserts it on the music player's queue.

e.g.: `!play Never Gonna Give You Up`

e.g.: `!play https://www.youtube.com/watch?v=y6120QOlsfU`

---

### `!queue`

Shows the current songs in queue.

e.g.: `!queue`

---

### `!pause`

Pauses the music player.

e.g.: `!pause`

---

### `!resume`

Resumes the music player.

e.g.: `!resume`

---

### `!remove`

Removes a song from the queue at a given position.

e.g.: `!remove 2`

---

### `!skip`

Skips the current song being played.

e.g.: `!skip`

---

### `!clear`

Clear all the songs in queue.

e.g.: `!clear`

---

### `!filter`

Shows the current filter applied, applies or unapplies a filter.

Filter list: 
- bassboost_low 
- bassboost
- bassboost_high
- 8D
- vaporwave
- nightcore
- phaser
- tremolo
- vibrato
- reverse
- treble
- normalizer
- normalizer2
- surrounding
- pulsator
- subboost
- karaoke
- flanger
- gate
- haas
- mcompand
- mono
- mstlr
- mstrr
- compressor
- expander
- softlimiter
- chorus
- chorus2d
- chorus3d
- fadein
- dim
- earrape

e.g.: `!filter`

e.g.: `!filter bassboost`

---

### `!slowed`

Apllies (or unapplies) the "vaporwave" filter (slowed + reverb 🕺).

e.g.: `!slowed`

---

### `!quit`

Finishes the music player.

e.g.: `!quit`

---

### `!help`

Shows a brief description for each command.

e.g.: `!help`

## Customizing:

### Command Prefix:

The default command prefix is "!". You can override it at `src/Configs.js`.

### Bot's Messages:

The current messages are in portuguese. To customize it, change the strings at `src/BotMessages.js`.

## Comming Next:

- MessageEmbed:
https://discordjs.guide/popular-topics/embeds.html#embed-preview

- Release branch with:
 https://www.npmjs.com/package/forever
