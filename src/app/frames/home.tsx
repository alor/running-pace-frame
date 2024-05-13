import FrameTemplate from "@/app/frames/template";
import FrameLogo from "@/app/frames/logo";

export default function FrameHome() {
    return (
        <FrameTemplate>
            <FrameLogo/>
            <h1 tw="text-[60px] text-white font-bold text-left">Miles O&apos;Meter</h1>
        </FrameTemplate>
    )
}