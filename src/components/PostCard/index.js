import React from 'react'
import  makeStyles  from '@material-ui/core/styles/makeStyles'
import { Card, 
         CardHeader, 
         CardContent, 
         CardActions, 
         Typography, 
         Avatar,
         CardActionArea, 
         IconButton} from '@material-ui/core'
import FavoriteIcon from "@material-ui/icons/Favorite"
import BookmarkIcon from "@material-ui/icons/Bookmark"
import MessageIcon from "@material-ui/icons/Message"
const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: theme.spacing(2)
    },
    subheader: {
        display: "flex",
        alignItems: "center"
    },
    caption: {
        marginRight: theme.spacing(1)
    },
    message: {
        height: 'auto',
        marginBottom: theme.spacing(2),
        padding: "0 24px"
    },
    image: {
        height: 300,
        width: '100%',
        maxWidth: "100%"
    },
    content: {
        padding: 0
    },
    favorite: {
        marginLeft: "auto"
    }
}))

function PostCard({ post }) {
    const classes = useStyles()
    return (
        <Card classes={classes.root}>
            <CardHeader 
                avatar={<Avatar src={post.author.avatar}/>}
                title={<Typography variant="h6">{post.title}</Typography>}
                subheader={
                    <div className={classes.subheader}>
                        <Typography className={classes.caption} variant="caption">
                            {'Avaliado por'}
                        </Typography>
                        <Typography className={classes.caption} variant="subtitle2">
                            {post.author.name}
                        </Typography>
                        <Typography className={classes.caption} variant="caption">
                            {post.date}
                        </Typography>
                    </div>
                }
                >

            </CardHeader>
            <CardContent className={classes.content}>
                <Typography className={classes.message} variant="body1">
                    {post.hashtags.map((tag) => `#${tag} `)}
                </Typography>
                <CardActionArea>
                    <img src={post.image} className={classes.image}  alt={`${post.title}`}/>
                </CardActionArea>
            </CardContent>
            <CardActions disableSpacing>
                 <IconButton arial-label="like">
                     <FavoriteIcon />
                     <Typography
                     style={{cursor: 'pointer'}}
                     color="textSecondary"
                     variant="body2"/>
                     {'10'}
                </IconButton>
                 <IconButton arial-label="comment">
                     <MessageIcon />
                     <Typography
                     className={classes.reactions}
                     color="textSecondary"
                     variant="body2"/>
                     {'30'}
                </IconButton>
                 <IconButton arial-label="favorite" className={classes.favorite}>
                     <BookmarkIcon/>
                </IconButton>
            </CardActions>
        </Card> 
    )
}

export default PostCard