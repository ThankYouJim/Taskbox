import { listTodos } from "./graphql/queries";
import {
  createTodo as createTodoMutation,
  deleteTodo as deleteTodoMutation,
} from "./graphql/mutations";
import { API } from "aws-amplify";

export async function fetchTodos() {
  const apiData = await API.graphql({ query: listTodos });
  setTodos(apiData.data.listTodos.items);
}

export async function createTodo() {
  if (!FormData.title) return;
  await API.graphql({
    query: createTodoMutation,
    variables: { input: formData },
  });
  setTodos([...todos, formData]);
  setFormData(initialFormState);
}

export async function deleteTodo({ id }) {
  const newTodosArray = todos.filter((todo) => todo.id !== id);
  setTodos(newTodosArray);
  await API.graphql({
    query: deleteTodoMutation,
    variables: { input: { id } },
  });
}
