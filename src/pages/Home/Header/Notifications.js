import React, { useRef, useState, useEffect } from 'react'
import { 
    makeStyles,
    SvgIcon, 
    IconButton, 
    Popover, 
    Typography, 
    Box,
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Avatar } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import {
    Bell as BellIcon,
    Star as StarIcon,
    MessageCircle as MessageIcon,
    Heart as HeartIcon,
    Users as ConnectionIcon,
} from 'react-feather';

import { getNotifications } from '../../../actions/notificationsActions'

const iconsMap = {
    reviews: StarIcon,
    new_comment: MessageIcon,
    like: HeartIcon,
    connection: ConnectionIcon
}

const useStyles = makeStyles((theme) => ({
    icon: {
        background: theme.palette.secondary.main,
    }
}))


function Notifications() {
    const account = useSelector((state) => state.account)
    const notifications = useSelector((state) => state.notifications.notifications)
    const isAuthenticated = !!account.user
    const [isOpen, setOpen] = useState(false)
    const ref = useRef(null)
    const classes = useStyles()
    const dispatch = useDispatch()
   
    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = ( ) =>  {
        setOpen(false)
    }

    useEffect(() => {
        dispatch(getNotifications())
    }, [dispatch])


    return (
       isAuthenticated && (
            <>
                <IconButton ref={ref} onClick={handleOpen}>
                    <SvgIcon>
                        <BellIcon />
                    </SvgIcon>
                </IconButton>
                <Popover 
                    anchorEl={ref.current}
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                }}
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
                    open={isOpen}
                    onClose={handleClose}
                >
                    <Box p={2}>
                        <Typography variant="h6" color="textPrimary">
                            Notificações
                        </Typography>
                    </Box>
                    <List>
                        {
                            notifications.map((notification) => {
                                const Icon = iconsMap[notification.type]
                                return (
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar className={classes.icon}>
                                                <SvgIcon>
                                                    <Icon />
                                                </SvgIcon>
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={notification.title}
                                            primaryTypographyProps={
                                                {
                                                    variant: 'subtitle2',
                                                    color: 'textPrimary'
                                                }
                                            }
                                            secondary={notification.description} />
                                    </ListItem>
                                )
                            })
                        }
                    </List>
                </Popover>
            </>
       )
    )
}

export default Notifications