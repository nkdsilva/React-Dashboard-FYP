import { Component } from 'react';
import axios from 'axios';

class Time extends Component {
  sendPostRequest = () => {
    const url = 'http://34.16.149.49:4000/backend/power'; // Replace with your API endpoint
    const headers = {
      'Content-Type': 'application/json', // Adjust the content type as needed
    };
    const data = {
      start_time: "2023-09-02T13:00:00.000Z",
      end_time: "2023-09-02T13:45:00.000Z",
      sensor:"\"sensor_3\"",
    }; // Replace with your POST data

    axios
      .post(url, data, { headers })
      .then(response => {
        console.log('Response data:', response.data);
      })
      .catch(error => {
        console.error('Error:', error);
        console.log('Response status:', error.response.status);
      });
  };

  render() {
    return (
      <div>
        <button onClick={this.sendPostRequest}>Send POST Request</button>
      </div>
    );
  }
}

export default Time;
