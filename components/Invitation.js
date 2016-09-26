import React from 'react';

export default class Invitation extends React.Component{
	render(){
		return(
			<div>
				<h1>You've been invited!</h1>
				<h2>{this.props.children}</h2>
			</div>
		)
	}
}
