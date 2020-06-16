import React from 'react'
import axios from 'axios';
import HabitSquare from './habitSquare';
import ProgressSquare from './progressSquare';

class App extends React.Component {

    constructor() {
        super()

        this.state = {
            habits: [],
            habit:{},
            allDuration:'',
            allDurationLeft:''
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


                  let totalDuration = 0;
                  let totalDurationLeft = 0;

                  for(var i = 0; i < data.length; i++){
                      totalDuration += parseInt(data[i].duration)
                      totalDurationLeft += parseInt(data[i].durationLeft)
                  }

                  this.setState({ habits: data, allDuration : totalDuration, allDurationLeft : totalDurationLeft });

                }).catch((error)=>{
                  console.log(error);
                })
    }

    updateOneHabit = (index) =>{
        let habit = this.state.habits[index];
        this.setState({ habit : habit })
    }


    reduceDuration = (e) =>{

        let habits = this.state.habits;
        let target = e.target.value;

        habits[target].durationLeft = habits[target].durationLeft - 1;

        const payload = {
          title: habits[target].title,
          duration: habits[target].duration,
          durationLeft: habits[target].durationLeft,
          category_id:habits[target].category_id,
          user_id: habits[target].user_id
        };

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
                        <HabitSquare habits={this.state.habits} habit={this.state.habit} reduceDuration={this.reduceDuration} />
                    </div>

                    <div className=" col-sm-4">
                        <ProgressSquare habits={this.state.habits} allDuration={this.state.allDuration} allDurationLeft={this.state.allDurationLeft} />
                    </div>
                </div>
            </div>
        </body>
    );
  }
}

export default App;