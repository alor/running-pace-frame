import React from "react";
import FrameTemplate from "@/app/frames/template";

export default function FrameResults({curve, prompt}: {curve:array, prompt:string}) {

    return (
        <FrameTemplate>
            <div tw="text-[48px] text-white flex">Reference Run: {prompt}</div>
            <div tw="bg-gray-100 flex flex-wrap rounded">
                <div tw="flex flex-col md:flex-row w-full px-4 md:items-center justify-between text-indigo-600">
                    <div tw="mt-8 flex">
                        Race Time Prediction:
                    </div>
                </div>
                <div tw="flex flex-col md:flex-row w-full px-4 justify-between">
                    <div tw="mt-8 flex">{curve[0]}</div>
                    <div tw="mt-8 flex">{curve[2]}</div>
                    <div tw="mt-8 flex">{curve[4]}</div>
                </div>
                <div tw="flex flex-col md:flex-row w-full px-4 justify-between mb-8">
                    <div tw="mt-8 flex">{curve[1]}</div>
                    <div tw="mt-8 flex">{curve[3]}</div>
                    <div tw="mt-8 flex">{curve[5]}</div>
                </div>
            </div>
        </FrameTemplate>
    )
}