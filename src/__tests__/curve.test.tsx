import { expect, test } from 'vitest'
import {time_prediction, running_curve_str} from "@/app/core/curve"
import {time_to_string} from "@/app/core/calculus";

test('time prediction', () => {
    // 5k given the time of 1mile
    expect(time_prediction(6*60, 1609, 5000) === 1197).toBeTruthy()

    // 10k given the time of 5k
    expect(time_prediction(20*60, 5000, 10000) === 2502).toBeTruthy()

    // Half Marathon given the time of 10k
    expect(time_prediction(50*60, 10000, 21097) === 6619).toBeTruthy()
})

test('running curve', () => {
    // time in seconds, distance in meters
    let to_check = [
        [20*60, 5000],
        [40*60, 10000],
        [90*60, 21097],
        [180*60, 42195],
    ]

    let expected_curves = [
        [
            '1000m in 3:38',
            '1 mile in 6:01',
            '5K in 20:00',
            '10K in 41:42',
            'Half in 1:32:00',
            'Full in 3:11:49'
        ],
        [
            '1000m in 3:29',
            '1 mile in 5:46',
            '5K in 19:11',
            '10K in 40:00',
            'Half in 1:28:15',
            'Full in 3:04:00'
        ],
        [
            '1000m in 3:33',
            '1 mile in 5:53',
            '5K in 19:34',
            '10K in 40:47',
            'Half in 1:30:00',
            'Full in 3:07:39'
        ],
        [
            '1000m in 3:24',
            '1 mile in 5:39',
            '5K in 18:46',
            '10K in 39:08',
            'Half in 1:26:20',
            'Full in 3:00:00'
        ]
    ]

    to_check.forEach((entry, index) => {
        console.log(`${entry[1]} in ${time_to_string(entry[0])}`)
        let curve = running_curve_str(entry[0], entry[1])
        expect(JSON.stringify(curve) === JSON.stringify(expected_curves[index])).toBeTruthy()
    })
})