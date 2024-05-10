/* eslint-disable react/jsx-key */
import {Button} from "frames.js/next";
import {frames} from "./frames";
import {appURL} from "@/app/utils";
import {error} from "frames.js/core";
import Frame from "./frame"
import {parse_prompt} from "@/app/frames/calculus";

const handleRequest = frames(async (ctx) => {

    // check that the input prompt is valid
    try {
        ctx.message?.inputText && parse_prompt(ctx.message.inputText)
    } catch (e) {
        console.log(e)
        return error("Invalid input, please check the Examples");
    }

    return {
        image: (
            <Frame ctx={ctx}/>
        ),
        textInput: "Conversion prompt...",
        buttons: [
            <Button action="post">
                Calculate
            </Button>,
            <Button action="link" target={appURL()}>
                Examples
            </Button>
        ],
    };
});

export const GET = handleRequest;
export const POST = handleRequest;