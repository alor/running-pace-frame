import React from "react";

export default function FrameResults({prompt, metric, imperial}: {prompt:string, metric:string, imperial:string}) {
    return (
        <div tw="flex flex-col">
            <div tw="flex">{prompt}</div>
            <hr/>
            <div tw="flex">{metric}</div>
            <div tw="flex">{imperial}</div>
        </div>
    )
}