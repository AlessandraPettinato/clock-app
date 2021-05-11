import { useState, useEffect } from "react";
import { BiRefresh } from "react-icons/bi";
import "./Quote.css";

export default function Quote() {
	const [quote, setQuote] = useState([]);

	const getQuote = () =>
		fetch("https://api.quotable.io/random")
			.then((res) => res.json())
			.then((quote) => setQuote(quote));

	useEffect(getQuote, []);

	return (
		<div className="quote-container">
			<div className="shuffle-icon">
				<BiRefresh onClick={getQuote} />
			</div>
			<p className="quote-content">"{quote.content}"</p>
			<p className="quote-author">{quote.author}</p>
		</div>
	);
}
