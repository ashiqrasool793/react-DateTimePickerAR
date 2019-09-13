import React, { Component } from 'react';
import DesktopDateTimePicker from './DesktopDateTimePicker/DesktopDateTimePicker'

class SamplePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timeSelected: '',
            dateSelected: ''
        }
    }

    getSelectedTime = (selectedTime) => {
        this.setState({
            timeSelected: selectedTime
        });
    }

    getSelectedDate = (dateSelected) => {
        this.setState({
            dateSelected: dateSelected
        });
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
            <DesktopDateTimePicker
                getTime = {this.getSelectedTime}
                getDate = {this.getSelectedDate}
                timeList = {data}
            />
        )
    }
}

export default SamplePage;