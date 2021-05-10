import { useState } from "react";

import TimeDetails from "./TimeDetails";

export default function Time({ time }) {
	const [more, setMore] = useState(false);

	const handleClickMore = () => {
		setMore(!more);
	};

	return (
		<div>
			<p>Current time is: {time.datetime}</p>
			<>
				<button onClick={handleClickMore}>{!more ? "More" : "Less"}</button>
				{more && <TimeDetails time={time} />}
			</>
		</div>
	);
}
