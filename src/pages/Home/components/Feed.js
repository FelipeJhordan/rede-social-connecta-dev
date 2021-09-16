import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import PostCard from '../../../components/PostCard'

const useStyles = makeStyles((theme) => {
    
})

const posts =  [
    {
        id: 1,
        title:
            'COMO MELHORAR SEU CODIGO JAVASCRIPT (ESLINT + PRETTIER + EDITORCONFIG) | Dicas e Truques #02',
        slug: 'como-melhorar-seu-codigo-javascript',
        date: "April 7, 2020",
        author: {
            id: 1,
            name: 'Lucas Nhimi',
            username: "lucashiumi",
            avatar: '/images/avatars/avatar_1.jpeg',
        },
        hashtags: ['eslint', 'prettier', 'editorconfig', 'vscode'],
        image: '/images/posts/post1.png',
        description: 'Fala pessoal! qual é o framework favorito de vcs?'
    },
    {
        id: 2,
        title: 'Como viver a vida',
        slug: 'como-migrar-para-react-hooks',
        date: "April 1, 2020",
        author: {
            id: 1,
            name: 'Felipe Jhordan',
            username: 'felipejhordan',
            avatar: '/images/avatars/avatar_1.jpeg',
        },
        hashtags: ['reactjs', 'javascript'],
        image: '/images/posts/post2.png',
        description: 'Fala pessoal! React Native > Flutter !! '
    },
]


function Feed() {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            {
                posts.map((post) => {
                    return (
                        <PostCard key={post.id} post={post}/>
                    )
                })
            }
        </div>
    )
}

export default Feed