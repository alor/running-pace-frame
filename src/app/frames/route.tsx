/* eslint-disable react/jsx-key */
import {Button} from "frames.js/next";
import {frames} from "./frames";
import {error} from "frames.js/core";
import Frame from "./frame"
import {parse_prompt} from "@/app/core/calculus";

const handleRequest = frames(async (ctx) => {

    // check that the input prompt is valid
    try {
        ctx.searchParams?.value === 'Calculate' && parse_prompt(ctx.message?.inputText)
    } catch (e) {
        console.log(e)
        // @ts-ignore
        return error(`${e.message}. Please check the Examples`);
    }

    return {
        image: (
            <Frame ctx={ctx}/>
        ),
        textInput: "How fast do you have to run?",
        buttons: [
            <Button action="post" target={{query: {value: "Calculate"}, pathname: "/"}}>
                🏃‍♂️‍➡️ Calculate
            </Button>,
            <Button action="post" target={{query: {value: "Examples"}, pathname: "/"}}>
                📖 Examples
            </Button>
        ],
    };
});

export const GET = handleRequest;
export const POST = handleRequest;