import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@test.test',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Ilonitta',
        email: 'ilonitta@test.test',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Alex',
        email: 'alex@test.test',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default  users
