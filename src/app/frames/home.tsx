import FrameTemplate from "@/app/frames/template";
import FrameLogo from "@/app/frames/logo";

export default function FrameHome() {
    return (
        <FrameTemplate>
            <FrameLogo/>
            <h1 tw="text-[60px] text-white font-bold text-left">Miles O&apos;Meter</h1>
            <div tw="flex flex-col w-full text-white text-end items-end mt-8">
                <h5>Race time calculator and Pace converter metric/imperial</h5>
            </div>
        </FrameTemplate>
)
}