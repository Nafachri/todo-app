import logo from "./logo.svg";
import "./App.css";
import FormTodo from "./components/FormTodo";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const todoSelector = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const changeStatus = (nama) => {
    dispatch({ type: "CHANGE_STATUS_TODO", payload: nama });
  };

  return (
    <div className="App">
      <FormTodo />
      <ol>
        {todoSelector.map((todo) => (
          <li onClick={() => changeStatus(todo.nama)}>
            {todo.nama} = {todo.status.toString()}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default App;
