import './style';
import { h, render, Component } from 'preact';

import Button from './Button'
import Screen from './Screen'
import Screen2 from './Screen2'
import CheckApi from './CheckApi'

import { BrowserRouter, Link, Route } from 'react-router-dom'
import { Provider, connect } from 'unistore/full/preact'

import store from './store'
import net from './net'
import actions from './actions'

const connector = connect('user', actions)

store.subscribe(state => console.info(state))

console.info('boostrap call')
net.get('http://localhost:4000/api/census')
  .then(({ data }) => ({ inventory: data.inventory }))
  .then(state => store.setState(state))

class _Header extends Component {
  render ({ user, addChitsToUser }) {
    return (
      <div>
        <nav>
          <Link to="/"> Home </Link>
          <Link to="/api-status"> API Status Check </Link>
        </nav>

        <p> { user.username } </p>
      </div>
    )
  }
}

const Header = connector(_Header)

class App extends Component {
  render() {
    return (
      <div class="app-shell">
          <BrowserRouter>
            <div class="app-inner">
              <Header></Header>


              <Route exact path="/" component={Screen} />
              <Route path="/screen-alt/subscreen" component={Screen2} />
              <Route path="/api-status" component={CheckApi} />
            </div>
          </BrowserRouter>
      </div>
    );
  }
}

render(
    <Provider store={store}>
      <App />
    </Provider>
  , document.body
)
