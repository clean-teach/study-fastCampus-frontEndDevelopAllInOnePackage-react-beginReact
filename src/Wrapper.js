import React from 'react';

function Wrapper(props) {
    const style = {
        border: '2px solid black',
        padding: '16px'
    };
    return (
        <div style={style}>
            {props.children} {/* 컴포넌트 내부에 컴포넌트를 보이기 위해서는 props/children 을 사용하여야 한다. */}
        </div>
    )
}

export default Wrapper;