import React, { createContext, useMemo, useReducer } from 'react';
import CreateUserContextAPI from './CreateUserContextAPI';
import UserListContextAPI from './UserListContextAPI';
import produce from 'immer';

function countActiveUsers(users) {
    console.log('활성 사용자 수를 세는중...');
    return users.filter(user => user.active).length;
}

const initialState = {
    users: [
        {
            id: 1,
            username: 'velopert',
            email: 'public.velopert@gmail.com',
            active: true
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@example.com',
            active: false
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@example.com',
            active: false
        }
    ]
};

function reducer(state, action) {
    switch (action.type) {
        // case 'CREATE_USER' : 
        //     return {
        //         users: state.users.concat(action.user)
        //     };
        // case 'TOGGLE_USER' : 
        //     return {
        //         ...state,
        //         users: state.users.map(user => 
        //             user.id === action.id ? {
        //                 ...user, active: !user.active
        //             } : user
        //         )
        //     };
        // case 'REMOVE_USER' : 
        //     return {
        //         ...state,
        //         users: state.users.filter(user => user.id !== action.id)
        //     };
        case 'CREATE_USER' : 
            return produce(state, draft => {
                draft.users.push(action.user);
            });
        case 'TOGGLE_USER' : 
            return produce(state, draft => {
                const user = draft.users.find(user => user.id === action.id);
                user.active = !user.active;
            });
        case 'REMOVE_USER' : 
            return produce(state, draft => {
                const index = draft.users.findIndex(user => user.id === action.id);
                draft.users.splice(index, 1);
            });
        default :
            return state;
    }
}

export const UserDispatch = createContext(null);

function CreateUsersAndListRenderUseReducer() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const {users} = state;

    const count = useMemo(() => countActiveUsers(users), [users]);
    
    return (
        <UserDispatch.Provider value={dispatch}>
            <CreateUserContextAPI />
            <UserListContextAPI users={users} />
            <div>활성사용자 수 : { count }</div>
        </UserDispatch.Provider>
    );
}

export default CreateUsersAndListRenderUseReducer;