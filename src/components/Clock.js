import { RiSunFill } from "react-icons/ri";
import { animated } from "react-spring";
// import Spinner from "react-bootstrap/Spinner";

import "./Clock.css";

export default function Clock({ moveUp, datetime }) {
	// const extractTime = datetime.substr(11, 5);

	// if (!datetime.length)
	// 	return (
	// 		<Spinner animation="border" role="status">
	// 			<span className="sr-only">Loading...</span>
	// 		</Spinner>
	// 	);

	return (
		<animated.div className="clock" style={moveUp}>
			<div className="greeting">
				<RiSunFill className="sun" />

				{/* <p className="morning">
					{extractTime > 0 ? "good evening" : "good morning"}
				</p> */}
			</div>

			<div className="time-container">
				<p className="time">{datetime}</p>
				{/* <p className="time">{extractTime}</p> */}
			</div>
		</animated.div>
	);
}
