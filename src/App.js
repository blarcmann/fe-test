import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './screens/Homepage';
import Results from './screens/Results';

function App() {
  return (
    <Switch>
      <Route path='/' exact component={Homepage} />
      <Route path='/results' component={Results} />
      <Route path='**' component={Homepage} />
    </Switch>
  );
}

export default App;
