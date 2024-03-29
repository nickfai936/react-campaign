import React from "react";
import { useStyles } from "../styles/datePicker";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

const DatePicker = props => {
  const classes = useStyles();

  return (
    <div className={classes.datePicker}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          autoOk
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id={`kdp-${props.id}`}
          label={props.label}
          value={props.selectedDate || null}
          minDate={props.minDate}
          maxDate={props.maxDate}
          minDateMessage="End-date should not be before start-date"
          onChange={value => props.onChange({ id: props.id, value })}
        />
      </MuiPickersUtilsProvider>
    </div>
  );
};

export default DatePicker;
