import React from "react";
import { useSpring, animated } from "react-spring";

const ScaleIn = ({children}) => {
const style= useSpring({
    opacity:1, 
    position:"absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
transform: "scale(1)",
    from : {
        opacity: 0,
        transform: "scale(0)",
    },config: {
        tension: 200, 
        friction: 10,
    },
});
return (<animated.div style={style}> {children}
    </animated.div> )

}

export default ScaleIn