
type UsersMaxPropsType = {
    users: Array<UsersPropsType>
}

type UsersPropsType = {
    id: number
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
        {id: 1, fullName: "Katerina", status: "I am a boss", location: {city: "Rybinsk", country: "Russia"}},
        {id: 2, fullName: "Vladimir", status: "Hey, hoy!", location: {city: "Moscow", country: "Russia"}},
        {id: 3, fullName: "Marina", status: "Sun", location: {city: "Minsk", country: "Belarus"}},
    ]
}

const UsersReduser = (state: any, action: any) => {
switch (action.type) {
    default: return state
}
};

export default UsersReduser;