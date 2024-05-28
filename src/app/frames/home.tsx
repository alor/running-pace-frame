import FrameTemplate from "@/app/frames/template";
import FrameLogo from "@/app/frames/logo";

export default function FrameHome() {
    return (
        <FrameTemplate>
            <div tw="flex justify-between">
                <FrameLogo/>
                <h1 tw="text-[60px] text-white font-bold">Miles O&apos;Meter</h1>
            </div>
            <div tw="flex flex-col w-full text-white items-end">
                <div tw="text-[30px]">Pace converter metric/imperial</div>
                <br/>
                <div tw="text-[30px]">Race pace calculator</div>
                <br/>
                <div tw="text-[30px]">Time Estimation for distances</div>
                <br/>
                <div tw="text-[30px]">Training Plans</div>
            </div>
            <div tw="flex flex-col w-full text-white items-end">
                <h5>v2</h5>
            </div>

        </FrameTemplate>
    )
}