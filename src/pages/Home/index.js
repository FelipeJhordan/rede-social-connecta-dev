import React from 'react'

import { makeStyles } from '@material-ui/styles'

import { Route, Routes } from 'react-router';

import Header from './Header'
import Feed from '../Feed';
import NewPost from '../Post/New';
import NotFound from '../../pages/NotFound'
const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh'
    },
    main: {
        height: 'calc(100vh - 65px)',
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
                <div className={classes.toolbar} />
                <main className={classes.main}>
                  <Routes>
                      <Route path="/" element={<Feed/>}/>
                      <Route path="/feed" element={<Feed/>}/>
                      <Route path="/post/new" element={<NewPost />}/>
                      <Route path="*" element={<NotFound />} />
                  </Routes>
                </main>
            </div>
        </>
    )
}

export default Home