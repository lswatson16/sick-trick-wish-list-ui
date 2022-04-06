import { Component } from 'react';
import './App.css';
import apiCalls from '../../apiCalls';

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
  }

  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
      </div>
    );
  }
}

export default App;