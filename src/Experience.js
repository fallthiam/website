import React, { Component } from 'react';
import logo from './logo.svg';

const data = {
	title: "machin",
	place: "coffe-shop",
	location: "moon",
	summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
};

class Experience extends Component{
	render(){
		return (
			<div>
				<div class="experience-picture">
					<img src={logo} className="App-logo" alt="logo" />
				</div>
				<div class="experience-desc">
					<div class="experience-title">
						{data.title};
					</div>
					<div class="experience-place">
						{data.place};
					</div>
					<div class="experience-location">
						{data.location};
					</div>
					<div class="experience-summary">
						{data.summary};
					</div>
				</div>
			</div>
		);
	}
}

export default Experience;