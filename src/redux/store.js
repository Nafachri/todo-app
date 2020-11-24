import { createStore, combineReducers } from "redux";
import todoReducer from "../redux/reducers";

//Cara Combine Reducer
// const rootReducer = combineReducers({
//     todo: todoReducer,
//     count: countReducer
// })

//cara panggil combine reducer :
// (state) => state.todo.todos
// (state) => state.count.angka

export default createStore(todoReducer);
// export default createStore(rootReducer); Cara export combine reducer
