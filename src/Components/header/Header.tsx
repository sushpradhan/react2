import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import InfoIcon from '@material-ui/icons/Info';
import HomeIcon from '@material-ui/icons/Home';
import { Link as RouterLink } from 'react-router-dom';
//import ExitToAppIcon from '@material-ui/icons/ExitToApp';
// Router Code

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1
    }
}));
const Header = (props: any) => {
    const classes = useStyles();
    // const onLogout = () => {
    //     localStorage.removeItem('token');
    //     props.history.push('/Login');
    // }
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" data-testid="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title} data-testid="news">News</Typography>
                    <HomeIcon /><Button id="home" color="inherit" data-testid="home" component={RouterLink} to="/"   >Home</Button>
                    <Button id="readnow" color="inherit" data-testid="readNow" component={RouterLink} to="/ReadNow"   >ReadNow</Button>
                    <InfoIcon />
                    <Button color="inherit" data-testid="about" component={RouterLink} to="/About"   >About</Button>
                    <Button id="btnregister" color="inherit" data-testid="register" component={RouterLink} to="/Register"   >Register</Button>
                    <VpnKeyIcon /><Button color="inherit" data-testid="login" component={RouterLink} to="/Login" >Login</Button>
                    {/* <ExitToAppIcon /><Button color="inherit" data-testid="logout" onClick={onLogout}>Logout</Button> */}
                </Toolbar>
            </AppBar>
        </div>
    );
}
export default Header;