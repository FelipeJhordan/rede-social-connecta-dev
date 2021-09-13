import React from 'react'
import { Button, Toolbar, AppBar, SvgIcon, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Bell } from 'react-feather'
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
    },
    button: {
        marginRight: 10
    },
    bell: {
        marginRight: 10
    }
})

function Header() {
    const classes = useStyles()
    return (
        <AppBar color="inherit" className={classes.appBar}>
            <Toolbar>
                <img src="/images/logo.png" alt="logo" className={classes.img}/>
                <div className={classes.grow}></div>
                <div className={classes.userSection}>
                    <Button variant="contained" color="primary" className={classes.button}>
                        NovoPost
                    </Button>
                    <SvgIcon className={classes.bell}>
                        <Bell></Bell>
                    </SvgIcon>
                    <Avatar alt="Felipe Jhordan" src="/" />
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