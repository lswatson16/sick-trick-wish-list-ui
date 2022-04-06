import React, { Component } from 'react';
import './Form.css'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      stance: '',
      name: '',
      obstacle: '',
      tutorial: '',
      id: null
    }
  }

  render() {
    return(
      <form className='tricks-form'>
        <input
          type='text'
          placeholder='Name'
          title='name'
          value={this.state.name}
        />
        <input
          type='text'
          placeholder='Stance'
          title='stance'
          value={this.state.stance}
        />
        <input
          type='text'
          placeholder='Obstacle'
          title='obstacle'
          value={this.state.obstacle}
        />
        <input
          type='text'
          placeholder='Tutorial'
          title='tutorial'
          value={this.state.tutorial}
        />
      </form>
    )
  }
}

export default Form;