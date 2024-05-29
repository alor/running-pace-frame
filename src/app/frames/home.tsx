import FrameTemplate from "@/app/frames/template";
import FrameLogo from "@/app/frames/logo";

export default function FrameHome() {
    return (
        <FrameTemplate>
            <div tw="flex justify-between items-center">
                <FrameLogo/>
                <h1 tw="text-[60px] text-white font-bold">Miles O&apos;Meter</h1>
            </div>
            <div tw="flex flex-col w-full text-white items-end mt-8">
                <div tw="text-[30px]">Pace Converter metric/imperial</div>
                <br/>
                <div tw="text-[30px]">Race Pace Calculator</div>
                <br/>
                <div tw="text-[30px]">Race Time Estimation</div>
                <br/>
                {/*<div tw="text-[30px]">Training Plans</div>*/}
            </div>
            <div tw="flex flex-col w-full text-white items-end">
                <h5>v2</h5>
            </div>
        </FrameTemplate>
    )
}