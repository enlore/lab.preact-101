import { Component } from 'preact';
import SubScreen from './SubScreen'

export default class Screen extends Component {
  render ({ msg }) {
    return <div class="screen screen-2">
      <h1> Screen 2 </h1>
      { msg?
          <h2> { msg } </h2>
          : ''
      }
    </div>
  }
}
