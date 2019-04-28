import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/Home/index'
import Contact from '../pages/Contact/index'
import Starship from '../pages/Starship/ship'
import People from '../pages/People/People'
import Film from '../pages/Film/Film'
import Comment from '../pages/Comment/Comment'


export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/Contact" component={Contact} />
    <Route exact path="/People" component={People} />
    <Route exact path="/Starship" component={Starship} />
    <Route exact path="/Film" component={Film} />
    <Route exact path="/Comment" component={Comment} />
  </Switch>
)