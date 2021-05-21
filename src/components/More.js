// import { useState } from "react";
// import { useSpring, animated } from "react-spring";

// import TimeDetails from "./TimeDetails";

// import "./More.css";

// export default function More({ time }) {
// 	const [more, setMore] = useState(false);

// 	const handleClickMore = () => {
// 		setMore(!more);
// 	};

// 	const moveUp = useSpring({
// 		transform: !more ? "translateY(0px)" : "translateY(-200px)",
// 	});

// 	return (
// 		<>
// 			<animated.div className="more-button" style={moveUp}>
// 				{!more ? "More" : "Less"}
// 				<img
// 					className="arrow"
// 					src="https://res.cloudinary.com/dg5lakmem/image/upload/v1620664041/Clock%20App/desktop/icon-arrow-up_ubkxpe.svg"
// 					alt="show-more"
// 					onClick={handleClickMore}
// 				/>
// 			</animated.div>
// 			{more && <TimeDetails {...time} more={more} />}
// 		</>
// 	);
// }
