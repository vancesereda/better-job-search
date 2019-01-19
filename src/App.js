import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/Home'
import Typography from 'typography'
import judahTheme from 'typography-theme-judah'
import githubTheme from 'typography-theme-github'
import kirkhamTheme from 'typography-theme-kirkham'
import { Segment, Grid, Divider, Button } from 'semantic-ui-react';
import Navbar from './components/UI/Navbar'

githubTheme.baseFontSize = '16px';
const typography = new Typography(githubTheme);

// const typography = new Typography();

// Output CSS as string.
typography.toString()

// Or insert styles directly into the <head> (works well for client-only
// JS web apps.
typography.injectStyles()




class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route path="/" exact component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
