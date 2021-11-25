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
    community: ''
  },
  quiz: []
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState
  }
  //Variables
  aStorage = [];

  //Character Functions
  //Get the values
  getValues = () => {
    let formValue = {
      name: document.getElementById('name').value,
      gender: document.getElementById('gender').value,
      age: document.getElementById('age').value,
      height: document.getElementById('height').value,
      weight: document.getElementById('weight').value,
      hobby: document.getElementById('hobby').value,
      occupation: document.getElementById('occupation').value,
      community: document.getElementById('community').value,
    }
    this.setValues(formValue)
  }

  //Send the values
  setValues = (data) => {
    let arrayResults = [];
    for (let i = 0; i < Object.keys(data).length; i++) {
      arrayResults.push(Object.values(data).includes(''));
    }
    if (arrayResults.includes(true)) {
      alert('ok')
    } else {
      this.setState(
        Object.assign(
          this.state.user, {
          name: data.name,
          gender: data.gender,
          age: data.age,
          height: data.height,
          weight: data.weight,
          hobby: data.hobby,
          occupation: data.occupation,
          community: data.community,
        }))
      this.onRouteChange('quiz')
    }

  }

  //Quiz Functions
  //Getting the answers from the quiz
  answerCheck = () => {
    let a = document.querySelectorAll('#check');
    let b = document.querySelectorAll('#choice');
    for (let i = 0; i < a.length; i++) {
      if (a[i].checked === true) {
        this.aStorage.push(b[i].innerHTML);
      }
    }
    console.log(this.aStorage)
  }

  //Sending the questions to the quiz array on this.state
  addAnswerValue = (res) => {
    this.setState({
        quiz: this.state.quiz = this.state.quiz.concat(res)
    });
  }

  //Results Functions
  //Add the values from the character form to the Results page
  getFieldsValue = () => {
    document.getElementById('rName').innerHTML = this.state.user.name;
    document.getElementById('rGender').innerHTML = this.state.user.gender;
    document.getElementById('rAge').innerHTML = this.state.user.age;
    document.getElementById('rHeight').innerHTML = this.state.user.height + ' m';
    document.getElementById('rWeight').innerHTML = this.state.user.weight + ' kg';
    document.getElementById('rHobby').innerHTML = this.state.user.hobby;
    document.getElementById('rOccupation').innerHTML = this.state.user.occupation;
    document.getElementById('rCommunity').innerHTML = this.state.user.community;
  }

  //Route Functions
  onRouteChange = (route) => {
    if (route === 'homepage') {
      this.setState(initialState)
    } else if (route === 'mainpage') {
      this.setState({ done: true })
    } else if (route === 'results') {
      this.addAnswerValue(this.aStorage);
      console.log(this.state.quiz)
    } else if (route === 'quiz') {
      console.log(this.state.user);
    }
    this.setState({ route: route });
  }

  render() {
    const { route, done, showResults } = this.state;

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
              ? <Quiz answerCheck={this.answerCheck} onRouteChange={this.onRouteChange} />
              : (route === 'results'
                ? <Results showResults={showResults} getFieldsValue={this.getFieldsValue} onRouteChange={this.onRouteChange} />
                : (route === 'mainpage'
                  ? <Mainpage onRouteChange={this.onRouteChange} />
                  : (route === 'editProfile'
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
