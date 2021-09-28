import moment from 'moment'
import mock from '../utils/mock'

mock.onGet("/api/post/como-melhorar-seu-codigo-javascript").reply(200, {
    id: 1,
    title:
        'COMO MELHORAR SEU CODIGO JAVASCRIPT (ESLINT + PRETTIER + EDITORCONFIG) | Dicas e Truques #02',
    slug: 'como-melhorar-seu-codigo-javascript',
    date: moment().subtract(1, 'day').toDate().getTime(),
    author: {
        id: 1,
        name: 'Lucas Nhimi',
        avatar: '/images/avatars/avatar_1.jpeg',
    },
    markdownText: `
  _Compact style:_
  
  Term 1
    ~ Definition 1
  
  Term 2
    ~ Definition 2a
    ~ Definition 2b`,
    tags: ['eslint', 'prettier', 'editorconfig', 'vscode'],
    image: '/images/posts/post1.png',
    likes: 10,
    comments: 30,
});

mock.onGet("/api/feed").reply(200, {
    posts: [
        {
            id: 1,
            title:
                'COMO MELHORAR SEU CODIGO JAVASCRIPT (ESLINT + PRETTIER + EDITORCONFIG) | Dicas e Truques #02',
            slug: 'como-melhorar-seu-codigo-javascript',
            date: moment().subtract(1, 'day').toDate().getTime(),
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
            date: moment().subtract(3, 'day').toDate().getTime(),
            author: {
                id: 1,
                name: 'Felipe Jhordan',
                username: 'felipejhordan',
                avatar: '/images/avatars/avatar_1.jpeg',
            },
            hashtags: ['reactjs', 'javascript'],
            image: '/images/posts/post2.png',
            description: 'Fala pessoal! React Native > Flutter !! '
        }]})

mock.onGet('/api/posts/user/felipejhordan').reply(200, {
    posts: [
        {
            id: 1,
            title:
                'COMO MELHORAR SEU CODIGO JAVASCRIPT (ESLINT + PRETTIER + EDITORCONFIG) | Dicas e Truques #02',
            slug: 'como-melhorar-seu-codigo-javascript',
            date: moment().subtract(1, 'day').toDate().getTime(),
            author: {
                id: 1,
                name: 'Felipe Jhordan',
                avatar: '/images/avatars/avatar_2.jpg',
            },
            tags: ['eslint', 'prettier', 'editorconfig', 'vscode'],
            image: '/images/posts/post1.png',
            likes: 10,
            comments: 30,
        },
        {
            id: 2,
            title: 'COMO MIGRAR PARA REACT HOOKS | Tips & Tricks - React.js #01',
            slug: 'como-migrar-para-react-hooks',
            date: moment().subtract(1, 'day').toDate().getTime(),
            author: {
                id: 1,
                name: 'Felipe Jhordan',
                avatar: '/images/avatars/avatar_2.jpg',
            },
            tags: ['reactjs', 'javascript'],
            image: '/images/posts/post2.png',
            likes: 5,
            comments: 1,
        },
    ]})