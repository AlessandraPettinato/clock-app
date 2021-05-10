export default function TimeDetails({ time }) {
	return (
		<div>
			<p>Current timezone: {time.timezone}</p>
			<p>Day of the year: {time.day_of_year}</p>
			<p>Day of the week: {time.day_of_week}</p>
			<p>Week number: {time.week_number}</p>
		</div>
	);
}
