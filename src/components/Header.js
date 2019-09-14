import React from "react";
import { NavLink } from 'react-router-dom';
import TabNav from './TabNav';
import WelcomePage from './WelcomePage';
// import CharacterList from './CharacterList';

export default function Header() {
  return (
    <header className="ui centered">
        <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
        <TabNav />
        <WelcomePage />
        {/*<CharacterList />*/}
    </header>
  );
}

// Home Page, Characters, Locations, Episodes for links
