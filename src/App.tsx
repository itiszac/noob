import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {About} from './components/About';
import {Home} from './components/Home';

/**
 * App
 * @return {JSX.Element}
 */
export function App(): JSX.Element {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </Switch>
    </>
  );
}
