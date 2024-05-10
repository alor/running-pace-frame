import React from "react";
import PropTypes from "prop-types";
import {calculate} from "@/app/frames/calculus";

const Frame = ({ctx}) => {

    let {metric, imperial} = calculate(ctx.message?.inputText)

    return (
        <span>
            Hello there: {ctx.pressedButton ? "✅" : "❌"}
            {ctx.message?.inputText ? `, Typed: ${ctx.message?.inputText}` : ""}<br/>
            {metric}<br/>
            {imperial}<br/>
        </span>
    )
}

Frame.propTypes = {
    ctx: PropTypes.object,
};

export default Frame