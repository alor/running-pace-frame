import React from "react";
import PropTypes from "prop-types";
import {parse_prompt, time_to_string} from "@/app/core/calculus";
import FrameExamples from "@/app/frames/examples";
import {running_curve, running_curve_str} from "@/app/core/curve";
import FrameTemplate from "@/app/frames/template";
import FrameResults from "@/app/frames/curve/results";

const Frame = ({ctx}) => {

    // calculate and show results
    try {
        // convert the prompt to distance and time
        let {distance, pace, time} = parse_prompt(ctx.message?.inputText)
        if (time === null)
            time = Math.round(distance / 1000 * pace)

        // calculate the prediction curve
        let curve = running_curve_str(time, distance)

        return (
            <FrameResults curve={curve} prompt={`${distance} in ${time_to_string(time)}`}/>
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