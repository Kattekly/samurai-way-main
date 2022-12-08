import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "cef20686-9f7c-4e70-b5ff-96c74b679419"
    }
})

export const userAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    }
}

export const UnfollowAPI = {
    deleteUnfollow(id: number) {
        return instance.delete(`follow/${id}`,).then(response => {
            return response.data
        })
    }
}

export const FollowAPI = {
    postFollow(id: number) {
        return instance.post(`follow/${id}`, {}).then(response => {
            return response.data
        })
    }
}

export const MyLoginAPI = {
    getHeader() {
        return instance.get(`auth/me`).then(response => response.data)
    }
}

export const ProfileAPI = {
    getProfile(userId: string) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId: string) {
        return instance.get(`status/` + userId)
    },
    updateStatus () {

    }
}
