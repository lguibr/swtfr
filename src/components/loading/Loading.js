import React, { Component } from "react";
import "./Loading.css"

export class Loading extends Component {
	render() {
		return (
			<div className="fade">
				<section className="star-wars">
					<div className="crawl">
						<div className="title">
							<p>Episode XLII</p>
							<h1>The Front Revenge</h1>
						</div>

						<p>
							A long long time ago in a galaxy far far
							away a developer has been challenged to make a front-end but
							first he needs to wait for a API response
							...
							<br />
							<br />
							<br />
							To confirm the status of the api go to
							http://swapi.co/ may the force be with you.
						</p>
					</div>
				</section>
			</div>
		);
	}
}

export default Loading;
