import React, { Component } from 'react';

class Header extends Component{

	render(){

		
		return (
			<div>
				<ul style={menuStyle}>
					<li><a href="/">Skillset</a></li>
					<li><a href="/">Experiences</a></li>
					<li><a href="/">School</a></li>
					<li><a href="/">About Me</a></li>
				</ul> 
			</div>
		);
	}
}

export default Header;