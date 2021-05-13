import Clock from "./components/Clock";
import Quote from "./components/Quote";
import Location from "./components/Location";
import TimeDetails from "./components/TimeDetails";

import "./App.css";

import { useState, useEffect } from "react";

function App() {
	const [time, setTime] = useState([]);
	const [geolocation, setGeolocation] = useState([]);

	const [more, setMore] = useState(false);

	const getTime = () =>
		fetch("http://worldtimeapi.org/api/ip.text")
			.then((res) => res.json())
			.then((data) => setTime(data));

	const getLocation = () =>
		fetch("https://freegeoip.app/json/")
			.then((res) => res.json())
			.then((place) => setGeolocation(place));

	useEffect(getTime, []);

	useEffect(getLocation, []);

	const handleClickMore = () => {
		setMore(!more);
	};

	return (
		<div className="main">
			<Quote />
			<Clock geolocation={geolocation} />
			<div className="more-button">
				{!more ? "More" : "Less"}
				<img
					className="arrow"
					src="https://res.cloudinary.com/dg5lakmem/image/upload/v1620664041/Clock%20App/desktop/icon-arrow-up_ubkxpe.svg"
					alt="show-more"
					onClick={handleClickMore}
				/>
			</div>
			<Location geoLocation={geolocation} />
			{more && <TimeDetails time={time} />}
		</div>
	);
}

export default App;
