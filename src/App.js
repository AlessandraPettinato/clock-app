import Time from "./components/Time";
import Location from "./components/Location";
import Quote from "./components/Quote";

import { useState, useEffect } from "react";

function App() {
	const [time, setTime] = useState([]);
	const [geolocation, setGeolocation] = useState([]);
	const [quote, setQuote] = useState([]);

	const getTime = () =>
		fetch("http://worldtimeapi.org/api/ip")
			.then((res) => res.json())
			.then((data) => setTime(data));

	const getLocation = () =>
		fetch("https://freegeoip.app/json/")
			.then((res) => res.json())
			.then((place) => setGeolocation(place));

	const getQuote = () =>
		fetch("https://api.quotable.io/random")
			.then((res) => res.json())
			.then((quote) => setQuote(quote));

	useEffect(getTime, []);

	useEffect(getLocation, []);

	useEffect(getQuote, []);

	return (
		<div className="App">
			<h1>Hello from App</h1>
			<Quote quote={quote} />
			<Time time={time} />
			<Location geolocation={geolocation} />
		</div>
	);
}

export default App;
