import React, { Component } from 'react';
import './App.css';
import About from './Components/About/About';
import Quiz from './Components/Quiz/Quiz';
import Character from './Components/Character/Character';
import Back from './Components/Back/Back';
import Results from './Components/Results/Results';
import Mainpage from './Components/Mainpage/Mainpage';
import Profileupdate from './Components/Profileupdate/Profileupdate';
import Support from './Components/Support/Support';

const initialState = {
  route: 'homepage',
  done: false,
  user: {
    name: '',
    gender: '',
    age: '',
    height: '',
    weight: '',
    hobby: '',
    occupation: '',
    community: '',
    quiz: []
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState
  }

  getValues = () => {
    this.setState({user: { name: document.getElementById('name').value }})
    this.setState({user: { gender: document.getElementById('gender').value }})
    this.setState({user: { age: document.getElementById('age').value }})
    this.setState({user: { height: document.getElementById('height').value }})
    this.setState({user: { weight: document.getElementById('weight').value }})
    this.setState({user: { hobby: document.getElementById('hobby').value }})
    this.setState({user: { occupation: document.getElementById('occupation').value }})
    this.setState({user: { community: document.getElementById('community').value }})
}


  onRouteChange = (route) => {
    if (route === 'homepage') {
      this.setState(initialState)
    } else if (route === 'mainpage') {
      this.setState({ done: true })
    }
    this.setState({ route: route });
  }

  render() {
    const { route, done } = this.state;

    return (
      <div className="App">
        {route !== 'homepage'
          ? <Back done={done} onRouteChange={this.onRouteChange} />
          : ''
        }

        {route === 'homepage'
          ? <About onRouteChange={this.onRouteChange} />
          : (route === 'character'
            ? <Character getValues={this.getValues} onRouteChange={this.onRouteChange} />
            : (route === 'quiz'
              ? <Quiz onRouteChange={this.onRouteChange} />
              :(route === 'results'
              ? <Results onRouteChange={this.onRouteChange} />
              :(route === 'mainpage'
              ? <Mainpage onRouteChange={this.onRouteChange} />
              :(route === 'editProfile'
              ? <Profileupdate onRouteChange={this.onRouteChange} />
              : <Support onRouteChange={this.onRouteChange} />
              )
               
              )
               
              ) 
            )
          )
        }
      </div>
    );
  }
}

export default App;
