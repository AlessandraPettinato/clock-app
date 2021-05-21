import Clock from "./components/Clock";
import Quote from "./components/Quote";
import Location from "./components/Location";
// import More from "./components/More.js";
import TimeDetails from "./components/TimeDetails";
// import Spinner from "react-bootstrap/Spinner";

import "./App.css";
import "./components/More.css";
// import "bootstrap/dist/css/bootstrap.min.css";

import { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";

function App() {
	const [time, setTime] = useState([]);
	const [geolocation, setGeolocation] = useState([]);

	const [more, setMore] = useState(false);

	const handleClickMore = () => {
		setMore(!more);
	};

	const moveUp = useSpring({
		transform: !more ? "translateY(0px)" : "translateY(-200px)",
	});

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

	return (
		<div className="main">
			<Quote more={more} moveUp={moveUp} />
			<Clock geolocation={geolocation} moveUp={moveUp} {...time} />
			<Location geoLocation={geolocation} time={time} moveUp={moveUp} />
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

export default App;
