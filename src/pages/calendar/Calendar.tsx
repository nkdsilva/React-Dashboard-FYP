import axios from 'axios';
import { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './calendar.scss'

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
    console.log('Start Time changed:', date);
    console.log("Hello");
  };

  // Function to handle the end time change
  handleEndTimeChange = (date:Date) => {
    this.setState({ endTime: date });
  };

  // Function to send the POST request
  sendPostRequest = () => {
    console.log('start_time:');
    const url = 'http://34.16.149.49:4000/backend/power';
    const headers = {
      'Content-Type': 'application/json',
    };
    const data = {
      start_time: this.state.startTime.toISOString(), // Convert to ISO string
      end_time: this.state.endTime.toISOString(),     // Convert to ISO string
      sensor: this.state.sensor,
    };

    
    console.log('end_time:', data.end_time);

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
        <h1>Daily Power Consumption</h1>
        <div className='input'>
          <label>Start Time:</label>
          <DatePicker
          
            selected={this.state.startTime}
            onChange={this.handleStartTimeChange}
            showTimeSelect
            dateFormat="yyyy-MM-dd HH:mm:ss"
          />
        </div>
        <div className='input'>
          <label>End Time :</label>
          <DatePicker
            selected={this.state.endTime}
            onChange={this.handleEndTimeChange}
            showTimeSelect
            dateFormat="yyyy-MM-dd HH:mm:ss"
          />
        </div>
        <div>
          <button onClick={this.sendPostRequest}>Search</button>
        </div>
        <div className="output">
          <label>Power (kW/h):</label>
          <textarea
            readOnly
            rows={1}
            cols={30}>
          </textarea>
        </div>
      </div>
    );
  }
}

export default Time;


