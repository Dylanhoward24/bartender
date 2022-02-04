import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

export default function* drinksSaga() {
    yield takeLatest('FETCH_RANDOM_DRINK', fetchRandomDrink);
}

function* fetchRandomDrink() {
    try {
        const response = yield axios.get('/api/drinks');
        console.log('response.data is', response);

        yield put({ type: 'SET_RANDOM_DRINK', payload: response.data.drinks});
    
    } catch (error) {
        console.log('Random Drink RapidAPI request failed', error);
    }
}