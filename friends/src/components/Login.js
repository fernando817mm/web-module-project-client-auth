import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createTheme({
    palette: {
      primary: {
        main: "#90EE90",
      },
      secondary: {
        main: "#FF7F50",
      },
    },
  });

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "100%",
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

const FormContainer = styled.div`
  background-color: none;
`;

const Div = styled.div`
    height: 95vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -5vh;
`

const initialState = {
    username: '',
    password: ''
}

const Login = (props) => {
    const [ formValue, setFormValue ] = useState(initialState);
    const classes = useStyles();

    const handleChange = (e) => {
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/login', formValue)
            .then(res => {
                localStorage.setItem('token', res.data.payload);
                props.history.push('/friends');
            })
            .catch(err => {
                alert(err);
                props.history.push('/');
            })
            .finally(() => {
                setFormValue(initialState);
            })
    }

    return (
        <Div>
            <ThemeProvider theme={theme}>
                <FormContainer>
                    <Container
                        component="main"
                        maxWidth="xs"
                        style={{
                            backgroundColor: "white",
                            paddingTop: ".1rem",
                            paddingBottom: "3%",
                            paddingLeft: "3%",
                            paddingRight: "3%",
                            borderRadius: "3%",
                        }}
                    >
                        <CssBaseline />
                        <div className={classes.paper}>
                            <LockOpenIcon fontSize="large" color="secondary" />
                            <Typography component="h1" variant="h5">
                            Login
                            </Typography>
                            <form className={classes.form} onSubmit={handleSubmit}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                <TextField
                                    name="username"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    onChange={handleChange}
                                    id="username"
                                    label="Username"
                                    autoFocus
                                    value={formValue.name}
                                />
                                </Grid>
                                <Grid item xs={12}>
                                <TextField
                                    name="password"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="password"
                                    type="password"
                                    label="Password"
                                    onChange={handleChange}
                                    value={formValue.password}
                                />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Sign In
                            </Button>
                            </form>
                        </div>
                    </Container>
                </FormContainer>
            </ThemeProvider>
        </Div>
    )
}

export default Login;