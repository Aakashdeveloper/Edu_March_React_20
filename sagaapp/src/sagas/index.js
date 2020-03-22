import { put, takeLatest, all} from 'redux-saga/effects';

function * fetchMovies(){
    const json = yield fetch('https://ngmovies.herokuapp.com/api/getMovies')
                .then((res) => res.json())
    yield put({type:'MOVIES_LIST', json:json, })
}

function * actionWatcher(){
    yield takeLatest('GET_MOVIES', fetchMovies)
}


export default function * rootSaga(){
    yield all([
        actionWatcher()
    ]);
}