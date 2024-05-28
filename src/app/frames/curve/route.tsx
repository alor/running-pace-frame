/* eslint-disable react/jsx-key */
import { frames } from "../frames";
import { Button } from "frames.js/next";
import Frame from "@/app/frames/curve/frame";

export const POST = frames(async (ctx) => {

    return {
        image: (
            <Frame ctx={ctx}/>
        ),
        textInput: "How fast do you want to run?",
        buttons: [
            <Button action="post" target={{query: {value: "Predict"}, pathname: "/curve"}}>
                📈 Predict
            </Button>,,
            <Button action="post" target={{query: {value: "Home"}, pathname: "/"}}>
                🏠 Back
            </Button>,
        ],
    };
});