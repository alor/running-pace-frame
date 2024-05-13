import { ReactNode } from "react";

export default function FrameTemplate({children}: {children?: ReactNode}) {
    return (
        <div tw="h-full w-full flex items-start justify-start" style={{backgroundImage: "linear-gradient(to right, #24243e, #24243e, #0f0c29)"}}>
            <div tw="flex items-start justify-start h-full">
                <div tw="flex flex-col justify-between w-full h-full p-20">
                    {children}
                </div>
            </div>
        </div>
    )
}