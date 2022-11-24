import axios from "axios";

export const getUsers = (currentPage: number, pageSize: number) => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,
        {
            withCredentials: true
        }).then(response => response.data)
}

export const getUnfollow = (id: number) => {
    return axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
        withCredentials: true,
        headers: {
            "API-KEY": "cef20686-9f7c-4e70-b5ff-96c74b679419"
        }
    }).then(response => response.data)
}

export const getFollow = (id: number) => {
    return axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {}, {
        withCredentials: true,
        headers: {
            "API-KEY": "cef20686-9f7c-4e70-b5ff-96c74b679419"
        }
    }).then(response => response.data)
}

export const getHeader = () => {
   return axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true
    }).then(response => response.data)
}