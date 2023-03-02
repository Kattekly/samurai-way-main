import {addPostActionCreator, deletePost, profileReducer} from "./profile-reducer";

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are yo?", like: 15},
        {id: 2, message: "It's my first post", like: 20}
    ],
    profile: null,
    status: ''
}

test('new post should be added', () => {
    //стартовые данные

    let action = addPostActionCreator('ananas')

    //экшен
    let newState = profileReducer(initialState, action)

    //ожидание
    expect(newState.posts.length).toBe(3)
    expect(newState.posts[2].message).toBe('ananas')
    expect(newState.posts[2].like).toBe(0)
})

test('after deleting length of massages de decrement', () => {
    //стартовые данные

    let action = deletePost(1)

    //экшен
    let newState = profileReducer(initialState, action)

    //ожидание
    expect(newState.posts.length).toBe(1)
})

test('after deleting length shouldnt de decrement if id is incorrect', () => {
    //стартовые данные

    let action = deletePost(12)

    //экшен
    let newState = profileReducer(initialState, action)

    //ожидание
    expect(newState.posts.length).toBe(2)
})