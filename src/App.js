import React from 'react';
import { useState, useEffect } from 'react';
import ParkingSpot from './components/parkingSpot/parkingSpot.component';
import Text from './components/text/text.component';
import './App.css';

function App() {

  const [parkingData, setParkingData] = useState(null);

  useEffect(() => {
    pullParkingData();
    }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      pullParkingData();
    }, 3000);

    return () => clearInterval(interval);
  })

  const pullParkingData = () => {
    fetch('http://extranet.spline.ch/ParkingManager/ParkingService?oper=load')
    .then(res => res.json())
    .then(data => setParkingData(data.rows));
  }

    return (
      <div className="App">
        <header className="App-header">
          {parkingData ? 
          parkingData.map(spot => (
            <ParkingSpot key={spot.cell[0]}name={spot.cell[1]} occupied={spot.cell[2] === '1'}/>
          ))
          : <Text text={'Konnte keine Daten abrufen!'}></Text>}
        </header>
      </div>
    );
  }

export default App;
