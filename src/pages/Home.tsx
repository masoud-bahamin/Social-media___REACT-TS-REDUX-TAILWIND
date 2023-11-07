import React, { useEffect } from 'react'
import { addPost, getPosts } from '../redux/store/posts'
import { useDispatch, useSelector } from 'react-redux'
import { DispatchType, StateType } from '../redux/store'
import PostCard from '../components/Card/PostCard'
import PostModal from '../components/Modal/PostModal'
import { updateUserInfo } from '../redux/store/users'
import { useNavigate } from 'react-router-dom'

export default function Home() {

  const [title, setTitle] = React.useState("")
  const [description, setDescription] = React.useState("")
  const [isShowNewPostModal, setIsShowNewPostModal] = React.useState(false)

  const navigate = useNavigate()

  const dispatch: DispatchType = useDispatch()


  const poststate = useSelector((state: StateType) => state.Posts)
  const userstate = useSelector((state: StateType) => state.Users)


  const { data, loading, status, error } = poststate

  const { userInfo, loading: userLoading } = userstate
  console.log(userInfo, loading);

  useEffect(() => {
    dispatch(getPosts())
    if (!userLoading && userInfo === null) {
      navigate("/login")
    }
  }, [userInfo])

  const createPost = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const postId = crypto.randomUUID()
    const newPost: PostType = {
      username: userInfo!.username as string,
      userId: userInfo!.id as string,
      image: description,
      title,
      comments: [],
      likes: [],
      description,
      postId,
      avatar: userInfo!.avatar as string
    }

    dispatch(addPost(newPost))
    if (userInfo) {
      dispatch(updateUserInfo({
        ...userInfo as UserType,
        posts: [...userInfo!.posts, newPost]
      }))
    }
    setIsShowNewPostModal(false)
  }




  return (
    <div className=' overflow-hidden pt-24 pl-1 sm:pl-[270px] '>
      <PostModal title='New Post' isShow={isShowNewPostModal} setIsShow={setIsShowNewPostModal}>
        <>
          <div className="p-6 ">
            <form onSubmit={createPost}>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <p className="mb-4 text-xs leading-relaxed text-gray-500 dark:text-gray-400">
                    With less than a month to go before the European Union enacts new
                    consumer privacy laws for its citizens, companies around the world
                    are updating their terms of service agreements to comply.
                  </p>
                  <div>
                    <input value={title} onChange={e => setTitle(e.target.value)}
                      type="text"
                      id="first_name"
                      className="border mb-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Post Title"
                      required
                    />
                  </div>
                  <div>
                    <textarea value={description} onChange={e => setDescription(e.target.value)}
                      id="last_name"
                      className="border h-24 mb-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Image Adrress"
                      required
                    />
                  </div>
                  <div>
                  </div>
                </div>
                <div className='text-center'>
                  <div>
                    <img className='w-32 mx-auto mb-2' src="https://cdn.dribbble.com/users/17001/screenshots/5899975/dribbble_11_1x.png" alt="" />
                  </div>
                  <div>
                    <label
                      htmlFor="File"
                      className=" border p-2 rounded-lg cursor-pointer
                                mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Choose File
                    </label>
                    <input
                      type="file"
                      id="File"
                      className='hidden'
                    />
                  </div>
                </div>
              </div>

              {/* Modal footer */}
              <div className="flex items-center py-4 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button
                  data-modal-hide="default-modal"
                  type="submit"
                  className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Send
                </button>
                <button onClick={() => setIsShowNewPostModal(false)}
                  data-modal-hide="default-modal"
                  type="button"
                  className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </>
      </PostModal>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-0 md:gap-1 xl:gap-8 pr-2 xl:pr-10'>
        {status === "rejected" && (
          <div className="p-4 mb-4 text-sm font-medium min-w-[300px] text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400">
            error :  {error}
          </div>
        )}
        {loading ? (
          <div className='w-screen h-screen flex justify-center items-center'>
            <div className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 border-4 border-dashed rounded-full"></div>
          </div>
        ) : (
          <>
            {[...data]?.reverse().map(post => (
              <PostCard key={post.id} {...post} />
            ))}
          </>
        )}



      </div>
    </div>
  )
}
