import BotMessages from "../BotMessages.js"

async function filter(message, args) {

    const queue = player.getQueue(message.guild.id)

    if (!queue || !queue.playing) {
        message.channel.send(BotMessages.EmptyQueueMessage)
        return
    }

    const currentFilter = queue.getFiltersEnabled()[0]

    if (!args[0]) {
        console.log(currentFilter)
        if (currentFilter)
            message.channel.send(BotMessages.CurrentFilterMessage + currentFilter)
        else
            message.channel.send(BotMessages.NoFilterAppliedMessage)
        return
    }

    const filters = []

    queue.getFiltersEnabled().map(x => filters.push(x))
    queue.getFiltersDisabled().map(x => filters.push(x))

    const filter = filters.find((x) => x.toLowerCase() === args[0].toLowerCase())

    if (!filter) {
        message.channel.send(BotMessages.FilterNotFoundMessage)
        return
    }

    const filtersUpdated = {}

    filtersUpdated[filter] = queue.getFiltersEnabled().includes(filter) ? false : true

    await queue.setFilters(filtersUpdated)

    if (queue.getFiltersEnabled().includes(filter))
        message.channel.send(BotMessages.FilterAppliedMessage)
    else
        message.channel.send(BotMessages.FilterUnppliedMessage)
}

export default filter