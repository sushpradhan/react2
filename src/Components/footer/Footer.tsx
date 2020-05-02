import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    footer: {
        flexGrow: 1,
        textAlign: "center",
        height: 20,
        padding: 20,
        bottom: 30,
        marginTop: 10,
        width: "100%",
        background: "blue"
    }
}));
const Footer = (props: any) => {
    const classes = useStyles();
    return (
        <div data-testid="footer">
            <h3 className={classes.footer}>Copyright &copy; {props.brand} 2020</h3>
        </div>
    );
}

export default Footer;





