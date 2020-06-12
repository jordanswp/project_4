import React from 'react'
import axios from 'axios';
import HabitSquare from './habitSquare';
import ProgressSquare from './progressSquare';

class App extends React.Component {

    constructor() {
        super()

        this.state = {
            habits: [],
            habit:{}
        };
    }

    componentDidMount(){
        this.getHabits();
    }

    getHabits(){
          const url = '/habits.json';
          axios.get(url)
            .then((response) => {
              const data = response.data;

              this.setState({ habits: data });
            }).catch((error)=>{
              console.log(error);
            })
    }

    getOneHabit = (index) =>{
        let habit = this.state.habits[index];
        this.setState({ habit : habit })
    }

    reduceDuration = (e) =>{
        // console.log(e.target.value)
        let habits = this.state.habits;
        console.log(habits[e.target.value])
        let habitDuration = habits[e.target.value].duration;
        let reduceDuration = parseInt(habitDuration) - 1;
        console.log("duration is " + reduceDuration)
    }


  render() {
    return (
        <body>
            <div className="container">
                <div className="row">
                    <div className=" col-sm-8">
                        <HabitSquare habits={this.state.habits} duration={this.state.duration} habit={this.state.habit} reduceDuration={this.reduceDuration} getOneHabit={this.getOneHabit} />
                    </div>

                    <div className=" col-sm-4">
                        <ProgressSquare />
                    </div>
                </div>
            </div>
        </body>
    );
  }
}

export default App;