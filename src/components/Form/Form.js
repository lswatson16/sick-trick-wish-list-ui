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
        {/* <input
          type='text'
          placeholder='Stance'
          title='stance'
          value={this.state.stance}
        /> */}
        <label>Choose a stance
          <select name='stances'>
            <option value='regular'>Regular</option>
            <option value='switch'>Switch</option>
          </select>
        </label>

        <label>Choose an obstacle
          <select name='obstacles'>
            <option value='flatground'>Flatground</option>
            <option value='ledge'>Ledge</option>
            <option value='rail'>Rail</option>
            <option value='stairs'>Stairs</option>
            <option value='pool'>Pool</option>
          </select>
        </label>
        {/* <input
          type='text'
          placeholder='Obstacle'
          title='obstacle'
          value={this.state.obstacle}
        /> */}
        <input
          type='text'
          placeholder='Tutorial'
          title='tutorial'
          value={this.state.tutorial}
        />
        <button>SEND IT</button>
      </form>
    )
  }
}

export default Form;