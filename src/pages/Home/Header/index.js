import React from 'react'
import { Button, Toolbar, AppBar, Box} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles'

import WritePost from './WritePost';
import Notifications from './Notifications';
import Account from './Account';

const useStyles = makeStyles({
    appBar: {
        boxShadow: 'none',
    },
    img: {
        maxHeight: 55,
    },
    grow: {
        flexGrow: 1
    },
    userSection: {
        display: 'flex',
        alignItems: 'center'
    }
})

function Header() {
    const classes = useStyles()
    return (
        <AppBar color="inherit" className={classes.appBar}>
            <Toolbar>
                <img src="/images/logo.png" alt="logo" className={classes.img} />
                <div className={classes.grow}></div>
                <div className={classes.userSection}>
                    <WritePost />
                    <Box ml={2}> 
                        <Notifications />
                    </Box>
                    <Box ml={2}>
                        <Account />
                    </Box>
                </div>
                {/* <div>
                    <a href="/">Conecta Dev</a>
                </div>
                <div>
                    <Button color="primary" variant="contained">Novo Post</Button>
                    <span>img1</span>
                    <span>img2</span>
                </div> */}
            </Toolbar>
        </AppBar>
    )
}

export default Header