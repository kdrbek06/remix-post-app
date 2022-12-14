const { PrismaClient } = require('@prisma/client')

const db = new PrismaClient()


const getPosts = () => {

    return [
        {
            title: 'post 1',
            body: 'This is an intro to the Remix Run framework. We build a blog app with Prisma and Sqlite.'
        },
        {
            title: 'post 2',
            body: 'This is an intro to the Remix Run framework. We build a blog app with Prisma and Sqlite. 2'
        },
        {
            title: 'post 3',
            body: 'This is an intro to the Remix Run framework. We build a blog app with Prisma and Sqlite. 3'
        }
    ]
}

const seed = async () => {
    await Promise.all(
        getPosts().map(post => {
            return db.post.create({ data: post})
        })
    )
}

seed()