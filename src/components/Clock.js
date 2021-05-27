import { RiSunFill } from "react-icons/ri";

import "moment-timezone";

import "./Clock.css";

export default function Clock() {
	const today = new Date();
	const time = today.getHours() + ":" + today.getMinutes();

	return (
		<div className="clock">
			<div className="greeting">
				<p className="morning">
					{today.getHours < 12 ? "Good morning" : "Good evening"}
				</p>
				<RiSunFill className="sun" />
			</div>
			<div className="time-container">
				<p className="time">{time}</p>
			</div>
		</div>
	);
}
