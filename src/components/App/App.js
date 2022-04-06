import { Component } from 'react';
import './App.css';
import apiCalls from '../../apiCalls';
import Tricks from '../Tricks/Tricks';

class App extends Component {
  constructor() {
    super()
    this.state = {
      tricks: []
    }
  }

  componentDidMount() {
    apiCalls.fetchTricks()
      .then(data => {
        console.log(data)
        this.setState( { tricks: data })
      })
      .catch(error => {
        console.log('err in App', error)
        return error
      })
  }

  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        <Tricks tricks={this.state.tricks} />
      </div>
    );
  }
}

export default App;