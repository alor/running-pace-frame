import FrameTemplate from "@/app/frames/template";
import FrameLogo from "@/app/frames/logo";
import React from "react";

export default function FrameExamples() {
    return (
        <FrameTemplate>
            <div tw="flex justify-between items-center">
                <FrameLogo/>
                <h1 tw="text-[48px] text-white font-bold">Prompt Examples</h1>
            </div>
            <div tw="bg-gray-100 flex flex-wrap rounded">
                <div tw="flex flex-col md:flex-row w-full px-4 md:items-center justify-between text-indigo-600 mt-4">
                    <div tw="flex">
                        4:22/km
                    </div>
                    <div tw="flex">
                        800 @ 6:05/mi
                    </div>
                    <div tw="flex">
                        8:23/mi
                    </div>
                </div>
                <div tw="flex flex-col md:flex-row w-full px-4 md:items-center justify-between text-indigo-600 mt-6">
                    <div tw="flex">
                        5 Km in 19min
                    </div>
                    <div tw="flex">
                        4mi in 25:00
                    </div>
                    <div tw="flex">
                        10k in 40 min
                    </div>
                </div>
                <div tw="flex flex-col md:flex-row w-full px-4 md:items-center justify-between text-indigo-600 mt-6">
                    <div tw="flex">
                        half @ 4:15/km
                    </div>
                    <div tw="flex">
                        13.1mi @ 8:25/mi
                    </div>
                    <div tw="flex">
                        HM in 100mins
                    </div>
                </div>
                <div tw="flex flex-col md:flex-row w-full px-4 md:items-center justify-between text-indigo-600 mt-6 mb-4">
                    <div tw="flex">
                        FM in 3 hours
                    </div>
                    <div tw="flex">
                        Marathon in 3:24:37
                    </div>
                    <div tw="flex">
                        M @ 7:00/mi
                    </div>
                </div>
            </div>
        </FrameTemplate>
    )
}