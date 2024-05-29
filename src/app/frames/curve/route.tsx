/* eslint-disable react/jsx-key */
import { frames } from "../frames";
import { Button } from "frames.js/next";
import Frame from "@/app/frames/curve/frame";
import {parse_prompt} from "@/app/core/calculus";
import {error} from "frames.js/core";

export const POST = frames(async (ctx) => {

    // check that the input prompt is valid
    try {
        ctx.searchParams?.value === 'Predict' && parse_prompt(ctx.message?.inputText)
    } catch (e) {
        console.log(e)
        // @ts-ignore
        return error(`${e.message}. Please check the Examples`);
    }

    return {
        image: (
            <Frame ctx={ctx}/>
        ),
        textInput: "How fast do you want to run?",
        buttons: [
            <Button action="post" target={{query: {value: "Convert"}, pathname: "/"}}>
                🏃‍♂️‍➡️ Convert
            </Button>,
            <Button action="post" target={{query: {value: "Predict"}, pathname: "/curve"}}>
                📈 Predict
            </Button>,
            <Button action="post" target={{query: {value: "Home"}, pathname: "/"}}>
                🏠 Home
            </Button>,
        ],
    };
});