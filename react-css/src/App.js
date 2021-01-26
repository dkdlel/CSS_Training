import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

import Flex from './components/Flex/Flex';
import Float from './components/Float/Float';
import Main from './components/Main/Main';
import Layout from './components/Layout/Layout';
import Position from './components/Position/Position';
import FlexBox from './components/FlexBox/FlexBox';
import Display from './components/Display/Display';

import { Paths } from './paths';

import './App.scss';

const App = () => {
  const history = useHistory();
  return (
    <Switch>
      <Route exact path={Paths.index} component={Main} />
      <Route path={Paths.flex} component={Flex} />
      <Route path={Paths.flexBox} component={FlexBox} />
      <Route path={Paths.float} component={Float} />
      <Route path={Paths.position} component={Position} />
      <Route path={Paths.layout} component={Layout} />
      <Route path={Paths.display} component={Display} />
      <Route render={() => history.push(Paths.index)} />
    </Switch>
  );
};

export default App;