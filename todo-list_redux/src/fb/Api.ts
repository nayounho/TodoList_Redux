import { Todo } from "type";
import { todosCollectionRef } from "./firebase";

const addTodos = async (newTodos: Todo) => {
  await todosCollectionRef.doc().set(newTodos);
};

export { addTodos };
