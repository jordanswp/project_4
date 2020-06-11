import React from 'react'
import axios from 'axios';

class HabitSquare extends React.Component {

    constructor() {
        super()

        this.state = {
        };
    }


    reduceDuration(){
        this.props.reduceDuration()
    }

  render() {

        const habits = this.props.habits.map((habit,index)=>{
            return (
                    <React.Fragment key = {index}>

                        <div value={index} >
                                {habit.title} - {this.props.duration} days <button className="doneButton btn btn-primary">Done</button>
                        </div>

                    </React.Fragment>);
            });


    return (
            <div className="habit-container">
                {habits}
            </div>
    );
  }
}

export default HabitSquare;