import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Page from '../pages/Page';

interface PageProps {
  title: string;
  icon: string;
  url: string;
}

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Page} />
    </Switch>
  );
};

export default Routes;
