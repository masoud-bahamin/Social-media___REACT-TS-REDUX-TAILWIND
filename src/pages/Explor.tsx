import { useDispatch, useSelector } from "react-redux";
import { DispatchType, StateType } from "../redux/store";
import { useEffect } from "react";
import { getPosts } from "../redux/store/posts";
import ExplorePostCard from "../components/Card/ExplorePstCard";

function Explor() {
  const { data, loading, status, error } = useSelector(
    (state: StateType) => state.Posts
  );

  const dispatch: DispatchType = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, []);
  return (
    <div className=" overflow-hidden pt-24 pl-1 sm:pl-[270px] ">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 sm:gap-0 pr-2 sm:pr-6 xl:pr-10">
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
            {[...data]?.reverse().map((post) => (
              <ExplorePostCard key={post.id} {...post} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default Explor;
