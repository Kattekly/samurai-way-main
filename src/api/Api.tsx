import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "cef20686-9f7c-4e70-b5ff-96c74b679419"
    }
})


export const getUsers = (currentPage: number, pageSize: number) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
}

export const deleteUnfollow = (id: number) => {
    return instance.delete(`follow/${id}`, ).then(response => response.data)
}

export const postFollow = (id: number) => {
    return instance.post(`follow/${id}`, {}).then(response => response.data)
}

export const getHeader = () => {
    return instance.get(`auth/me`).then(response => response.data)
}
