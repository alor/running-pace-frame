import _ from 'lodash'

function sanitize_prompt(prompt) {
    // """
    // normalize the prompt to a standard form
    // """

    // all down case
    prompt = prompt.toLowerCase()
    // separate the '@' commands
    prompt = prompt.replace('@', ' @ ')
    // remove spaces in the pace definition
    prompt = prompt.replace(' /', '/')
    prompt = prompt.replace('/ ', '/')
    // remove spaces in the distance definition
    prompt = prompt.replace(' k', 'k')
    prompt = prompt.replace(' m', 'm')
    // remove spaces in time definition (e.g. 3 hours -> 3hours)
    prompt = prompt.replace(' h', 'h')

    // remove double spaces
    prompt = prompt.replace('  ', ' ')

    // without any spaces it's a pace, add a dummy distance
    if (!/\s/g.test(prompt)) {
        // if (/km/.test(prompt))
        //     prompt = `1000 @ ${prompt}`
        // else if (/mi/.test(prompt))
        //     prompt = `1609 @ ${prompt}`

        prompt = `1000 @ ${prompt}`
    }

    return prompt
}

function parse_prompt(prompt) {
    // """
    // Extract distance, pace and time from a prompt
    // """
    let pace = null
    let time = null

    let parts;
    let distance;

    try {
        // pre parsing to normalize the prompt
        prompt = sanitize_prompt(prompt)

        // tokenize the prompt
        parts = prompt.split(' ')
        // distance is always the first token
        distance = distance_to_meters(parts[0])

        if (parts[1] === 'in') {
            time = time_to_seconds(parts[2])
        } else if (parts[1] === '@') {
            pace = pace_to_seconds(parts[2])
        }

        if (pace === null && time === null)
            throw "Missing infos"

        return {
            distance: distance,
            pace: pace,
            time: time
        }
    } catch (e) {
        throw "Invalid input"
    }
}

function distance_to_meters(distance) {
    // """
    // Convert distance to meters
    // """
    let meters = null

    // meters
    let m;
    if (m = distance.match('([0-9]+)'))
        meters = parseInt(m[0])
    // kilometers
    if (m = distance.match('([0-9]*)k[m]?'))
        meters = parseInt(m[0]) * 1000
    // miles
    if (m = distance.match('(([0-9]*[.])?[0-9]+)mi'))
        meters = Math.floor(parseFloat(m[0]) * 1609.3)

    if (['half', 'halfmarathon', 'hm'].includes(distance))
        meters = 21097

    if (['full', 'fullmarathon', 'fm', 'marathon'].includes(distance))
        meters = 42195

    return meters
}

function time_to_seconds(time) {
    // """
    // Convert time to seconds
    // """
    let seconds = null
    let m;

    // minutes
    if (m = time.match('([0-9]*)min[s]?'))
        seconds = parseInt(m[0]) * 60
    // hours
    if (m = time.match('([0-9]*)hour[s]?'))
        seconds = parseInt(m[0]) * 3600

    // minutes and seconds
    if (m = time.match('([0-9]*):([0-9]*)'))
        seconds = parseInt(m[0]) * 60 + parseInt(m[1])
    // hours, minutes and seconds
    if (m = time.match('([0-9]*):([0-9]*):([0-9]*)'))
        seconds = parseInt(m[0]) * 3600 + parseInt(m[1]) * 60 + parseInt(m[2])

    return seconds
}

function pace_to_seconds(time) {
    // """
    // Convert pace to seconds
    // """
    let seconds = null
    let m;

    // minutes and seconds
    if (m = time.match('([0-9]*):([0-9]*)/km'))
        seconds = parseInt(m[0]) * 60 + parseInt(m[1])
    // hours, minutes and seconds
    if (m = time.match('([0-9]*):([0-9]*)/mi'))
        seconds = Math.floor((parseInt(m[0]) * 60 + parseInt(m[1])) / 1.6093)

    return seconds
}

function pace_to_km(pace) {
    // """
    // Convert seconds per km to string (e.g 4:00/km)
    // """
    let mins = Math.floor(pace / 60)
    let seconds = pace % 60

    // TODO: 02d for seconds
    return `${mins}:${seconds}/km`
}

function pace_to_mi(pace) {
    // """
    // Convert seconds per km to string (e.g 4:00/mi)
    // """
    let pace_mi = pace * 1.6093
    let mins = Math.floor(pace_mi / 60)
    let seconds = Math.floor(pace_mi % 60)

    // TODO: 02d for seconds
    return `${mins}:${seconds}/mi`
}

function time_to_string(time) {
    // """
    // Convert number of seconds to string (e.g. 3:23:32)
    // """
    let hours = Math.floor(time / 3600)
    let mins = Math.floor(time % 3600 / 60)
    let seconds = time % 60

    if (hours > 0)
        // TODO: 02d for min and seconds
        return `${hours}:${mins}:${seconds}`
    else
        // TODO: 02d for seconds
        return `${mins}:${seconds}`
}

function meters_to_km(meters) {
    // """
    // Convert meters to Km string (e.g 10000 -> 10k)
    // """
    let d = meters / 1000
    // TODO find the 'g' equivalent
    return `${d}Km`
}

function meters_to_mi(meters) {
    // """
    // Convert meters to Miles string (e.g 10000 -> 6.2mi)
    // """
    let d = _.round(meters / 1609.3, 2)
    return `${d}mi`
}

function calculate(prompt) {
    // """
    // do the calculation
    // """

    // no prompt, no output
    if (!prompt)
        return ['', '']

    console.log(prompt)

    // extract the relevant infos
    let {distance, pace, time} = parse_prompt(prompt)

    console.log(`${distance} ${pace} ${time}`)

    // we only have pace, calculate time
    if (time === null)
        time = Math.floor(distance / 1000 * pace)

    // we only have time, calculate pace
    if (pace === null)
        pace = Math.floor(time / distance * 1000)

    console.log(`${distance} ${pace} ${time}`)

    let metric = `${meters_to_km(distance)} @ ${pace_to_km(pace)} in ${time_to_string(time)}`
    let imperial = `${meters_to_mi(distance)} @ ${pace_to_mi(pace)} in ${time_to_string(time)}`

    console.log(metric)
    console.log(imperial)

    return {
        metric: metric,
        imperial: imperial,
    }
}

export {
    parse_prompt,
    calculate,
}