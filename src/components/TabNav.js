import React, { Component } from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

// TODO: Add missing menu/tabs/nav below

// Review Semantic UI Component options for nav-like UI:
// https://react.semantic-ui.com/collections/menu/
// https://react.semantic-ui.com/modules/tab/
// https://react.semantic-ui.com/elements/button/
// https://react.semantic-ui.com/collections/breadcrumb/

export default class TabNav extends Component {
	state = {}

	handleItemClick = (e, { name }) => this.setState({ activeItem: name })

	render() {
		const { activeItem } = this.state 

		return (
			<Menu>
				
				<Menu.Item as={Link} to='/'
					name='Home Page'
					active={activeItem === 'Home Page'}
					onClick={this.handleItemClick}
				>Home Page
				</Menu.Item>
				
				<Menu.Item as={Link} to='/CharacterList'
					name='Characters'
					active={activeItem === 'Characters'}
					onClick={this.handleItemClick}
				>Characters
				</Menu.Item>

				<Menu.Item as={Link} to='/LocationsList'
					name='Locations'
					active={activeItem === 'Locations'}
					onClick={this.handleItemClick}
				>Locations
				</Menu.Item>

				<Menu.Item as={Link} to='/EpisodeList'
					name='Episodes'
					active={activeItem === 'Episodes'}
					onClick={this.handleItemClick}
				>Episodes
				</Menu.Item>
			</Menu>
		)
	}
};

// Home Page, Characters, Locations, Episodes for links
	