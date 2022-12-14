import React from 'react';
import Hello from './Hello';
import './App.css'
import Wrapper from './Wrapper';
import InputSample from './InputSample';
import InputSampleMulti from './InputSampleMulti';
import Counter from './Counter';
import CounterUseReducer from './CounterUseReducer';
import CreateUsersAndListRender from './CreateUsersAndListRender';
import CreateUsersAndListRenderUseReducer from './CreateUsersAndListRenderUseReducer';
import HelloClass from './HelloClass';
import CounterClass from './CounterClass';
import UserErrorCatch from './ErrorCatch';
import ErrorBoundary from './ErrorBoundary';

function App() {
  const name = 'React';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,
    padding: '1rem'
  };
  const user = {
    id: 1,
    username: 'velopert'
  };

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
          <h2><mark>useState()</mark>로 상태 관리</h2>
          <Counter />
        </li>
        <li>
          <h2>input 상태 관리</h2>
          <InputSample />
        </li>
        <li>
          <h2>input 여러개 상태 관리 및 <mark>useRef</mark>로 DOM 선택</h2>
          <InputSampleMulti/>
        </li>
        <li>
          <h2>배열 렌더링 / <mark>useRef()</mark>로 변수 관리 / 배열 항목 추가, 제거, 수정, <mark>useEffect</mark>, <mark>useMemo</mark>, <mark>useCallback</mark>, <mark>React.memo</mark></h2>
          <CreateUsersAndListRender />
        </li>
        <li>
          <h2>useReducer()로 상태 관리 </h2>
          <CounterUseReducer />
          <h3><mark>useReducer()</mark> 을 사용해서 상태 추가, 제거 수정 관리 / <mark>커스텀 Hook</mark> 사용해보기 / <mark>Context API</mark> 를 사용한 전역 값 관리 / <mark>Immer</mark>를 사용한 더 쉬운 불변성 관리</h3>
          <CreateUsersAndListRenderUseReducer />
        </li>
        <li>
          <h2>클래스형 컴포넌트</h2>
          <HelloClass color="red" isSpecial />
          <h3>커스텀 메서드 만들기 / this가 컴포넌트 인스턴스를 가르키게 만들기 / 상태 선언하기 / 상태 업데이트하기 / setState 의 함수형 업데이트</h3>
          <CounterClass />
        </li>
        <li>
          <h2>componentDidCatch 로 에러 잡아내기 / Sentry 연동</h2>
          {/* <UserErrorCatch user={user} /> */}
          <ErrorBoundary>
            <UserErrorCatch />
          </ErrorBoundary>
        </li>
      </ul>
    </>
    /* HTML 여러줄 주석 */
    // HTML 한줄 주석
  );
}

export default App;
