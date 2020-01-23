import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

const ParkingSpot = ({ name, occupied, ...props }) => {

    const useStyles = makeStyles(theme => ({
        parkingSpot: {
            padding: 25,
            backgroundColor: occupied? '#D32F2F': '#2E7D32',
            borderRadius: 10,
            margin: 10,
            width: '80%',
            '-webkit-transition': 'background-color 1s ease',
            '-moz-transition':    'background-color 1s ease',
            '-ms-transition':     'background-color 1s ease',
            '-o-transition':      'background-color 1s ease',
            transition:         'background-color 1s ease',
        }
    }));

    const styles = useStyles();

    return (
        <p className={styles.parkingSpot}>{name} ist {occupied ? 'besetzt' : 'frei'}</p>
    );

}

export default ParkingSpot;