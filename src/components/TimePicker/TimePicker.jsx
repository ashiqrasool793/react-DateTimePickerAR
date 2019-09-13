import React from 'react';
import './TimePicker.css';
import tick from '../../assets/images/tickIcon.png';


class TimePicker extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            timeSelected: null
        }
    }

    timeSelection = (idx) => {
        this.setState({
            timeSelected: idx
        })
    }
    render() {
        const data = [
            { "name": "10:00" },
            { "name": "11:00" },
            { "name": "12:00" },
            { "name": "13:00" },
            { "name": "14:00" },
            { "name": "15:00" },
            { "name": "16:00" },
            { "name": "17:00" },
            { "name": "18:00" },
            { "name": "19:00" },
            { "name": "20:00" },
            { "name": "21:00" },
            { "name": "22:00" },
            { "name": "23:00" },
            { "name": "00:00" },
            { "name": "11:00" },
            { "name": "11:00" },
            { "name": "11:00" },
            { "name": "11:00" },
        ];

        return (
            <div className="timeContainer">
                {data.map(function (d, idx) {
                    return (
                        <div onClick={() => this.timeSelection(idx)} className="timeList" key={idx}>
                            <div className="timeSelect">
                                <div>{d.name}</div>
                                {this.state.timeSelected===idx ?
                                    <img className="timeSelected" src={tick} />
                                    :
                                    null
                                }
                            </div>
                    </div>
                    )
                }, this)}
            </div>
        );
    }
}
export default TimePicker;
