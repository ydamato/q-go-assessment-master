import { call, put, takeLatest } from 'redux-saga/effects'
import { FETCH_TODOS_REQUEST, FETCH_TODOS_REQUEST_SUCCESS } from '../logic/constants'

const ajaxFetchTodos = () => 
  fetch(`http://localhost:3001/items`)
  .then(response => response.json())
  .catch(e => console.log(e));


// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchTodos(action) {
  const items = yield call(ajaxFetchTodos);
  yield put({type: FETCH_TODOS_REQUEST_SUCCESS, items});
}

function* requestTodosSaga() {
  yield takeLatest(FETCH_TODOS_REQUEST, fetchTodos);
}

export default requestTodosSaga;