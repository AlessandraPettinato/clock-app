import Time from "./components/Time";
import Location from "./components/Location";
import Quote from "./components/Quote";
import TimeDetails from "./components/TimeDetails";
import Greeting from "./components/Greeting";

import "./App.css";

import { useState, useEffect } from "react";

function App() {
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

	useEffect(getTime, []);

	useEffect(getLocation, []);

	const handleClickMore = () => {
		setMore(!more);
	};

	return (
		<div className="main">
			<Quote />
			{/* <Time time={time} /> */}
			<Greeting time={time} />
			<Location geolocation={geolocation} />
			<div className="more-button">
				{!more ? "More" : "Less"}
				<img
					className="arrow"
					src="https://res.cloudinary.com/dg5lakmem/image/upload/v1620664041/Clock%20App/desktop/icon-arrow-up_ubkxpe.svg"
					alt="show-more"
					onClick={handleClickMore}
				/>
			</div>
			{more && <TimeDetails time={time} />}
		</div>
	);
}

export default App;
