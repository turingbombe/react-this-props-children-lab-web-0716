import React from 'react'


export default class ThemedDecorations extends React.Component{
	render(){

			const childClass = React.Children.map(this.props.children, child => {
					return (

						<p className={this.props.theme}>
						{child.props.children}
						</p> 
						);
				});
		return(
			<div>
				{childClass}
			</div>
			)
	}	
}