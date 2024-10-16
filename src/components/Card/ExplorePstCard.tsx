import { useDispatch, useSelector } from "react-redux";
import { DispatchType, StateType } from "../../redux/store";
import { updatePost } from "../../redux/store/posts";
import CommentModal from "../Modal/CommentModal";
import { useState } from "react";

export default function ExplorePostCard(props: PostType) {
  const [isShowCommentModal, setIsShowCommentModal] = useState(false);
  const [comment, setComment] = useState("");

  const { title, image, avatar, comments, username } = props;

  const dispatch: DispatchType = useDispatch();

  const { userInfo } = useSelector((state: StateType) => state.Users);

  const sendComment = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newComment: CommentType = {
      id: crypto.randomUUID(),
      text: comment,
      username: userInfo!.username,
      avatar:
        userInfo!.avatar ||
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    };
    dispatch(
      updatePost({
        ...props,
        comments: comments ? [...comments, newComment] : [newComment],
      })
    );
  };

  return (
    <div className=" rounded-lg p-2 lg:p-5">
      <CommentModal
        title="POST"
        isShow={isShowCommentModal}
        setIsShow={setIsShowCommentModal}
      >
        <div className="p-4">
          <div className="text-center">
            <img className="w-64 mx-auto mb-4" src={image} alt="" />
          </div>
          <div className="flex items-center mb-5">
            <p className="inline-flex items-center mr-3 text-xs text-gray-900 dark:text-white font-semibold">
              <img
                className="mr-2 w-6 h-6 rounded-full"
                src={avatar}
                alt="Michael Gough"
              />
              {username}
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-400">{title}</p>
          </div>
          <section className="bg-white dark:bg-gray-800 py-4 rounded-lg antialiased">
            <div className="max-w-2xl mx-auto">
              <div className="flex justify-between items-center mb-2">
                <h2 className=" font-semibold text-gray-900 dark:text-white">
                  Comments ({comments?.length})
                </h2>
              </div>
              <form onSubmit={sendComment}>
                <input
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  type="text"
                  id="first_name"
                  className="border mb-2 border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Comment..."
                  required
                />
              </form>
              <div className=" overflow-y-scroll max-h-64">
                {comments?.map((comment, index) => (
                  <div
                    key={index}
                    className="py-5 px-1 text-xs bg-white rounded-lg dark:bg-gray-900 mb-2"
                  >
                    <footer className="flex justify-between items-center mb-2">
                      <div className="flex flex-wrap items-center mb-2">
                        <p className="inline-flex items-center mr-3 text-xs text-gray-900 dark:text-white font-semibold">
                          <img
                            className="mr-2 w-6 h-6 rounded-full"
                            src={comment.avatar}
                            alt="Michael Gough"
                          />
                          {comment.username}
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          <time
                            dateTime="2022-02-08"
                            title="February 8th, 2022"
                          >
                            Feb. 8, 2022
                          </time>
                        </p>
                      </div>
                      <button
                        id="dropdownComment1Button"
                        data-dropdown-toggle="dropdownComment1"
                        className="group relative inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        type="button"
                      >
                        <svg
                          className="w-4 h-4"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 16 3"
                        >
                          <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                        </svg>
                        <span className="sr-only">Comment settings</span>
                        <div
                          id="dropdownComment1"
                          className="hidden group-hover:block absolute top-0 z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                        >
                          <ul
                            className="py-1 text-sm text-gray-700 dark:text-gray-200"
                            aria-labelledby="dropdownMenuIconHorizontalButton"
                          >
                            <li>
                              <a
                                href="#"
                                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                Edit
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                Remove
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                Report
                              </a>
                            </li>
                          </ul>
                        </div>
                      </button>
                    </footer>
                    <div className="flex justify-between">
                      <p className="text-gray-500 dark:text-gray-400">
                        {comment.text}
                      </p>
                      <div className="flex items-center space-x-4">
                        <button
                          type="button"
                          className="flex items-center text-xs text-gray-500 hover:underline dark:text-gray-400 font-medium"
                        >
                          <svg
                            className="mr-1.5 w-3.5 h-3.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 18"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                            />
                          </svg>
                          Reply
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </CommentModal>
      <div onClick={() => setIsShowCommentModal(true)}>
        <img className="rounded-xl w-[320px] h-[175px]" src={image} alt="" />
      </div>
      {/* <div className="p-5">
        <div className="flex items-center text-gray-500 text-xs">
          <div>
            <img className="rounded-full w-10 h-10" src={avatar} alt={title} />
          </div>
          <a href="#">
            <h5
              className="ml-2 text-xs tracking-tight text-gray-900 dark:text-white"
              title={title}
            >
              {username}
            </h5>
          </a>
          <div className="flex ml-auto mr-2 items-center">
            <svg
              onClick={likeHandler}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className={`w-6 h-6 ${
                like ? "fill-rose-500" : "fill-white"
              }  cursor-pointer`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
            <span>{likes?.length === 0 ? "" : likes?.length}</span>
          </div>
          <div
            className="flex items-center"
            onClick={() => setIsShowCommentModal(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="w-6 h-6 fill-white cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
              />
            </svg>
            <span>{comments?.length === 0 ? "" : comments?.length}</span>
          </div>
        </div>
      </div> */}
    </div>
  );
}
