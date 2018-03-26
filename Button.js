import { Component } from 'preact';

export default class Button extends Component {
  render ({label, ...props}) {
    return <button {...props}> { label } </button>
  }
}

