import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './screens/Homepage';

function App() {
  return (
    <Switch>
      <Route path='/' exact component={Homepage} />
      {/* <Route path='/home' component={Homepage} /> */}
      <Route path='**' component={Homepage} />
    </Switch>
  );
}

export default App;
