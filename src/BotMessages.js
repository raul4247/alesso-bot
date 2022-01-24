import configs from './Configs.js'

export default {
    'UnknownErrorMessage': 'Foi mal, aconteceu algum um erro! 💀',
    'JoinVoiceChannelMessage': 'Entre primeiro em um canal de voz 🎤',
    'JoinBotVoiceChannelMessage': 'Entre no canal do bot pra usar os comandos 🤖',
    'UseHelpCommandMessage': `O comando tá errado! Use ${configs.commandPrefix}help pra pedir ajuda 🏁`,
    'JoiningErrorMessage': 'Não deu pra entrar no canal! 😫',
    'SongNotFoundMessage': 'Não achei a música 😨',
    'LoadingPlaylistMessage': 'Preparando a playlist 💿',
    'SongsFoundMessage': 'Músicas encontradas: ',
    'LoadingSongMessage': 'Preparando a música 💿: ',
    'PlayingSongMessage': 'Tocando agora 🤘: ',
    'EmptyQueueMessage': 'A fila está vazia! 🍃',
    'LastSongOnQueueMessage': 'Não tem música depois dessa 😴',
    'QueueStatusMessage': 'Setlist atual 📃:',
    'AddedOnQueueMessage': 'Adicionada na fila ✅: ',
    'QueuePausedMessage': 'A fila foi pausada 🖐',
    'QueueResumedMessage': 'A música voltou 😎',
    'QuittingMessage': 'Até mais 👋',
    'QueueClearedMessage': 'A fila está limpa 🚽',
    'SkippingSongMessage': 'Pulando a música 🦘: ',
    'SavedSongMessage': 'Salvando a música: 💾',
    'HelpMessage':
        `${configs.commandPrefix}play [Nome da Música ou Link do YouTube/Spotify/SoundCloud] - Coloca música na fila\n` +
        `${configs.commandPrefix}pause - Pausa o player\n` +
        `${configs.commandPrefix}resume - Retorna o player\n` +
        `${configs.commandPrefix}skip - Pula a música atual\n` +
        `${configs.commandPrefix}queue - Ver a fila atual\n` +
        `${configs.commandPrefix}clear - Limpa as músicas da fila\n` +
        `${configs.commandPrefix}quit - Termina o player\n` +
        `${configs.commandPrefix}help - Você tá vendo agora 😅`
    }