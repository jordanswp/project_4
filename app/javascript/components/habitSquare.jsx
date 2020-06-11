import React from 'react'
import axios from 'axios';

class HabitSquare extends React.Component {

    constructor() {
        super()

        this.state = {
        };
    }

  render() {

        const habits = this.props.habits.map((habit,index)=>{
            return (
                    <React.Fragment key = {index}>

                        <div value={index} >
                                {habit.title} - {habit.description}
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