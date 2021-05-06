import Paragraph from "Components/Paragraph/Paragraph";
import { useSelector } from "react-redux";
import { CombinedState } from "redux";
import { Todos } from "type";

const TodoCounter = () => {
  const todos = useSelector((state: CombinedState<{ todos: Todos }>) => state.todos);
  const todoLength = todos.length;
  // console.log(todos.map(todo => todo.completed));

  const completedCounter = todos.filter(todo => todo.completed).length;

  return (
    <>
      <Paragraph>{`Completed ${completedCounter}`}</Paragraph>
      <Paragraph>{`All ${todoLength}`}</Paragraph>
    </>
  );
};

export default TodoCounter;
