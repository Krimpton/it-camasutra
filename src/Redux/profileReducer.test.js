import profileReducer, {addPostActionCreator, deletePost} from "./profileReducer";
import {test} from "jest-snapshot";

let state = { //данные state
    postsData: [
        {id: 0, sms: 'Hi, hello', likeCount: 0},
        {id: 1, sms: 'Wow, Git!', likeCount: 1},
    ],
};

it('length of posts should be incremented', () => {
    //1. test data
    let action = addPostActionCreator("hello-rust!")

    //2. action
    let newState = profileReducer(state, action)

    //3. expectation
    expect(newState.postsData.length).toBe("hello-rust!")
});

test('message of new post should be correct', () => {
    //1. test data
    let action = addPostActionCreator("hello-rust!")

    //2. action
    let newState = profileReducer(state, action)

    //3. expectation
    expect(newState.postsData[2].sms).toBe("hello-rust!")
});

test('after deleting length of messages should be decrement', () => {
    //1. test data
    let action = deletePost(1)

    //2. action
    let newState = profileReducer(state, action)

    //3. expectation
    expect(newState.postsData.length).toBe(1)
});

test('after deleting length should be decrement if id is incorrect', () => {
    //1. test data
    let action = deletePost(1)

    //2. action
    let newState = profileReducer(state, action)

    //3. expectation
    expect(newState.postsData.length).toBe(100)
});


