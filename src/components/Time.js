import { useState } from "react";

export default function Time({ time }) {
	return (
		<div>
			<p>Current time is: {time.datetime}</p>
		</div>
	);
}
