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
		transform: !more ? "translateY(0px)" : "translateY(-50px)",
	});

	return (
		<animated.div className="time-details" style={moveDetails}>
			<p>Current timezone: {timezone}</p>
			<p>Day of the year: {day_of_year}</p>
			<p>Day of the week: {day_of_week}</p>
			<p>Week number: {week_number}</p>
		</animated.div>
	);
}
