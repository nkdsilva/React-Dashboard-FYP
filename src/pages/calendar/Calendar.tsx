import React, { useState } from 'react';
import axios from 'axios';
import './calendar.scss';

function PowerData() {
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [power, setPower] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };

  const handleShowResults = () => {
    setLoading(true);
    // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint to fetch power data based on the selected date.
    axios
      .get(`http://34.16.149.49:4000/backend/power?date=${selectedDate}`)
      .then((response) => {
        setPower(response.data.power); // Assuming the response contains a 'power' field.
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching power data:', error);
        setLoading(false);
      });
  };
  

  return (
    <div>
      <h1>Power Data</h1>
      <hr></hr>
      <h3>Daily Power Consumption</h3>
      <label>
        Select Date:
        <input className="inputDate"
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
        />
      </label>
      <button onClick={handleShowResults} disabled={loading}>
        Show Results
      </button>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
            <div>
            <label>Power (kw):</label>
            <input
              type="text"
              value={power}
              readOnly // Make the input read-only to prevent user editing
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default PowerData;


