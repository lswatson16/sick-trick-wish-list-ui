import React, { Component } from 'react';
import './Form.css'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stance: '',
      name: '',
      obstacle: '',
      tutorial: '',
      id: null
    }
  }

  handleChange = (event) => {
    // console.log(event.target)
    this.setState({ [event.target.title]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newTrick = { id: Date.now(), ...this.state }
    console.log(newTrick)
    // this.props.addTrick(newTrick);
  }

  render() {
    return(
      <form 
        className='tricks-form'
        onSubmit={this.handleSubmit}
      >
        <input
          type='text'
          placeholder='Name'
          title='name'
          value={this.state.name}
          onChange={(event) => this.handleChange(event)}
        />
  
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
        
        <input
          type='text'
          placeholder='Tutorial'
          title='tutorial'
          value={this.state.tutorial}
          onChange={(event) => this.handleChange(event)}
        />
        
        <input type='submit' value='SEND IT' />
      </form>
    )
  }
}

export default Form;