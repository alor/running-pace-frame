import {time_to_string} from "@/app/core/calculus";

function time_prediction(T1, D1, D2) {
    // """
    // Use the Riegel formula to calculate time of other distances given a known one
    // """

    // use the Riegel formula
    //      T2 = T1 * (D2/D1)^R
    //
    // T1 is the time for the known distance D1
    // T2 is the predicted time for the new distance D2
    // D1 is the known distance
    // D2 is the new distance
    // R = 1.06 for most distance running predictions
    let R = 1.06

    // Calculate the predicted time for the new distance
    return Math.round(T1 * Math.pow(D2 / D1, R))
}

function running_curve(T1, D1) {
    // """
    // Return a curve of known distances time give an input
    // """
    let distances = [1000, 1609, 5000, 10000, 21097, 42195]

    return distances.map(d => {
        return {distance: d, time: time_prediction(T1, D1, d)}
    })
}

function running_curve_str(T1, D1) {
    // """
    // Print the curve in human-readable format
    // """
    return running_curve(T1, D1).map(p => {
        return `${p.distance} in ${time_to_string(p.time)}`
    })
}

export {
    time_prediction,
    running_curve,
    running_curve_str
}