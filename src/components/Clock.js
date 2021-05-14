import "./Clock.css";

import { Component } from "react";
import { RiSunFill } from "react-icons/ri";

class Clock extends Component {
	constructor(props) {
		super(props);
		//This declared the state of time at the very beginning
		this.state = {
			time: new Date().toLocaleTimeString([], {
				hour: "2-digit",
				minute: "2-digit",
			}),
		};
	}

	//This happens when the component mount and the setInterval function get called with a call back function updateClock()
	componentDidMount() {
		this.intervalID = setInterval(() => this.updateClock(), 1000);
	}

	//This section clears setInterval by calling intervalID so as to optimise memory
	componentWillUnmount() {
		clearInterval(this.intervalID);
	}

	//This function set the state of the time to a new time
	updateClock() {
		this.setState({
			time: new Date().toLocaleTimeString([], {
				hour: "2-digit",
				minute: "2-digit",
			}),
		});
	}
	render() {
		return (
			<div className="clock">
				<div className="greeting">
					<RiSunFill className="sun" />
					<p className="morning">
						{this.state.time.hour > 12 ? "Good evening" : "Good morning"}
					</p>
				</div>
				<div className="time-container">
					<p className="time"> {this.state.time} </p>
				</div>
			</div>
		);
	}
}
export default Clock;
