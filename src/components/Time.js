import "./Time.css";

export default function Time({ time }) {
	return (
		<div className="time-container">
			<time className="time" dateFormat="YYYY-MM">
				{time.datetime}
			</time>
		</div>
	);
}
