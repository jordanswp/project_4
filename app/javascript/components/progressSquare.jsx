import React from 'react'
import axios from 'axios';
import ReactDOM from 'react-dom';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

class ProgressSquare extends React.Component {

    constructor() {
        super()

        this.state = {
        };
    }


  render() {
    const habitsArray = this.props.habits;

    // const habitsDuration = habitsArray[0].duration

    const percentage = 66;


    return (
            <div className="progress-container">
                <CircularProgressbar value={percentage} text={`${percentage}%`} />
            </div>
    );
  }
}

export default ProgressSquare;