import React from "react";
import PropTypes from "prop-types";
import {calculate} from "@/app/frames/calculus";
import FrameHome from "@/app/frames/home";
import FrameResults from "@/app/frames/results";
import FrameExamples from "@/app/frames/examples";

const Frame = ({ctx}) => {

    // not called yet
    if (!ctx.pressedButton)
        return <FrameHome/>

    // show the examples
    if (ctx.searchParams.value === 'Examples')
        return <FrameExamples/>

    // calculate and show results
    try {
        let {metric, imperial} = calculate(ctx.message?.inputText)

        return (
            <FrameResults prompt={ctx.message?.inputText} metric={metric} imperial={imperial} />
        )
    } catch (e) {
        // in case of error, show the example page
        return <FrameExamples/>
    }
}

Frame.propTypes = {
    ctx: PropTypes.object,
};

export default Frame