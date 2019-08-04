import React, { Component } from "react";
import "./Loading.css"

export class Loading extends Component {
	render() {
		return (
			<div className="fade">
				<section className="star-wars">
					<div className="crawl">
						<div className="title">
							<p>Episode XLII - Teste Final </p>
							<h1>The Front Revenge</h1>
						</div>

						<p>
							A long long time ago in a galaxy far far
							away a developer has challenge to build a
							great gun against the bad UI.
						</p>

						<p>
							Pursued by the Empire’s sinister agents,
							Princess Leia races home aboard her
							starship, custodian of the stolen plans that
							can save her people and restore freedom to
							the galaxy….
						</p>
					</div>
				</section>
			</div>
		);
	}
}

export default Loading;
