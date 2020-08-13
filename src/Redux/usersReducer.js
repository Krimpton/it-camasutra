const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        // {
        //     id: 0,
        //     photoUrl: 'https://s3.cointelegraph.com/storage/uploads/view/5302e7d54c7acf0308c1effc3a63072a.png',
        //     followed: false,
        //     fullName: 'Dmitry',
        //     status: 'So good day',
        //     location: {city: 'Minsk', country: 'Belarus'}
        // },
        // {
        //     id: 1,
        //     photoUrl: 'https://s3.cointelegraph.com/storage/uploads/view/5302e7d54c7acf0308c1effc3a63072a.png',
        //     followed: false,
        //     fullName: 'Michail',
        //     status: 'The best choice',
        //     location: {city: 'Ukraine', country: 'Kiev'}
        // },
        // {
        //     id: 2,
        //     photoUrl: 'https://s3.cointelegraph.com/storage/uploads/view/5302e7d54c7acf0308c1effc3a63072a.png',
        //     followed: true,
        //     fullName: 'Ivan',
        //     status: 'How are you?',
        //     location: {city: 'Moskow', country: 'Russia'}
        // },
        // {
        //     id: 3,
        //     photoUrl: 'https://s3.cointelegraph.com/storage/uploads/view/5302e7d54c7acf0308c1effc3a63072a.png',
        //     followed: false,
        //     fullName: 'Ostap',
        //     status: 'Hello everyone',
        //     location: {city: 'Ukraine', country: 'Lviv'}
        // },
    ],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAc = (users) => ({type: SET_USERS, users});

export default usersReducer;