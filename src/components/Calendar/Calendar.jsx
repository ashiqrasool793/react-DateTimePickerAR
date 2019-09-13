import React, { Component }from 'react';
import {
    MuiPickersUtilsProvider,
    DatePicker,
  } from '@material-ui/pickers';
import DateFnsUtils from "@date-io/date-fns"; // import
import red from "@material-ui/core/colors/red";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";

const materialTheme = createMuiTheme({
    overrides: {
      MuiPickersDay: {
        daySelected: {
          backgroundColor: red["500"],
        },
        current: {
          color: red["500"],
        },
      },
      MuiPickersCalendarHeader: {
        iconButton: {
          color: red["500"]
        }
      },
      MuiPickersStaticWrapper: {
        staticWrapperRoot:{
          display: 'inline-block'
        }
      }
    }
  });
class Calendar extends Component {
   constructor(props) {
     super(props)

     this.state = {
       date: new Date()
     }
   }

   changeDate = () => {
     this.setState({date: new Date()})
   }
    render() { 
        return (
            <ThemeProvider theme={materialTheme}>

            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <DatePicker
                disableToolbar
                variant="static"
                format="dd/mm/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Date picker inline"
                value={this.state.date}
                onChange={this.changeDate}
                //views={["date", "month", "year"]}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </MuiPickersUtilsProvider>
            
          </ThemeProvider>
          );
    }
}
 
export default Calendar;