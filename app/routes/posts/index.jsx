import {Link, useLoaderData} from "@remix-run/react";
import {db} from '~/utils/db.server'


export const loader = async () => {
    const data = {
        posts: await db.post.findMany({
            take: 20,
            select: {id:true, title: true, body:true, createdAt: true},
            orderBy: {createdAt: 'desc'}
        }),
    }
    return data
}

const PostItems = () => {
    const {posts} = useLoaderData()

    return (
        <>
            <div className={'page-header'}>
                <h1>Posts</h1>
                <Link to={'new'} className={'btn'}>
                    New Post
                </Link>
            </div>
                <ul className="posts-list">
                    {posts.map((post) => (
                        <li key={post.id}>
                            <Link to={post.id}>
                                <h4>{post.title}</h4>
                                <p>{post.body}</p>
                                {new Date(post.createdAt).toLocaleDateString()}
                            </Link>
                        </li>
                    ))}
                </ul>
        </>
    )
}

export default PostItems ;