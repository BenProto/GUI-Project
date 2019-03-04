// import preact
import { h, render, Component } from 'preact';
// import routing library and pages
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from '../homepage';
import HourlyForecastPage from '../hourlyforecastpage';

const Routes = () => (
  <main>
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/hourlyforecastpage' component={HourlyForecastPage}/>
    </Switch>
  </main>
)

export default Routes
