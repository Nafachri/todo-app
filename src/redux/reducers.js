const initialState = {
  todos: [],
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO":
      console.log(action.payload);
      const newTodos = [...state.todos, action.payload];
      return {
        todos: newTodos,
      };
    case "CHANGE_STATUS_TODO":
      console.log(action.payload);

    default:
      return state;
  }
}
