import mock from '../utils/mock'

mock.onPost('/api/home/login').reply((config) => {
    const { email, password} = JSON.parse(config.data)
    if( email !== 'felipejordan.alves@gmail.com' || password !== "admin") {
        console.log(email)
        return [400, { message: 'Seu e-mail ou senha estão incorretos'}]
    }

    const user = {
        id: 1,
        name: 'Felipe Jhordan',
        username: 'felipejhordan',
        email: 'felipejordan.alves@gmail.com',
        avatar: '/images/avatars/avatar_2.jpg'
    }
    return [200, { user }]
})


mock.onPost('/api/home/me').reply(200, {
    user: {
        'id': 1,
        "name": 'felipe jhordan',
        'username': 'felipejhordan',
        'email': 'felipejordan.alves@gmail.com',
        'avatar': '/images/avatars/avatar_2.jpg'

    }
})

mock.onGet('/api/home/user/felipejhordan').reply(200, {
    id: 1,
    name: 'Felipe Jhordan',
    username: 'felipejhordan',
    email: 'felipejordan.alves@gmail.com',
    accessToken: 'dadasdsadsada',
    avatar: '/images/avatars/avatar_2.jpg',
    joinedIn: '06 de janeiro, 2020',
    work: 'Analista de sistemas',
    totalPost: '323'

})