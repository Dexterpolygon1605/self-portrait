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
  //Variables
  aStorage = [];

  //Character Functions
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

  setValues = (data) => {
    if (data.name !== '') {
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
    } else {
      alert('ok')
    }

  }

  //Quiz Functions
  answerCheck = () => {
    let a = document.querySelectorAll('#check');
    let b = document.querySelectorAll('#choice');

    if (this.aStorage.length < 3) {
      for (let i = 0; i < a.length; i++) {
        if (a[i].checked === true) {
          this.aStorage.push(b[i].innerHTML);
        }
      }
    } else {
      this.onRouteChange('results');
    }
    console.log(this.aStorage)
  }

  addAnswerValue = (res) => {
    this.setState({
      user:
      {
        quiz: this.state.user.quiz = this.state.user.quiz.concat(res)
      }
    });
    console.log(this.state.user.quiz);
  }

  //Results Functions
  getFieldsValue = () => {
    let a = document.getElementById('rname');
    console.log(a);
  }

  //Route Functions
  onRouteChange = (route) => {
    if (route === 'homepage') {
      this.setState(initialState)
    } else if (route === 'mainpage') {
      this.setState({ done: true })
    } else if (route === 'results') {
      this.addAnswerValue(this.aStorage);
      console.log(this.state.user.quiz)
    } else if (route === 'quiz') {
      console.log(this.state.user);
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
              ? <Quiz answerCheck={this.answerCheck} onRouteChange={this.onRouteChange} />
              : (route === 'results'
                ? <Results getFieldsValue={this.getFieldsValue} onRouteChange={this.onRouteChange} />
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
