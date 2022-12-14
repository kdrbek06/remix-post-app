import {Link, useLoaderData} from "@remix-run/react";
import {db} from "~/utils/db.server"
import {redirect} from "@remix-run/node";
export const loader = async ({params}) => {
    const post = await db.post.findUnique({
        where: { id: params.postId }
    })

    if(!post) throw new Error("Post not found")

    const data = {post}
    return data
}

export const action = async ({request, params}) => {
    const form = await request.formData()

    if (form.get('_method') === 'delete') {
        const post = await db.post.findUnique({
            where: { id: params.postId }
        })

        if(!post) throw new Error("Post not found")

        await db.post.delete({ where: { id: params.postId}})

        return redirect('/posts')

    }
}

const Post = () => {
    const {post} = useLoaderData()
    return (
        <>
            <div className={'page-header'}>
                <h1>{post.title}</h1>
            </div>

            <div className="page-content">
                {post.body}
            </div>

            <div className="page-footer">
                <Link to={'/posts'} className={'btn btn-back'}>Back</Link>
                <form method='POST'>
                    <input type="hidden" name={"_method"} value={"delete"}/>
                    <button type={"submit"} className={'btn btn-delete'}>Delete</button>
                </form>
            </div>
        </>


    )
};

export default Post;