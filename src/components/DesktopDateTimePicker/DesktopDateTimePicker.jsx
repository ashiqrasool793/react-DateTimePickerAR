import './App.css';
import TimePicker from '../TimePicker/TimePicker';
import Calendar from '../Calendar/Calendar';
import Button from '@material-ui/core/Button';
import React from 'react';

const DesktopDateTimePicker = (props) => {
    return (
        <div className="Cal-wrapper">
            <div className="Cal-container">
                <div className="Cal-header">Select Date & Time</div>
                <div className="Cal-desktopWrapper">
                    <Calendar getDate={props.getDate}></Calendar>
                    <TimePicker getTime={props.getTime} timeList={props.timeList}></TimePicker>
                </div>
                <div className="Cal-ctaWrapper">
                <Button onClick={props.onCancel} style={{margin: '10px', width: '100px', color:'red', backgroundColor:'white'}} variant="contained" >
                    Cancel
                </Button>
                <Button onClick={props.onClick} style={{ width: '100px', backgroundColor:'red'}} variant="contained" color="secondary" >
                    Book
                </Button>
                </div>
            </div>
        </div>
    );
}

export default DesktopDateTimePicker;