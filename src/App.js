import React from 'react';
import Navbar from './Components/Navbar/index';
import Home from './Components/Home/';
import Portfolio from './Components/Portfolio';
import GlobalStyle from './styles/global';
import Contact from './Components/Contact/';

const App = () => (
  <div>
    <GlobalStyle />
    <Navbar />
    <Home />
    <Portfolio />
    <Contact />
    <footer>
      <h3>&copy; Joao Pedro Prado</h3>
    </footer>
  </div>
);

export default App;
