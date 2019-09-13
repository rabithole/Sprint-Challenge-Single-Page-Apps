import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// TODO: Add missing menu/tabs/nav below

// Review Semantic UI Component options for nav-like UI:
// https://react.semantic-ui.com/collections/menu/
// https://react.semantic-ui.com/modules/tab/
// https://react.semantic-ui.com/elements/button/
// https://react.semantic-ui.com/collections/breadcrumb/

export default function TabNav() {
		return (
			<nav>
		      	<NavLink to='/'>
		      		<p>Home Page</p>
		      	</NavLink>
		     	<NavLink to='/'>
		      		<p>Characters</p>
		      	</NavLink>
		      	<NavLink to='/'>
		      		<p>Locations</p>
		      	</NavLink>
		      	<NavLink to='/'>
		      		<p>Episodes</p>
		      	</NavLink>
      		</nav>
		)
};
