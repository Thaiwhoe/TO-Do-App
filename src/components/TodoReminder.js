import React, { Component } from 'react';
//import TimePicker from 'react-time-picker';
import DatePicker from '../react-date-picker';

export default class TodoReminder extends Component {
    render() {
        return (
            <div class="md-form mx-5 my-5">
                <DatePicker />
          </div>
        )
    }
}
