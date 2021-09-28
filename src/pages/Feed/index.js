import React, { useState, useCallback, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Container } from '@material-ui/core'

import PostCard from '../../components/PostCard'
import NavBar from './NavBar'

import axios from '../../utils/axios'


const useStyles = makeStyles((theme) => ({
    root: {},
    navbar: {
       [theme.breakpoints.down('sm')]: {
           display: 'none'
       }
    }
}))



function Feed() {
    const classes = useStyles()
    const [posts, setPosts] = useState([])

    const getPosts = useCallback(async () => {
        const feed = await axios.get('/api/feed')
        setPosts(feed.data.posts)
    }, [setPosts])

    useEffect(() => {
        getPosts()
    }, [getPosts])

    return (
          <Container maxWidth="lg">
                <Box display="flex">
                    <Box className={classes.navbar}>
                        <NavBar />
                    </Box>
                    <div className={classes.root}>
                     {posts.map((post) => 
                           (
                                <PostCard key={post?.id} post={post} />
                            ))}
                    </div>
                </Box>
            </Container>
    )
}

export default Feed