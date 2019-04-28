import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/Home/index'
import Film from '../pages/Film/Film'
import People from '../pages/People/People'
import Starship from '../pages/Starship/ship'
import Contact from '../pages/Contact/index'
import Comment from '../pages/Comment/Comment'


export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/Film" component={Film} />
    <Route exact path="/People" component={People} />
    <Route exact path="/Starship" component={Starship} />
    <Route exact path="/Contact" component={Contact} />
    <Route exact path="/Comment" component={Comment} />
  </Switch>
)