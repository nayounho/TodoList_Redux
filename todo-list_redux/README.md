# React를 이용한 TodoList 

## overview
1. React (HTML + JS) - 상태(useState, useReducer, context API)
2. Styled-components(CSS)
3. Redux (context API를 사용하여 크기가 큰 app를 개발하게 되면 provider가 지나치게 많아 지게 되어 Redux의 store를 사용)
4. Router (SPA : single page application - 한 페이지안에서 페이지 이동을 하지 않고 페이지 이동 효과를 주기 위한 라이브러리)
5. Firebase(auth(인증), firestore(DB), storege(DB))

- Todo-list
    - todo CRUD
    - nav(Complete, All, Active)
 ## todoLIst UI 작성
 1.  components -> container -> pages
 2.  component를 만들 때 재사용성을 고려하여 작성하고 완성된 component들을 container에 모아서 작성
 3.  container에서 우리가 필요한 item을 props를 통하여 생성 
 4.  component는 단순하게 조각이라고 생각하고 어디에서든 가져다 쓸 수 있게 작성

## list rendering
1. 배열형태의 자료구조를 가져와서 map이나 filter 메서드를 사용하여 rendering 한다 ex) TodoList에서 data의 배열 구조의 자료를 map를 이용하여 rendering한다

## Redux
1. 상태를 useState로 관리하다보니 많은 곳에서 상태를 불러올 경우가 많아 Redux사용하기로 함
2. Redux를 사용하기 위한 준비 (store, reducer, initialState) -> store가 필요하여 만들려고 했더니 reducer가 필요했고 reducer를 만들려고 했더니 상태가 필요하여 initialState가 필요했다
3. store를 최상단에 배치하기 위하여 Provider를 사용 ex) index.js 확인
4. 여러개의 reducer를 관리하기 위해서는 rootReducer(combineReducers 를 사용하여 생성)를 생성하여 createStore()에 넣어준다 ex) rootReducer 확인
5. dispatch(useDispatch) 상태 조작 -> 상태를 조작하기 위해서 actionCreate 함수를 작성 ex) todosReducer 와 newTodoReducer 확인
6. 이벤트핸들러를 작성하여 해당 tag에 사용
7. dispatch를 연달아 사용했을 경우 순서가 보장이 안되어 reducer안에서 id 값을 조작 ex) todosReducer 확인
