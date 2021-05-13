import "./Location.css";

export default function Location({ geoLocation }) {
	return (
		<div className="location-container">
			<p className="location">
				In {geoLocation.city}, {geoLocation.country_code}
			</p>
		</div>
	);
}
