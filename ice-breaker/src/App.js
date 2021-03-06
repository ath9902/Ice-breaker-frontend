import React, { Component } from 'react';
import './App.css'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      question: [],
      isLoaded: false,
    }
  }

  componentDidMount() {

    fetch('http://localhost:5000/random').then(res => res.json()).then(json => {
      this.setState({
        isLoaded: true,
        questions: json,
      })
    });


  }

  nextQuestion() {
    fetch('http://localhost:5000/random').then(res => res.json()).then(json => {
      this.setState({
        isLoaded: true,
        questions: json,
      })
    });
  }


  render() {
    
    var { isLoaded, questions} = this.state;

    console.log(questions)

    if (!isLoaded) {
      return (
        <div class="container">
          <h1> Start API to get random questions</h1>
          </div>
        );
    }

    else {
      return (
        <div className="App">
          
          <div class="container">
            <h1>{questions.message}</h1>
            <button class="button button4" onClick={() => this.nextQuestion()}> Next Question</button>
          </div>
        </div>

        
      );
    } 
  }
}

const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

const numBalls = 50;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()}em`;
  ball.style.height = ball.style.width;
  
  balls.push(ball);
  document.body.append(ball);
}

// Keyframes
balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12
  };

  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` }
    ],
    {
      duration: (Math.random() + 1) * 2000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
});

export default App;