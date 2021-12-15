import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Projects from '../pages/Projects';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Error from '../pages/Erros404';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="*" component={Error} />
    </Switch>
  );
}
