import Swal from "sweetalert2"
import Axios from "../sevise/axios"

const get = async () => {
    const { data } = await Axios("users")
    return data as UserType[]
}

const getTokenFromCooki = (name: string) => {
    if (document.cookie) {
        const data = document.cookie.split(`${name}=`)[1]
        return (data.split(";")[0]);
    } else {
        return null
    }
}

const getInfo = async () => {
    const id = getTokenFromCooki("tokenId") 
    if (id) {
        const { data } = await Axios(`/users/${id}`)
        return data as UserType
    } else {
        return null
    }

}

const update = async (user : UserType) => {
    const res = Axios.put(`users/${user.id}` , user)
    return res
}


const login = async (email: string) => {
    const data = (await get()).filter(user => user.email === email)
    if (data.length > 0) {
        document.cookie = `tokenId=${data[0].id}`
        return data[0]
    } else {
        Swal.fire({
            icon: "error",
            title: "Your information is NOT valid"
        })
        return null
    }
}

const add = async (user: UserType) => {
    const { data } = await Axios.post("users", user)
    return data
}

const auth = { login, add, get, getInfo ,update}

export default auth