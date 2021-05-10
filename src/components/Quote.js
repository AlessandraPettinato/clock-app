export default function Quote({ quote }) {
	return (
		<div>
			<p>{quote.content}</p>
			<p>{quote.author}</p>
		</div>
	);
}
