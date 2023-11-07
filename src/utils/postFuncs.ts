import Axios from "../sevise/axios"

const update = async (post: PostType) => {
    const res = Axios.put(`/posts/${post.id}`, post)
    return res
}

const add = async (post: PostType) => {
    const res = Axios.post("/posts", post)
    console.log(post, res);

}

const get = async () => {
    const res = await fetch('https://65292d2d55b137ddc83e5374.mockapi.io/posts')
    const data = await res.json()
    return data
}

const postFunc = { update, add , get}

export default postFunc