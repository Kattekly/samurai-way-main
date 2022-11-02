const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"


type UsersMaxPropsType = {
    users: Array<UsersPropsType>
}

type UsersPropsType = {
    id: number
    followed: boolean
    fullName: string
    status: string
    location: LocationPropsType
}

type LocationPropsType = {
    city: string
    country: string
}

let initialState: UsersMaxPropsType = {
    users: [
        {
            id: 1,
            followed: false,
            fullName: "Katerina",
            status: "I am a boss",
            location: {city: "Rybinsk", country: "Russia"}
        },
        {
            id: 2,
            followed: true,
            fullName: "Vladimir",
            status: "Hey, hoy!",
            location: {city: "Moscow", country: "Russia"}
        },
        {
            id: 3,
            followed: false,
            fullName: "Marina",
            status: "Sun",
            location: {city: "Minsk", country: "Belarus"}
        },
    ]
}

const UsersReduser = (state = initialState, action: any) => {
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
        default:
            return state
    }
};

export const followAC = (userId: number) => ({type: FOLLOW, userId})
export const unfollowAC = (userId: number) => ({type: UNFOLLOW, userId})

export default UsersReduser;