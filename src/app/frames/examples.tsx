import FrameTemplate from "@/app/frames/template";

export default function FrameExamples() {
    return (
        <FrameTemplate>
            <div tw="text-[48px] text-white">Prompt Examples:</div>
            <div tw="bg-gray-100 flex flex-wrap rounded">
                <div tw="flex flex-col md:flex-row w-full px-4 md:items-center justify-between text-indigo-600">
                    <div tw="mt-8 flex">
                        4:22/km
                    </div>
                    <div tw="mt-8 flex">
                        800 @ 6:05/mi
                    </div>
                    <div tw="mt-8 flex">
                        8:23/mi
                    </div>
                </div>
                <div tw="flex flex-col md:flex-row w-full px-4 md:items-center justify-between text-indigo-600">
                    <div tw="mt-8 flex">
                        5 Km in 19min
                    </div>
                    <div tw="mt-8 flex">
                        4mi in 25:00
                    </div>
                    <div tw="mt-8 flex">
                        10k in 40 min
                    </div>
                </div>
                <div tw="flex flex-col md:flex-row w-full px-4 md:items-center justify-between text-indigo-600">
                    <div tw="mt-8 flex">
                        half @ 4:15/km
                    </div>
                    <div tw="mt-8 flex">
                        13.1mi @ 8:25/mi
                    </div>
                    <div tw="mt-8 flex">
                        HM in 100mins
                    </div>
                </div>
                <div tw="flex flex-col md:flex-row w-full px-4 md:items-center justify-between text-indigo-600">
                    <div tw="mt-8 mb-8 flex">
                        FM in 3 hours
                    </div>
                    <div tw="mt-8 mb-8 flex">
                        Marathon in 3:24:37
                    </div>
                    <div tw="mt-8 mb-8 flex">
                        M @ 7:00/mi
                    </div>
                </div>
            </div>
        </FrameTemplate>
    )
}