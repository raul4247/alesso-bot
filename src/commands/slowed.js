import BotMessages from "../BotMessages.js"

async function slowed(message) {
    
    const queue = player.getQueue(message.guild.id)

    if (!queue || !queue.playing) {
        message.channel.send(BotMessages.EmptyQueueMessage)
        return
    }

    const filter = 'vaporwave'

    const filtersUpdated = {}

    filtersUpdated[filter] = queue.getFiltersEnabled().includes(filter) ? false : true

    await queue.setFilters(filtersUpdated)

    if (queue.getFiltersEnabled().includes(filter))
        message.channel.send(BotMessages.FilterAppliedMessage)
    else
        message.channel.send(BotMessages.FilterUnppliedMessage)
}

export default slowed