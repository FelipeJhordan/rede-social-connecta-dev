import React from 'react'
// import "./style.css"

import Header from './components/Header'
import Feed from './components/Feed';
import NavBar from './components/NavBar';

import { makeStyles } from '@material-ui/styles'
import { Box, Container } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh'
    },
    main: {
        height: '100vh',
        padding: "24px"
    },
    toolbar: {
        minHeight: '64px'
    }
})

function Home() {
    const classes = useStyles();
    return (
        <>
            <div className={classes.root}>
                <Header />
                <div className={classes.toolbar}></div>
                <main className={classes.main}>
                    <Container maxWidth="lg">
                        <Box display="flex">
                            <NavBar />
                            <Feed />
                        </Box>
                    </Container>
                </main>
            </div>
        </>
    )
}

export default Home