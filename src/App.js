import React from "react";
// import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';
import WelcomePage from './components/WelcomePage';
import { Route } from 'react-router-dom';

export default function App() {
  return (
    <main>
      <Header />
      <Route exact path='/' component={WelcomePage} />
      <Route exact path='/CharacterList' component={CharacterList} />
    </main>
  );
}
