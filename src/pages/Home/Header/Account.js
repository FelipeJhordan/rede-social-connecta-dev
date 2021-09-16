import React, { useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Avatar, Menu, MenuItem } from '@material-ui/core'
import { useNavigate } from 'react-router-dom'

import { signOut } from '../../../actions/accountActions'

function Account() {
    const account = useSelector((state) => state.account)
    const [isOpen, setOpen] = useState(false)
    const ref = useRef()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const isAuthenticated = !!account.user

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleSignOut = () => {
        handleClose()
        dispatch(signOut())
        navigate('/')
    }

    return (
        <>
            <Avatar alt="Felipe Jhordan" 
                src={account.user && account.user.avatar} 
                onClick={handleOpen}
                ref={ref}
            />
            {
                isAuthenticated 
                    ? <Menu
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                        anchorEl={ref.current}
                        open={isOpen}
                        onClose={handleClose}
                        getContentAnchorEl={null}
                    >
                        <MenuItem>Perfil</MenuItem>
                        <MenuItem>Meus Favoritos</MenuItem>
                        <MenuItem>Meus Posts</MenuItem>
                        <MenuItem>Minhas conexões</MenuItem>
                        <MenuItem onClick={handleSignOut}>Sair</MenuItem>
                    </Menu>
                    :
                    <Menu
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                        anchorEl={ref.current}
                        open={isOpen}
                        onClose={handleClose}
                        getContentAnchorEl={null}
                    >
                        <MenuItem>Registrar</MenuItem>
                        <MenuItem>Entrar</MenuItem>
                    </Menu>
            }
        </>
    )
}

export default Account