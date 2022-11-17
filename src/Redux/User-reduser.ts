const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"


export type UsersMaxPropsType = {
    users: Array<UsersPropsType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

export type UsersPropsType = {
    id: number
    photos: photosType
    followed: boolean
    name: string
    status: string
    location: LocationPropsType
}

type photosType = {
    small: string
    large: string
}

type LocationPropsType = {
    city: string
    country: string
}

let initialState: UsersMaxPropsType = {
    users: [ ],
    pageSize: 5,
    totalUsersCount: 19,
    currentPage: 1
}

const usersReduser = (state = initialState, action: any): UsersMaxPropsType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(el => {
                    if (el.id === action.userId) {
                        return {...el, followed: true}
                    }
                 return el
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(el => {
                    if (el.id === action.userId) {
                        return {...el, followed: false}
                    }
                    return el
                })
            }
        case SET_USERS: {
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        default:
            return state
    }
};

export const followAC = (userId: number) => ({type: FOLLOW, userId})
export const unfollowAC = (userId: number) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users: Array<UsersPropsType>) => ({type: SET_USERS, users})

export default usersReduser;