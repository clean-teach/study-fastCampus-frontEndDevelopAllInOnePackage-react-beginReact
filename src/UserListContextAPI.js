import React, { useContext } from 'react';
import { UserDispatch } from './CreateUsersAndListRenderUseReducer';

// 참고로, 한 파일에 여러개의 컴포넌트를 선언해도 괜찮다.
const User = React.memo(({ user }) => {
  const dispatch = useContext(UserDispatch);

  return (
    <div>
      <b style={{
          cursor: 'pointer',
          color: user.active ? 'green' : 'black'
        }}
        onClick={() => 
          dispatch({
            type : 'TOGGLE_USER',
            id : user.id
          })
        }
      >{user.username}</b> <span>({user.email})</span>
      <button
        onClick={() => 
          dispatch({
            type: 'REMOVE_USER',
            id: user.id
          })
        }
      >삭제</button>
    </div>
  );
});

function UserList({users}) {
  return (
    <div>
        {users.map((user, index) => (
            <User user={user} key={index} />
        ))}
    </div>
  );
}

export default React.memo(UserList);