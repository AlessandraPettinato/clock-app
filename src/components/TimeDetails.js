import { useSpring, animated } from "react-spring";

import "./TimeDetails.css";

export default function TimeDetails({
	timezone,
	day_of_year,
	day_of_week,
	week_number,
	more,
}) {
	const moveDetails = useSpring({
		transform: !more ? "translateY(0px)" : "translateY(-30px)",
	});

	return (
		<animated.div className="time-details" style={moveDetails}>
			<h4 className="caption">
				Current timezone <span className="detail">{timezone}</span>
			</h4>
			<h4 className="caption">
				Day of the year <span className="detail">{day_of_year}</span>
			</h4>
			<h4 className="caption">
				Day of the week <span className="detail">{day_of_week}</span>
			</h4>
			<h4 className="caption">
				Week number <span className="detail">{week_number}</span>
			</h4>
		</animated.div>
	);
}
