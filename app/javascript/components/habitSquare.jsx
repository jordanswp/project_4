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
    }


  render() {

        const sortedHabits = this.props.habits.sort((a, b)=>{
            if(a.id > b.id)return 1;
             else return -1;
        });

        const habits = sortedHabits.map((habit,index)=>{
            return (
                    <React.Fragment key = {index}>

                        <div value={index} >

                                {habit.title} - {habit.durationLeft} days <button value={index} onClick={ (e)=>{ this.reduceDuration(e) } } className="doneButton btn btn-primary" >Done</button>
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