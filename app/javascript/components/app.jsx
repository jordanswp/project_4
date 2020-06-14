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

    updateOneHabit = (index) =>{
        let habit = this.state.habits[index];
        this.setState({ habit : habit })
        console.log("helooooooo" + habit)
    }


    // updateHabit(){


    // }

    reduceDuration = (e) =>{

        // console.log(e.target.value)
        let habits = this.state.habits;
        let target = e.target.value;

        habits[target].duration = habits[target].duration - 1;
        // console.log(this.state.habit)

    const payload = {
      title: habits[target].title,
      duration: habits[target].duration,
      completed: habits[target].completed,
      category_id:habits[target].category_id,
      user_id: habits[target].user_id
    };

        console.log(habits[target])
        const url = "/habits/" + habits[target].id + ".json";

          axios.put(url, payload)

            .then((response) => {
              const data = response.data;

              this.setState({ habit: data,
                              habits: habits
                         });
            }).catch((error)=>{
              console.log(error);
            })
    }


  render() {
    return (
        <body>
            <div className="container">
                <div className="row">
                    <div className=" col-sm-8">
                        <HabitSquare habits={this.state.habits} duration={this.state.duration} habit={this.state.habit} reduceDuration={this.reduceDuration} />
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