import React from 'react'
import axios from 'axios';

class HabitSquare extends React.Component {

    constructor() {
        super()

        this.state = {
        };
    }

    reduceDuration(e){
        this.props.reduceDuration(e)
        // console.log(e)
    }

  render() {

        const habits = this.props.habits.map((habit,index)=>{
            return (
                    <React.Fragment key = {index}>

                        <div value={index} >
                                {habit.title} - {habit.duration} days <button value={index} onClick={ (e)=>{ this.reduceDuration(e) } } className="doneButton btn btn-primary" >Done</button>
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