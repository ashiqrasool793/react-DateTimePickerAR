import './App.css';
import TimePicker from '../TimePicker/TimePicker';
import Calendar from '../Calendar/Calendar';
import Button from '@material-ui/core/Button';
import React from 'react';

const DesktopDateTimePicker = () => {
    return (
        <div className="Cal-wrapper">
            <div className="Cal-container">
                <div className="Cal-header">Select Date & Time</div>
                <div className="Cal-desktopWrapper">
                    <Calendar></Calendar>
                    <TimePicker></TimePicker>
                </div>
                <div className="Cal-ctaWrapper">
                <Button style={{margin: '10px', width: '100px', backgroundColor:'white'}} variant="contained" >
                    Cancel
                </Button>
                <Button style={{ width: '100px', backgroundColor:'red'}} variant="contained" color="secondary" >
                    Book
                </Button>
                </div>
            </div>
        </div>
    );
}

export default DesktopDateTimePicker;