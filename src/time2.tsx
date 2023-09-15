import axios from 'axios';
import { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface State {
    startTime: Date;
    endTime: Date;
    sensor: string;
    responseText: string;
}  

class Time extends Component<{}, State>  {
  constructor(props:{}) {
    super(props);
    this.state = {
      startTime: new Date(), // Initialize with the current date and time
      endTime: new Date(),   // Initialize with the current date and time
      sensor: "sensor_3",
      responseText: "",      // To store the response text
    };
  }

  // Function to handle the start time change
  handleStartTimeChange = (date:Date) => {
    this.setState({ startTime: date });
  };

  // Function to handle the end time change
  handleEndTimeChange = (date:Date) => {
    this.setState({ endTime: date });
  };

  // Function to send the POST request
  sendPostRequest = () => {
    const url = 'http://34.16.149.49:4000/backend/power';
    const headers = {
      'Content-Type': 'application/json',
    };
    const data = {
      start_time: this.state.startTime.toISOString(), // Convert to ISO string
      end_time: this.state.endTime.toISOString(),     // Convert to ISO string
      sensor: this.state.sensor,
    };

    axios
      .post(url, data, { headers })
      .then(response => {
        console.log('Response data:', response.data);
        this.setState({ responseText: JSON.stringify(response.data) });
      })
      .catch(error => {
        console.error('Error:', error);
        console.log('Response status:', error.response ? error.response.status : 'N/A');
        this.setState({ responseText: 'Error occurred' });
      });
  };

  render() {
    return (
      <div>
        <div>
          <label>Start Time:</label>
          <DatePicker
            selected={this.state.startTime}
            onChange={this.handleStartTimeChange}
            showTimeSelect
            dateFormat="yyyy-MM-dd HH:mm:ss"
          />
        </div>
        <div>
          <label>End Time:</label>
          <DatePicker
            selected={this.state.endTime}
            onChange={this.handleEndTimeChange}
            showTimeSelect
            dateFormat="yyyy-MM-dd HH:mm:ss"
          />
        </div>
        <div>
          <button onClick={this.sendPostRequest}>Send POST Request</button>
        </div>
        <div>
          <label>Power (kW/h):</label>
          <textarea
            readOnly
            rows={2}
            cols={50}
            value={this.state.responseText}
          />
        </div>
      </div>
    );
  }
}

export default Time;
