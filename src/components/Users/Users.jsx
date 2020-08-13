import React from "react";
import ss from './User.module.css';

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 0,
                    photoUrl: 'https://s3.cointelegraph.com/storage/uploads/view/5302e7d54c7acf0308c1effc3a63072a.png',
                    followed: false,
                    fullName: 'Dmitry',
                    status: 'So good day',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 1,
                    photoUrl: 'https://s3.cointelegraph.com/storage/uploads/view/5302e7d54c7acf0308c1effc3a63072a.png',
                    followed: false,
                    fullName: 'Michail',
                    status: 'The best choice',
                    location: {city: 'Ukraine', country: 'Kiev'}
                },
                {
                    id: 2,
                    photoUrl: 'https://s3.cointelegraph.com/storage/uploads/view/5302e7d54c7acf0308c1effc3a63072a.png',
                    followed: true,
                    fullName: 'Ivan',
                    status: 'How are you?',
                    location: {city: 'Moskow', country: 'Russia'}
                },
                {
                    id: 3,
                    photoUrl: 'https://s3.cointelegraph.com/storage/uploads/view/5302e7d54c7acf0308c1effc3a63072a.png',
                    followed: false,
                    fullName: 'Ostap',
                    status: 'Hello everyone',
                    location: {city: 'Ukraine', country: 'Lviv'}
                },
            ]
        );
    }
    return <div>
        {
            props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photoUrl}/>
                </div>
                <div>
                    {u.followed ?
                        <button onClick={() => {
                            props.unfollow(u.id)
                        }}>Unfollow</button>
                        :
                        <button onClick={() => {
                            props.follow(u.id)
                        }}>Follow</button>}

                </div>
            </span>
                <span>
                <span>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </span>
            </span>
            </div>)
        }
    </div>
}

export default Users;