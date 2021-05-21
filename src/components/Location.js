import "./Location.css";

import { animated } from "react-spring";

export default function Location({ geoLocation, moveUp }) {
	return (
		<animated.div className="location-container" style={moveUp}>
			<p className="location">
				In {geoLocation.city}, {geoLocation.country_code}
			</p>
		</animated.div>
	);
}
