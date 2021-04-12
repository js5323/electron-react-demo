import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';
import Index from './views/Index';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Index} />
      </Switch>
    </Router>
  );
}
