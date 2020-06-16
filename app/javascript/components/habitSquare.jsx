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

                        <div value={index} style={{ paddingTop: '15px' }} >

                                <span className="all-habits">
                                    {habit.title} - {habit.durationLeft} days
                                    <button value={index} onClick={ (e)=>{ this.reduceDuration(e) } } className="doneButton btn btn-primary" >Done</button>
                                </span>
                        </div>

                    </React.Fragment>);
            });

    return (
            <div>

                <div className="habit-container">
                    <h4 className="dashboard-title">My Habits</h4>

                    <div className="habits-list col">
                        {habits}
                    </div>

                </div>

            </div>
    );
  }
}

export default HabitSquare;