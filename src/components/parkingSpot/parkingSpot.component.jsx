import React from 'react';

const ParkingSpot = ({ name, occupied, ...props }) => {

    const parkingSpot = {
        padding: 25,
        backgroundColor: occupied ? '#D32F2F' : '#2E7D32',
        borderRadius: 10,
        margin: 10,
        minWidth: '450px',
        '-webkit-transition': 'background-color 1s ease',
        '-moz-transition': 'background-color 1s ease',
        '-ms-transition': 'background-color 1s ease',
        '-o-transition': 'background-color 1s ease',
        transition: 'background-color 1s ease',
    };

    return (
        <p style={parkingSpot}>{name} ist {occupied ? 'besetzt' : 'frei'}</p>
    );

}

export default ParkingSpot;