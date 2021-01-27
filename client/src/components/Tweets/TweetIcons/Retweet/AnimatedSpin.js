import React from "react";
import { useSpring, animated } from "react-spring";

const AnimatedSpin = ({children}) => {
const style= useSpring({
    opacity:1, 
    position:"absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
transform: "rotate(0)",
    from : {
        opacity: 0,
        transform:   "rotate(-180deg)",
    },config: {
        tension: 80, 
        friction: 10,
    },
});
return (<animated.div style={style}> {children}
    </animated.div> )

}

export default AnimatedSpin