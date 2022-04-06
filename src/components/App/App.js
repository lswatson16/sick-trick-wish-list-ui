import { Component } from 'react';
import './App.css';
import apiCalls from '../../apiCalls';
import Tricks from '../Tricks/Tricks';
import Form from '../Form/Form';

class App extends Component {
  constructor() {
    super()
    this.state = {
      tricks: []
    }
  }

  addTrick = (newTrick) => {
    this.setState({ tricks: [...this.state.tricks, newTrick] })
  }

  componentDidMount() {
    apiCalls.fetchTricks()
      .then(data => {
        // console.log(data)
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
        <Form addTrick={this.addTrick} />
        <Tricks tricks={this.state.tricks} />
      </div>
    );
  }
}

export default App;