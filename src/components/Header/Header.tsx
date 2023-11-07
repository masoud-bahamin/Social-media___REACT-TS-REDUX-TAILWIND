import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DispatchType, StateType } from '../../redux/store'
import { getUserInfo } from '../../redux/store/users'
import { changeTheme } from '../../redux/store/theme'

export default function Header() {

    const dispatch: DispatchType = useDispatch()

    React.useEffect(() => {
        dispatch(getUserInfo())
    }, [])

    const themeHandler = () => {
        dispatch(changeTheme(status === "dark" ? "light" : "dark"))
    }

    const { userInfo, loading } = useSelector((state: StateType) => state.Users)

    const { status } = useSelector((state: StateType) => state.Theme)

    return (
        <header className="bg-white dark:text-gray-300 dark:bg-gray-700 fixed top-0 left-0 w-full z-50 p-3">
            <div className='flex justify-between'>
                <div className='flex'>
                    <div>
                        <img className="rounded-full w-10 h-10 mr-2" src="https://bahamin.online/img/lo1.png" alt="" />
                    </div>
                    <div className='p-3 mx-2 group hover:bg-blue-400 rounded-xl '>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor"
                            className="w-5 h-5 text-gray-500 dark:text-gray-300 group-hover:text-white ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>

                    </div>
                    <div className='p-3 mx-2 group hover:bg-blue-400 rounded-xl '>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor"
                            className="w-5 h-5 text-gray-500 dark:text-gray-300 group-hover:text-white ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
                        </svg>

                    </div>
                    <div className='hidden md:block p-3 mx-2 group hover:bg-blue-400 rounded-xl '>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor"
                            className="w-5 h-5 text-gray-500 dark:text-gray-300 group-hover:text-white ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>

                    </div>

                    <div className='hidden md:block p-3 mx-2 group hover:bg-blue-400 rounded-xl '>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor"
                            className="w-5 h-5 text-gray-500 dark:text-gray-300 group-hover:text-white ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                        </svg>

                    </div>
                </div>
                <div className='flex items-center'>
                    {/* search box */}
                    <form className='hidden md:block w-80'>
                        <label
                            htmlFor="default-search"
                            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                        >
                            Search
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg
                                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                    />
                                </svg>
                            </div>
                            <input
                                type="search"
                                id="default-search"
                                className="block w-full px-4 py-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Search..."
                            />
                        </div>
                    </form>
                    <div className='hidden md:block p-3 mx-2 group hover:bg-blue-400 rounded-xl' onClick={themeHandler}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor"
                            className="w-5 h-5 text-gray-500 dark:text-gray-300 group-hover:text-white cursor-pointer">
                            {status === "light" ? (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                            )}
                        </svg>


                    </div>
                    <div>
                        {userInfo ? (
                            <img className="rounded-full w-10 h-10 ml-2 cursor-pointer" src={userInfo.avatar} alt="" />
                        ) : (
                            <img className="rounded-full w-10 h-10 ml-2 cursor-pointer" src="https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg" alt="" />
                        )}
                    </div>
                </div>
            </div>
        </header>

    )
}
