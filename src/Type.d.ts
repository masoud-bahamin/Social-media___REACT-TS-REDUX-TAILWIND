type s = string;
type n = number;

interface CommentType {
    id:string;
    text:string;
    username:string;
    avatar:string;
}

interface PostType {
    id?: s;
    title: string;
    userId: s;
    createdAt?: string;
    username: string
    avatar: string
    likes: string[];
    comments: CommentType[];
    title: string;
    description: string;
    image?: string;
    images?: [];
    postId:string
}

interface PostInitialState {
    data: PostType[];
    status: "pending" | "success" | "rejected" | "none";
    error: string;
    loading: boolean
}

interface UserType {
    name?: s;
    avatar?: s;
    email: s;
    password: s;
    createdat?: s;
    posts: PostType[];
    stories?: [];
    username: s;
    followers?: UserType[];
    followings?: UserType[];
    public?: boolean
    bio?: s;
    id?: s;
}

interface UserInitialState {
    data: UserType[];
    status: "pending" | "success" | "rejected" | "none";
    error: string;
    loading: boolean;
    userInfo : null | UserType
}