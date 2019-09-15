import React, { Component } from 'react';
import moment from 'moment';

class ARCalendar extends Component {
    constructor(props) {
        super(props);
        this.months = moment.months()
        this.weekdays = moment.weekdaysShort()
        this.state = {
            currentDate: new moment(),
            currentDateContext: new moment()
        }
    }

    getFirstDayOfMonth = () => {
        let firstDay = moment(this.state.currentDateContext).startOf('month').format('d')
        //Day of month 0..1..2..3..4..5..6

        return firstDay
    }

    renderDays = () => {
        let blankDays = []
        let daysOfMonth = []
        for(let i=0; i< this.getFirstDayOfMonth(); i++) {
            blankDays.push(<td> </td>)
        }

        let totalDays = this.state.currentDateContext.daysInMonth()

        for(let d=1; d<=totalDays; d++){
            daysOfMonth.push(<td>{d}</td>)
        }

        let totalSlots = [...blankDays, ...daysOfMonth]
        let rows = [] //rows in calendar
        let cells = [] //each row in calendar

        for(let i=0; i<totalSlots.length; i++) {
            if((i % 7) !== 0) {
                cells.push(totalSlots[i])
            }
            else {
                //let newRow = cells.slice()
                rows.push(cells)
                cells = []
                cells.push(totalSlots[i])
            }
            if(i===totalSlots.length-1) {
                //let newRow = cells.slice()
                rows.push(cells)
            }
        }


        let daysToDisplay = rows.map((d, i) => {
            return (
                <tr>{d}</tr>
            )
        })

        return daysToDisplay
    }


    render() {
        return (
            <div style={{position: 'absolute', top:'50%', left: '50%', marginTop: '-100px', marginLeft:'-150px'}}>
                <table style={{height: '50px', width: '300px'}}>        
                    <thead>
                        <tr>
                            <th colSpan="7" style={{padding:'10px'}}>
                            {this.state.currentDateContext.format("MMMM")}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        {this.weekdays.map((day, idx) => {
                            return (
                                <td>{day}</td>
                            )
                        })}
                    </tr>
                    {this.renderDays()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ARCalendar;