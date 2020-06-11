import React from 'react'
import axios from 'axios';
import HabitSquare from './habitSquare';
import ProgressSquare from './progressSquare';

class App extends React.Component {

    constructor() {
        super()

        this.state = {
            habits: []
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

  render() {
    return (
        <body>
            <div className="container">
                <div className="row">
                    <div className=" col-sm-8">
                        <HabitSquare habits={this.state.habits}/>
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