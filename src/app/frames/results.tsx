import React from "react";
import FrameTemplate from "@/app/frames/template";

export default function FrameResults({prompt, metric, imperial}: {prompt:string, metric:string, imperial:string}) {
    // parse the string and split into values
    metric = metric.replace(' @ ', '|')
    metric = metric.replace(' in ', '|')
    imperial = imperial.replace(' @ ', '|')
    imperial = imperial.replace(' in ', '|')

    let [mdistance, mpace, mtime] = metric.split('|')
    let [idistance, ipace, itime] = imperial.split('|')

    return (
        <FrameTemplate>
            <div tw="text-[48px] text-white">{prompt}</div>
            <div tw="bg-gray-100 flex flex-wrap rounded">
                <div tw="flex flex-col md:flex-row w-full px-4 md:items-center justify-between text-indigo-600">
                    <div tw="mt-8 flex">
                        Distance
                    </div>
                    <div tw="mt-8 flex">
                        Pace
                    </div>
                    <div tw="mt-8 flex">
                        Time
                    </div>
                </div>
                <div tw="flex flex-col md:flex-row w-full px-4 justify-between">
                    <div tw="mt-8 flex" style={{minWidth: 180}}>
                        {mdistance}
                    </div>
                    <div tw="mt-8 flex">
                        {mpace}
                    </div>
                    <div tw="mt-8 flex">
                        {mtime}
                    </div>
                </div>
                <div tw="flex flex-col md:flex-row w-full px-4 justify-between">
                    <div tw="mt-8 mb-8 flex" style={{minWidth: 180}}>
                        {idistance}
                    </div>
                    <div tw="mt-8 mb-8 flex">
                        {ipace}
                    </div>
                    <div tw="mt-8 mb-8 flex">
                        {itime}
                    </div>
                </div>
            </div>
        </FrameTemplate>
    )
}