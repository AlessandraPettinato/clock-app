import { useState, useEffect } from "react";
import { BiRefresh } from "react-icons/bi";
import { animated } from "react-spring";

import "./Quote.css";

export default function Quote({ moveUp }) {
	const [quote, setQuote] = useState([]);

	const getQuote = () =>
		fetch("https://api.quotable.io/random")
			.then((res) => res.json())
			.then((quote) => setQuote(quote));

	useEffect(getQuote, []);

	return (
		<animated.div className="quote-container" style={moveUp}>
			<p className="quote-content">"{quote.content}"</p>
			<p className="quote-author">{quote.author}</p>
			<div className="refresh-container">
				<BiRefresh onClick={getQuote} />
			</div>
		</animated.div>
	);
}
