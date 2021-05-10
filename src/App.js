import Time from "./components/Time";
import Location from "./components/Location";
import Quote from "./components/Quote";
import TimeDetails from "./components/TimeDetails";

import { useState, useEffect } from "react";

function App() {
	const [time, setTime] = useState([]);
	const [geolocation, setGeolocation] = useState([]);
	// const [quote, setQuote] = useState([]);

	const [more, setMore] = useState(false);

	const getTime = () =>
		fetch("http://worldtimeapi.org/api/ip")
			.then((res) => res.json())
			.then((data) => setTime(data));

	const getLocation = () =>
		fetch("https://freegeoip.app/json/")
			.then((res) => res.json())
			.then((place) => setGeolocation(place));

	// const getQuote = () =>
	// 	fetch("https://api.quotable.io/random")
	// 		.then((res) => res.json())
	// 		.then((quote) => setQuote(quote));

	useEffect(getTime, []);

	useEffect(getLocation, []);

	// useEffect(getQuote, []);

	const handleClickMore = () => {
		setMore(!more);
	};

	return (
		<div className="App">
			<h1>Hello from App</h1>
			<Quote />
			<Time time={time} />
			<Location geolocation={geolocation} />
			<button onClick={handleClickMore}>{!more ? "More" : "Less"}</button>
			{more && <TimeDetails time={time} />}
		</div>
	);
}

export default App;
