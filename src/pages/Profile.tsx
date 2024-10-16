import { useEffect } from "react";
import { useSelector } from "react-redux";
import { StateType } from "../redux/store";
import PostCard from "../components/Card/PostCard";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const { userInfo, loading, status, error } = useSelector(
    (state: StateType) => state.Users
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !userInfo) {
      navigate("/login");
    }
  }, []);

  return (
    <div className=" overflow-hidden w-full pt-24 pl-1 sm:pl-[270px] ">
      <>
        <main>
          <section className="relative w-full block h-[500px]">
            <div
              className="absolute top-0 w-full h-full bg-center bg-cover"
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80")',
              }}
            >
              <span className="w-full h-full absolute opacity-50 bg-black" />
            </div>
            <div
              className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
              style={{ transform: "translateZ(0px)" }}
            >
              <svg
                className="absolute bottom-0 overflow-hidden"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x={0}
                y={0}
              >
                <polygon
                  className="text-gray-200 fill-current"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section className="relative py-16 bg-gray-200 dark:text-gray-200 dark:bg-gray-400">
            <div className="container mx-auto px-4">
              <div className="relative flex flex-col min-w-0 break-words bg-white dark:text-gray-200 dark:bg-gray-600 w-full mb-6 shadow-xl rounded-lg -mt-64">
                <div className="px-6">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                      <div className="relative">
                        <img
                          alt="..."
                          src={userInfo?.avatar}
                          className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                      <div className="py-6 px-3 mt-32 sm:mt-0">
                        <button
                          className="bg-blue-500 active:bg-blue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                          type="button"
                        >
                          Follow
                        </button>
                      </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4 lg:order-1">
                      <div className="flex justify-center py-4 lg:pt-4 pt-8">
                        <div className="mr-4 p-3 text-center">
                          <span className="text-xl font-bold block uppercase tracking-wide text-gray-600 dark:text-gray-200">
                            36
                          </span>
                          <span className="text-sm text-gray-400 dark:text-gray-300">
                            Friends
                          </span>
                        </div>
                        <div className="mr-4 p-3 text-center">
                          <span className="text-xl font-bold block uppercase tracking-wide text-gray-600 dark:text-gray-200">
                            {userInfo?.posts.length}
                          </span>
                          <span className="text-sm text-gray-400 dark:text-gray-300">
                            Photos
                          </span>
                        </div>
                        <div className="lg:mr-4 p-3 text-center">
                          <span className="text-xl font-bold block uppercase tracking-wide text-gray-600 dark:text-gray-200">
                            14
                          </span>
                          <span className="text-sm text-gray-400 dark:text-gray-300">
                            Comments
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-12">
                    <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-700 dark:text-gray-200">
                      {userInfo?.username}
                    </h3>
                    <div className="text-sm leading-normal mt-0 mb-2 text-gray-400 dark:text-gray-300 font-medium uppercase">
                      <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-400 dark:text-gray-400" />
                      {userInfo?.name}
                    </div>
                    <div className="mb-2 text-gray-600 dark:text-gray-300 mt-10">
                      <i className="fas fa-briefcase mr-2 text-lg text-gray-400 dark:text-gray-300" />
                      Solution Manager - Creative Tim Officer
                    </div>
                    <div className="mb-2 text-gray-600 dark:text-gray-300">
                      <i className="fas fa-university mr-2 text-lg text-gray-400 dark:text-gray-400" />
                      {userInfo?.bio}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-0 md:gap-1 xl:gap-8 pr-2 xl:pr-10">
        {status === "rejected" && (
          <div className="p-4 mb-4 text-sm font-medium min-w-[300px] text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400">
            error : {error}
          </div>
        )}
        {loading ? (
          <div className="w-screen h-screen flex justify-center items-center">
            <div className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 border-4 border-dashed rounded-full"></div>
          </div>
        ) : (
          <>
            {userInfo ? (
              <>
                {[...userInfo.posts]?.reverse().map((post) => (
                  <PostCard key={post.postId} {...post} />
                ))}
              </>
            ) : null}
          </>
        )}
      </div>
    </div>
  );
}
