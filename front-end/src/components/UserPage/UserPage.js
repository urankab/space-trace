import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        padding: 15,
        fontSize: 25
    },
    updateBtn: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function UserPage(props) {
    const classes = useStyles();
    const userData = props.userData[0]
    
    const [updateData, setUpdateData] = useState(false)

    const [userForm, setUserForm] = useState({
        email: '',
        password: '',
    });
    const [errorMsg, setErrorMsg] = useState({
        message: '',
        email: '',
        password: '',
    });

    const onClickUpdateProfile = (e) => {
        setUpdateData(true)
    }
    
    const handleUpdateProfile = (e) => {
        if (updateData == true) {
            return (
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            error={!!errorMsg.email}
                            helperText={errorMsg.email}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="text"
                            id="password"
                            autoComplete="current-password"
                            error={!!errorMsg.password}
                            helperText={errorMsg.password}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name="phone"
                            label="Phone"
                            type="text"
                            id="phone"
                            autoComplete="current-phone"
                            error={!!errorMsg.phone}
                            helperText={errorMsg.phone}
                        />
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.updateBtn}
                        onClick={onSave}
                    >
                    Save Profile
                    </Button>       
                </Grid>
            )
        }
        // const url = 'https://9ynldka4jk.execute-api.ca-central-1.amazonaws.com/dev/fetch-data';
        // let data = await getData(url, userForm.email, userForm.password)
        // console.log(userForm)
        // console.log(form)
    };

    const onSave = async (e) => {
        
    };

    const handleSignOut = async (e) => {
        
    };


    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Welcome, {userData.fullName}
        </Typography>
                <p>{errorMsg.message}</p>
                <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={handleSignOut}
                    >
                        Sign Out
                    </Button>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.updateBtn}
                        onClick={onClickUpdateProfile}
                    >
                    Update Profile
                    </Button>               
                {handleUpdateProfile()}
                    <Grid container justify="flex-end">
                    </Grid>
            </div>
            <Box mt={5} />
        </Container>
    );
}
