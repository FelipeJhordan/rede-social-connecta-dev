import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import { ListItem, ListItemText, ListSubheader } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        width: 275,
        marginRight: theme.spacing(2)
    },
    button: {
        width: "100%"
    }
}))

const tags = [
    { id: 1, name: "reactjs"},
    { id: 2, name: "flutter"},
    { id: 3, name: "react native"},
    { id: 4, name: "kotlin"},
    { id: 5, name: "openAI"},
    { id: 6, name: "azure"},
]

function NavBar() {
    const classes = useStyles()
    return (
        <>
            <Paper className={classes.root}>
                <Button variant="outlined" color="secondary" className={classes.button}>Registrar Gratis</Button>
                <ListSubheader>{`Tags em alta`}</ListSubheader>
                {
                    tags.map((tag) => {
                        return (
                        <ListItem dense button key={`tag-${tag.id}`}>
                            <ListItemText primary={`#${tag.name}`} />
                        </ListItem>
                        )
                    })
                }
                <ListItem button>
                    Exibir mais Tags
                </ListItem>
            </Paper>
        </>
    )
}

export default NavBar