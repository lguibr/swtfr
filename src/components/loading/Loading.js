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
							away a developer...
						</p>
					</div>
				</section>
			</div>
		);
	}
}

export default Loading;
