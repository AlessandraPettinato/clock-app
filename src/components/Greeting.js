import "./Greeting.css";
import { FiSun } from "react-icons/fi";

export default function Greeting({ time }) {
	return (
		<div className="greeting">
			<FiSun className="sun" />
			<p className="morning">Good Morning!</p>
		</div>
	);
}
