import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

const Text = ({ text, ...props }) => {

    const useStyles = makeStyles(theme => ({
        text: {
            padding: 25,
            backgroundColor: '#FF5722',
            borderRadius: 10,
            margin: 10,
            width: 300,
        }
    }));

    const styles = useStyles();

    return (
        <p className={styles.text}>{text}</p>
    );

}

export default Text;