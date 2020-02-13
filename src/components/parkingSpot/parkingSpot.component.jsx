import React from 'react';

const ParkingSpot = ({ name, occupied, ...props }) => {

    const parkingSpot = {
        padding: 10,
        backgroundColor: occupied ? '#D32F2F' : '#2E7D32',
        borderRadius: 10,
        margin: 10,
        width: 300,
        fontSize: 20,
        WebkitTransition: 'background-color 1s ease',
        MozTransition: 'background-color 1s ease',
        msTransition: 'background-color 1s ease',
        OTransition: 'background-color 1s ease',
        transition: 'background-color 1s ease',
    };

    return (
        <p style={parkingSpot}>{name} ist {occupied ? 'besetzt' : 'frei'}</p>
    );

}

export default ParkingSpot;