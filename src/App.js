import React, { useState, useRef, useMemo, useCallback, useEffect } from 'react';
import Hello from './Hello';
import './App.css'
import Wrapper from './Wrapper';
import InputSample from './InputSample';
import InputSampleMulti from './InputSampleMulti';
import UserList from './UserList';
import CreateUser from './createUser';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}

function App() {
  const name = 'React';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,
    padding: '1rem'
  };
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  const { username, email } = inputs;
  const onChange = useCallback(e => {
      const { name, value } = e.target;
      setInputs(inputs => ({
        ...inputs,
        [name]: value
      }));
    }, 
    []
  );

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
    <> {/* Fragment */}
      <h1>리엑트 입문</h1>
      <ul>
        <li>
          <h2>컴포넌트 만들기 / JSX 문법 / Style / className / Props 전달 등</h2>
          <Hello name='props name' color='red' />
          <Hello name='다른 이름' color='#00ff00' />
          <div style={style}>{name}</div>
          <div className="gray-box"></div>
          {/* JSX 주석 */}
          <Hello name='또 다른 이름' color='#d077f8'
          // 열리는 태그 내부의 주석 
          />
        </li>
        <li>
          <h2>props.children</h2>
          <Wrapper>
            <Hello name='react' color='#ff0000' />
            <Hello />
          </Wrapper>
        </li>
        <li>
          <h2>input 상태 관리</h2>
          <InputSample />
        </li>
        <li>
          <h2>input 여러개 상태 관리 및 useRef로 DOM 선택</h2>
          <InputSampleMulti/>
        </li>
        <li>
          <h2>배열 렌더링 / useRef()로 변수 관리 / 배열 항목 추가, 제거, 수정, useEffect, useMemo, useCallback, React.memo</h2>
          <CreateUser 
          username={username}
          email={email}
          onChange={onChange}
          onCreate={onCreate} />
          <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
          <div>활성사용자 수 : {count}</div>
        </li>
      </ul>
    </>
    /* HTML 여러줄 주석 */
    // HTML 한줄 주석
  );
}

export default App;
