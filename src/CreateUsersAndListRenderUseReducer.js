import React, { useCallback, useMemo, useReducer, useRef } from 'react';
import CreateUser from './createUser';
import useInputs from './hooks/useInputs';
import useInputsUseReducer from './hooks/useInputsUseReducer';
import UserList from './UserList';

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
        case 'CREATE_USER' : 
            return {
                users: state.users.concat(action.user)
            };
        case 'TOGGLE_USER' : 
            return {
                ...state,
                users: state.users.map(user => 
                    user.id === action.id ? {
                        ...user, active: !user.active
                    } : user
                )
            };
        case 'REMOVE_USER' : 
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.id)
            };
        default :
            return state;
    }
}

function CreateUsersAndListRenderUseReducer() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const {users} = state;
    const [{username, email}, onChange, onReset] = useInputsUseReducer({
        username: '',
        email: ''
    });

    const nextId = useRef(4);

    const onCreate = useCallback(() => {
        dispatch({
            type: 'CREATE_USER',
            user: {
                id: nextId.current += 1,
                username,
                email
            }
        });
        onReset();
        nextId.current += 1;
    }, [username, email, onReset]);
    const onToggle = useCallback(id => 
        dispatch({
            type: 'TOGGLE_USER',
            id
        }
    ),[]);
    const onRemove = useCallback(id => 
        dispatch({
            type: 'REMOVE_USER',
            id
        }
    ),[]);

    const count = useMemo(() => countActiveUsers(users), [users]);
    
    return (
        <>
            <CreateUser 
                username={username}
                email={email}
                onChange={onChange}
                onCreate={onCreate}
            />
            <UserList
                users={users}
                onToggle={onToggle}
                onRemove={onRemove}
            />
            <div>활성사용자 수 : { count }</div>
        </>
    );
}

export default CreateUsersAndListRenderUseReducer;