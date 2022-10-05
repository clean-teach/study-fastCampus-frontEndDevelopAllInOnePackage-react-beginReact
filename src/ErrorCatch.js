import React from 'react';

function UserErrorCatch({user, users, onToggle}){
    // if (!user || !users) {
    //     return null;
    // }
    return (
        <>
            <div>
                <b>Id</b> : {user.id}
            </div>
            <div>
                <b>User Name</b> : {user.username}
            </div>
            <ul>
                {users.map(user => (
                    <li
                        key={user.id}
                        onClick={() => onToggle(user.id)}
                    >
                        {user.username}
                    </li>
                ))}
            </ul>
        </>
    )
}

UserErrorCatch.defaultProps = {
    onToggle: () => {
        console.warn('onToggle is missing!')
    }
}

export default UserErrorCatch;