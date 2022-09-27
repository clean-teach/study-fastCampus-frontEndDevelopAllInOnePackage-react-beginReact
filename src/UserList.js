import React, { useEffect } from 'react';

// 참고로, 한 파일에 여러개의 컴포넌트를 선언해도 괜찮다.

const User = React.memo(({ user, onRemove, onToggle }) => {
  // useEffect(() => {
  //   console.log('컴포넌트가 화면에 나타남');
  //   console.log(user);
  //   return () => {
  //     console.log('컴포넌트가 화면에서 사라짐');
  //     console.log(user);
  //   };
  // }, [user]);
  return (
    <div>
      <b style={{
          cursor: 'pointer',
          color: user.active ? 'green' : 'black'
        }}
        onClick={() => onToggle(user.id)}
      >{user.username}</b> <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
});

function UserList({users, onRemove, onToggle}) {
  return (
    <div>
      {/* <User user={users[0]} />
      <User user={users[1]} />
      <User user={users[2]} /> */}

      {/* {users.map(user => (
        <User user={user} key={user.id} />
      ))} */}

        {/* 만약 배열 안의 원소가 가지고 있는 고유한 값이 없다면 map() 함수를 사용 할 때 설정하는 콜백함수의 두번째 파라미터 index 를 key 로 사용 */}
        {users.map((user, index) => (
            <User user={user} key={index} onRemove={onRemove} onToggle={onToggle} />
        ))}
    </div>
  );
}

export default React.memo(UserList);