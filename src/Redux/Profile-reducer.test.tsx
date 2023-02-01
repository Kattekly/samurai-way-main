import {addPostActionCreator, profileReducer} from "./Profile-reducer";
import {type} from "os";


test('new post should be added', () => {
    let initialState = {
        posts: [
            {id: 1, message: "Hi, how are yo?", like: 15},
            {id: 2, message: "It's my first post", like: 20}
        ],
        profile: null,
        status: ''
    }
    let action = addPostActionCreator('ananas')


    let newState = profileReducer(initialState, action)
})
