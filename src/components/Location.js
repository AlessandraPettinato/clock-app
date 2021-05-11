export default function Location({ geolocation }) {
	return (
		<div>
			<p>
				In: {geolocation.city}, {geolocation.country_code}
			</p>
		</div>
	);
}
