import { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";

import Clock from "./components/Clock";
import Quote from "./components/Quote";
import Location from "./components/Location";
import TimeDetails from "./components/TimeDetails";

import "./App.css";
import "./components/More.css";

export default function App() {
	const [time, setTime] = useState([]);
	const [geolocation, setGeolocation] = useState([]);

	const [more, setMore] = useState(false);

	const getTime = () =>
		fetch("http://worldtimeapi.org/api/ip")
			.then((res) => res.json())
			.then((data) => setTime(data));

	const getLocation = () =>
		fetch("https://freegeoip.app/json/")
			.then((res) => res.json())
			.then((place) => setGeolocation(place));

	useEffect(getTime, [time]);

	useEffect(getLocation, []);

	const handleClickMore = () => {
		setMore(!more);
	};

	const moveUp = useSpring({
		transform: !more ? "translateY(0px)" : "translateY(-200px)",
	});

	const moveClock = useSpring({
		transform: !more ? "translateY(500px)" : "translateY(250px)",
	});

	const moveLocation = useSpring({
		transform: !more ? "translateY(450px)" : "translateY(250px)",
	});

	return (
		<div className="main">
			<Quote more={more} moveUp={moveUp} />
			<animated.div style={moveClock}>
				<Clock geolocation={geolocation} {...time} />
			</animated.div>
			<animated.div style={moveLocation}>
				<Location geoLocation={geolocation} time={time} />
			</animated.div>
			<animated.div className="more-button" style={moveUp}>
				{!more ? "More" : "Less"}
				<img
					className="arrow"
					src="https://res.cloudinary.com/dg5lakmem/image/upload/v1620664041/Clock%20App/desktop/icon-arrow-up_ubkxpe.svg"
					alt="show-more"
					onClick={handleClickMore}
				/>
			</animated.div>
			{more && <TimeDetails {...time} more={more} />}
		</div>
	);
}
