import { Button } from '@material-ui/core'
import React from 'react'
import { useNavigate } from 'react-router-dom'


import { useSelector } from 'react-redux'

function WritePost() {

    const navigate = useNavigate()
    const account = useSelector(state => state.account)    
    const isAuthenticated = !!account.user

    const handleClick = () => {
        if( isAuthenticated ) {
            navigate('/post/new')
        } else {
            navigate('/sign-in')
        }
    }

    return (
        <Button variant="contained" color="primary" onClick={handleClick}>
            NovoPost
        </Button>
    )
}

export default WritePost