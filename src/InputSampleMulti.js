import React, { useState, useRef } from 'react';

function InputSample() {
    // 상태의 형태 정의
    const [inputs, setInputs] = useState({
        username: '',
        nickname: ''
    });

    // 비구조 할당으로 상태의 값 추출
    const {username, nickname} = inputs;

    const userNameInput = useRef(); // ref 객체 생성

    const onChange = (e) => {
        const {value, name} = e.target; // 해당 이벤트가 실행된 input태그의 속성 값들 추출
        setInputs({
            ...inputs, // 스프레드 문법 (기존의 객체 복사)
            [name]: value // name 속성의 값과 같은 이름의 객체 값 수정
        });
    };

    const onReset = () => {
        setInputs({
            username: '',
            nickname: ''
        });
        userNameInput.current.focus(); // ref 로 선택한 DOM에 focus
    };


    return (
        <div>
            <input name='username' placeholder="이름" onChange={onChange} value={username} ref={userNameInput} /> {/* ref 객체 할당 */}
            <input name='nickname' placeholder="닉네임" onChange={onChange} value={nickname} />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                <b>이름:</b> {username} (<b>닉네임:</b> {nickname})
            </div>
        </div>
    );
}

export default InputSample;