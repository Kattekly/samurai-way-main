import {addPostActionCreator, profileReducer} from "./Profile-reducer";


test('new post should be added', () => {
    //стартовые данные
    let initialState = {
        posts: [
            {id: 1, message: "Hi, how are yo?", like: 15},
            {id: 2, message: "It's my first post", like: 20}
        ],
        profile: null,
        status: ''
    }
    let action = addPostActionCreator('ananas')

    //экшен
    let newState = profileReducer(initialState, action)

    //ожидание
    expect(newState.posts.length).toBe(3)
})
