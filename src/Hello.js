import React from 'react';

// function Hello(props) {
//     const {color, name} = props; // 비구조 할당 첫번째 방법
//     console.log(props);
//     return <div  style={{ color: color }}>안녕하세요! {name}</div>
// }
function Hello({color, name}) { // 비구조 할당 두번째 방법
    return <div  style={{ color: color }}>안녕하세요! {name}</div>
}

Hello.defaultProps = { // 전달 되는 속성이 없을 경우 기본값 설정
    name: '이름 없음',
    color: '#000000'
}

export default Hello;