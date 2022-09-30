import React, { useCallback, useMemo, useRef, useState } from 'react';
import CreateUser from './CreateUser';
import UserList from './UserList';

function countActiveUsers(users) {
    console.log('활성 사용자 수를 세는중...');
    return users.filter(user => user.active).length;
}

function CreateUsersAndListRender() {
    const [inputs, setInputs] = useState({
        username: '',
        email: ''
    });
    const [users, setUsers] = useState([
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
    ]);
    const { username, email } = inputs;

    const nextId = useRef(4); // useRef() 로 변수 관리하기

    const onCreate = useCallback( () => {
        const user = {
          id: nextId.current,
          username,
          email
        };
        // setUsers([...users, user]); // spread 방식
        setUsers(users => users.concat(user)); // .concat 방식
    
        setInputs({
          username: '',
          email: ''
        });
        nextId.current += 1;
    }, [username, email]);

    const onChange = useCallback(e => {
        const { name, value } = e.target;
        setInputs(inputs => ({
          ...inputs,
          [name]: value
        }));
      }, []
    );
    
    const onRemove = useCallback(id => {
        // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 생성 = user.id 가 id 인 것을 제거
        setUsers(users => users.filter(user => user.id !== id));
    }, []);

    const onToggle = useCallback(id => {
        setUsers(users.map(user =>
            user.id === id ? { ...user, active: !user.active } : user
        ));
    }, [users]);

    const count = useMemo(() => countActiveUsers(users), [users]);

    return (
        <>
            <CreateUser 
                username={username}
                email={email}
                onChange={onChange}
                onCreate={onCreate}
            />
            <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
            <div>활성사용자 수 : {count}</div>
        </>
    );
}

export default CreateUsersAndListRender;