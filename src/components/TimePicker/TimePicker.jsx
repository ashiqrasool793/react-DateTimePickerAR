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

    timeSelection = (idx, val) => {
        console.log(val)
        this.props.getTime(val)
        this.setState({
            timeSelected: idx
        })
    }
    render() {
        return (
            <div className="timeContainer">
                {this.props.timeList.map((d, idx) => {
                    return (
                        <div onClick={() => this.timeSelection(idx, d.name)} className="timeList" key={idx}>
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
