import { gsap } from "gsap";
import { useEffect, useRef } from "react";



const TweenRedBigBox = () => {
		const boxRef = useRef();

		useEffect( () => {
				gsap.to( [ boxRef.current ], {
						scrollTrigger: {
								trigger: [ boxRef.current ],
								start  : "top 70%",
								end    : "bottom 15%",
								scrub  : true,
						},
						x            : "+=20vw",
						scale        : 1.4,
						background   : "#E73C67",
				} );
		} );

		return (
				<div
						ref = {boxRef}
						style = {{
								width       : "100px",
								height      : "100px",
								background  : "#2D2A55",
								borderRadius: "4px",
								margin      : "2em",
						}}
				/>
		);
};

export default TweenRedBigBox;
