import { expect, test } from 'vitest'
import {calculate, parse_prompt, sanitize_prompt} from "@/app/frames/calculus";

const prompts_to_test = [
    "5:00/km", "5:00 / km", "4:00 /Km",
    "8:00/mi", "8:24/ mi", "6:00 /Mi",
    "1000 @ 6:00/mi", "1mi in 6:00",
    "1mi in 5:59",
    "5k in 19:00", "5km in 19:00", "5 K in 19:00", "5 K in 19min",
    "5000 in 20:00", "5k @ 4:00/km",
    "10K in 39:00",
    "HM @ 4:00/km", "Half Marathon @ 4:00/km", "HM @5:22/mi", "13.1mi @ 6:22/mi",
    "FM @ 4:00/km", "Marathon @ 4:00/km", "Full Marathon @ 4:00/km",
    "Marathon in 3 hours", "HM in 1:30:00", "Half in 1:26:42", "26.2mi in 3:24:00",
    "M in 2 hours"
]

const invalid_prompts = [
    // errors
    "text", '5:00', '5/km', '6/mi', '123', "1000 @ 4:00/km in 2:30"
]

test('prompt sanitization', () => {
    const expected_prompts = [
        "1000 in 5:00", "1000 in 5:00", "1000 in 4:00",
        "1609 in 8:00", "1609 in 8:24", "1609 in 6:00",
        "1000 @ 6:00/mi", "1mi in 6:00",
        "1mi in 5:59",
        "5k in 19:00", "5km in 19:00", "5k in 19:00", "5k in 19min",
        "5000 in 20:00", "5k @ 4:00/km",
        "10k in 39:00",
        "hm @ 4:00/km", "halfmarathon @ 4:00/km", "hm @ 5:22/mi", "13.1mi @ 6:22/mi",
        "fm @ 4:00/km", "marathon @ 4:00/km", "fullmarathon @ 4:00/km",
        "marathon in 3hours", "hm in 1:30:00", "half in 1:26:42", "26.2mi in 3:24:00",
        "m in 2hours"
    ]

    // test all the prompts
    prompts_to_test.forEach((prompt, index) => {
        console.log(prompt)
        let testing = sanitize_prompt(prompt)
        expect(testing === expected_prompts[index]).toBeTruthy()
    })
})

test('prompt parsing', () => {
    const expected_parsing = [
        [1000, null, 300], [1000, null, 300], [1000, null, 240],
        [1609, null, 480], [1609, null, 504], [1609, null, 360],
        [1000, 224, null], [1609, null, 360],
        [1609, null, 359],
        [5000, null, 1140], [5000, null, 1140], [5000, null, 1140], [5000, null, 1140],
        [5000, null, 1200], [5000, 240, null],
        [10000, null, 2340],
        [21097, 240, null], [21097, 240, null], [21097, 200, null], [21082, 237, null],
        [42195, 240, null], [42195, 240, null], [42195, 240, null],
        [42195, null, 10800], [21097, null, 5400], [21097, null, 5202], [42164, null, 12240],
        [42195, null, 7200],
    ]

    // test all the prompts
    prompts_to_test.forEach((prompt, index) => {
        let testing = parse_prompt(prompt)
        let check = JSON.stringify(Object.values(testing))
        let expected = JSON.stringify(expected_parsing[index])
        console.log(`${prompt} ${check} ${expected}`)
        expect(check === expected).toBeTruthy()
    })
})

test('calculate', () => {
    const expected_calculate = [
        {
            metric: "1 Km @ 5:00/km in 5:00",
            imperial: "0.62 miles @ 8:02/mi in 5:00"
        },
        {
            metric: "1 Km @ 5:00/km in 5:00",
            imperial: "0.62 miles @ 8:02/mi in 5:00"
        },
        {
            metric: "1 Km @ 4:00/km in 4:00",
            imperial: "0.62 miles @ 6:26/mi in 4:00"
        },
        {
            metric: "1.609 Km @ 4:58/km in 8:00",
            imperial: "1 mile @ 7:59/mi in 8:00"
        },
        {
            metric: "1.609 Km @ 5:13/km in 8:24",
            imperial: "1 mile @ 8:23/mi in 8:24"
        },
        {
            metric: "1.609 Km @ 3:44/km in 6:00",
            imperial: "1 mile @ 6:00/mi in 6:00"
        },
        {
            metric: "1 Km @ 3:44/km in 3:44",
            imperial: "0.62 miles @ 6:00/mi in 3:44"
        },
        {
            metric: "1.609 Km @ 3:44/km in 6:00",
            imperial: "1 mile @ 6:00/mi in 6:00"
        },
        {
            metric: "1.609 Km @ 3:43/km in 5:59",
            imperial: "1 mile @ 5:58/mi in 5:59"
        },
        {
            metric: "5 Km @ 3:48/km in 19:00",
            imperial: "3.11 miles @ 6:06/mi in 19:00"
        },
        {
            metric: "5 Km @ 3:48/km in 19:00",
            imperial: "3.11 miles @ 6:06/mi in 19:00"
        },
        {
            metric: "5 Km @ 3:48/km in 19:00",
            imperial: "3.11 miles @ 6:06/mi in 19:00"
        },
        {
            metric: "5 Km @ 3:48/km in 19:00",
            imperial: "3.11 miles @ 6:06/mi in 19:00"
        },
        {
            metric: "5 Km @ 4:00/km in 20:00",
            imperial: "3.11 miles @ 6:26/mi in 20:00"
        },
        {
            metric: "5 Km @ 4:00/km in 20:00",
            imperial: "3.11 miles @ 6:26/mi in 20:00"
        },
        {
            metric: "10 Km @ 3:54/km in 39:00",
            imperial: "6.21 miles @ 6:16/mi in 39:00"
        },
        {
            metric: "21.097 Km @ 4:00/km in 1:24:23",
            imperial: "13.11 miles @ 6:26/mi in 1:24:23"
        },
        {
            metric: "21.097 Km @ 4:00/km in 1:24:23",
            imperial: "13.11 miles @ 6:26/mi in 1:24:23"
        },
        {
            metric: "21.097 Km @ 3:20/km in 1:10:19",
            imperial: "13.11 miles @ 5:21/mi in 1:10:19"
        },
        {
            metric: "21.082 Km @ 3:57/km in 1:23:16",
            imperial: "13.1 miles @ 6:21/mi in 1:23:16"
        },
        {
            metric: "42.195 Km @ 4:00/km in 2:48:47",
            imperial: "26.22 miles @ 6:26/mi in 2:48:47"
        },
        {
            metric: "42.195 Km @ 4:00/km in 2:48:47",
            imperial: "26.22 miles @ 6:26/mi in 2:48:47"
        },
        {
            metric: "42.195 Km @ 4:00/km in 2:48:47",
            imperial: "26.22 miles @ 6:26/mi in 2:48:47"
        },
        {
            metric: "42.195 Km @ 4:16/km in 3:00:00",
            imperial: "26.22 miles @ 6:51/mi in 3:00:00"
        },
        {
            metric: "21.097 Km @ 4:16/km in 1:30:00",
            imperial: "13.11 miles @ 6:51/mi in 1:30:00"
        },
        {
            metric: "21.097 Km @ 4:07/km in 1:26:42",
            imperial: "13.11 miles @ 6:37/mi in 1:26:42"
        },
        {
            metric: "42.164 Km @ 4:50/km in 3:24:00",
            imperial: "26.2 miles @ 7:46/mi in 3:24:00"
        },
        {
            metric: "42.195 Km @ 2:51/km in 2:00:00",
            imperial: "26.22 miles @ 4:35/mi in 2:00:00"
        }
    ]

    // test all the prompts
    prompts_to_test.forEach((prompt, index) => {
        let {metric, imperial} = calculate(prompt)
        let expected = expected_calculate[index]
        console.log(`${prompt} -> ${metric} - ${imperial}`)
        expect(metric === expected.metric).toBeTruthy()
        expect(imperial === expected.imperial).toBeTruthy()
    })
})

test('error handling', () => {
    // test all the invalid prompts
    invalid_prompts.forEach((prompt, index) => {
        console.log(prompt)
        expect(() => parse_prompt(prompt)).toThrowError(/Invalid input/)
    })
})

test('edge cases', () => {
    let prompt = "8:00/mi"
    let {metric, imperial} = calculate(prompt)
    console.log(prompt)
    console.log(metric)
    console.log(imperial)
    expect(metric === "1.609 Km @ 4:58/km in 8:00").toBeTruthy()
    expect(imperial === "1 mile @ 7:59/mi in 8:00").toBeTruthy()
})