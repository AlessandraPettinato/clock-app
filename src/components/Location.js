export default function Location({ geolocation }) {
	return (
		<div>
			<p>You are currently in: {geolocation.city}</p>
		</div>
	);
}
