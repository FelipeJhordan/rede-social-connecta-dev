import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import http from '../../utils/axios';
import PostCard from '../../components/PostCard';
import { Typography } from '@material-ui/core';

function Posts() {
    const [posts, setPosts] = useState([]);
    const params = useParams();

    useEffect(() => {
        async function fetchPosts() {
            const response = await http.get(`/api/posts/user/${params.username}`);
            setPosts(response.data.posts);
        }
        fetchPosts();
    });

    return (
        <>
            {posts.length !== 0 ? posts.map((post) => (
                <PostCard key={post.id} post={post} />
            )): <Typography>Não existe post </Typography>}
        </>
    );
}

export default Posts;