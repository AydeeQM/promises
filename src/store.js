import createStore from 'redux-zero'

const initialState = {
    mydata: [],
    selected: 0
}

const store = createStore(initialState)
export default store