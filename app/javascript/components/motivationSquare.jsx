import React from 'react'
import axios from 'axios';

class MotivationSquare extends React.Component {

    constructor() {
        super()

        this.state = {
        };
    }



  render() {
    return (
            <div className="motivation-container">

                <div className="col">
                    <p className="quote">"Depending on what they are, our habits will either make us or break us. We become what we repeatedly do."</p> <br />
                    <p className="speaker">―Sean Covey</p>
                </div>
            </div>
    );
  }
}

export default MotivationSquare;