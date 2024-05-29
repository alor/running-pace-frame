import React from "react";
import FrameTemplate from "@/app/frames/template";
import FrameLogo from "@/app/frames/logo";

export default function FrameResults({curve, prompt}: {curve:array, prompt:string}) {

    return (
        <FrameTemplate>
            <div tw="flex justify-between items-center">
                <FrameLogo/>
                <h1 tw="text-[48px] text-white font-bold">Race Time Prediction</h1>
            </div>
            <div tw="bg-gray-100 flex flex-wrap rounded">
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
                <div tw="flex flex-col w-full px-4 text-indigo-600 mt-8 mb-4 items-end text-[24px]">
                    Reference Run: {prompt}
                </div>
            </div>
        </FrameTemplate>
    )
}