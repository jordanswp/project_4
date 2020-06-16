import React from 'react'
import axios from 'axios';
import ReactDOM from 'react-dom';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

class ProgressSquare extends React.Component {

    constructor() {
        super()

        this.state = {
        };
    }



  render() {
    const allDuration = this.props.allDuration;
    const allDurationLeft = this.props.allDurationLeft;
    const done = allDuration - allDurationLeft;

    const percentage = parseInt( (done/allDuration) * 100 );

    console.log(percentage)


    return (
            <div className="progress-container">
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage}%`}
                  styles={buildStyles({ textSize: '12px', textColor: '#ec5144', pathColor: '#ec5144', trailColor: '#e6e6e6'  })}
                />
            </div>
    );
  }
}

export default ProgressSquare;