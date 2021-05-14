import Clock from "./components/Clock";
import Quote from "./components/Quote";
import Location from "./components/Location";
import More from "./components/More.js";

import "./App.css";

import { useState, useEffect } from "react";

function App() {
	const [time, setTime] = useState([]);
	const [geolocation, setGeolocation] = useState([]);

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

	return (
		<div className="main">
			<Quote />
			<Clock geolocation={geolocation} />
			<Location geoLocation={geolocation} time={time} />
			<More time={time} />
		</div>
	);
}

export default App;
