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
        avatar: '/images/avatars/avatar_1.jpeg'
    }
    return [200, { user }]
})


mock.onPost('/api/home/me').reply(200, {
    user: {
        'id': 1,
        'username': 'felipejhordan',
        'email': 'felipejordan.alves@gmail.com',
        'avatar': '/images/avatars/avatar_1.jpeg'

    }
})