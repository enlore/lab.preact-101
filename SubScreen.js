import { Component } from 'preact';

export default class SubScreen extends Component {
  render ({ msg }) {
    return <div class="sub-screen">
      <h1> Sub Screen </h1>
      <p> A sub screen, embedded? </p>
    </div>
  }
}
