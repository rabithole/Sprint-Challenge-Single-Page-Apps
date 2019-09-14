import React from "react";
// import { NavLink } from 'react-router-dom';
import TabNav from './TabNav';

export default function Header() {
  return (
    <header className="ui centered">
        <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
        <TabNav />
    </header>
  );
}