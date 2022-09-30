import React, { useCallback, useContext, useRef } from 'react';
import { UserDispatch } from './CreateUsersAndListRenderUseReducer';
import useInputsUseReducer from './hooks/useInputsUseReducer';

function CreateUser() {
  const dispatch = useContext(UserDispatch);

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
  }, [dispatch, username, email, onReset]);

  return (
    <div>
      <input
        name="username"
        placeholder="계정명"
        onChange={onChange}
        value={username}
      />
      <input
        name="email"
        placeholder="이메일"
        onChange={onChange}
        value={email}
      />
      <button onClick={onCreate}>등록</button>
    </div>
  );
}

export default React.memo(CreateUser);