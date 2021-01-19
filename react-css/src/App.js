import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

import Flex from './Components/Flex/Flex';
import Float from './Components/Float/Float';
import Main from './Components/Main/Main';

import { Paths } from './Paths';

import './App.scss';

const App = () => {
  const history = useHistory();
  return (
    <Switch>
      <Route exact path={Paths.index} component={Main} />
      <Route path={Paths.flex} component={Flex} />
      <Route path={Paths.float} component={Float} />
      <Route render={() => history.push(Paths.index)} />
    </Switch>
  );
};

export default App;