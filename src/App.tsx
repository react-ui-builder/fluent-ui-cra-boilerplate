import React from 'react';
import { loadTheme } from '@fluentui/react';
import { themeMap } from './usr/themeMap';
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';
import logo from './logo.svg';
import './App.css';

initializeIcons();

const theme = themeMap['light'];

loadTheme(theme);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
