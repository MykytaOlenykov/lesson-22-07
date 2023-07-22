import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import { Text } from 'components';
import { DeleteButton, TodoWrapper, EditButton } from './Todo.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, editTodo } from 'redux/slice';
import { useState } from 'react';
import { selectTodos } from 'redux/selectors';

export const Todo = ({ text, counter, onClick, id }) => {
  const [isEditing, setIsEditing] = useState(false);

  const [editedValue, setEditedValue] = useState(text);

  const todos = useSelector(selectTodos);

  const dispatch = useDispatch();

  const editFormSubmitHandler = e => {
    e.preventDefault();

    const { value } = e.target.elements.edit;

    const isNotValid = todos.find(
      todo => todo.text.toLowerCase() === value.toLowerCase()
    );

    if (isNotValid) {
      alert('Така туду вже є');
      return;
    }
    dispatch(editTodo({ text: value, id }));

    setIsEditing();
  };

  return (
    <>
      <TodoWrapper>
        <Text textAlign="center" marginBottom="20px">
          TODO #{counter}
        </Text>
        <Text>{text}</Text>
        <DeleteButton type="button" onClick={() => dispatch(deleteTodo(id))}>
          <RiDeleteBinLine size={24} />
        </DeleteButton>
        <EditButton
          type="button"
          onClick={() => setIsEditing(prevState => !prevState)}
        >
          <RiEdit2Line size={24} />
        </EditButton>
      </TodoWrapper>

      {isEditing && (
        <form onSubmit={editFormSubmitHandler}>
          <label htmlFor="edit">New text</label>
          <input
            id="edit"
            label="Enter some text"
            name="edit"
            value={editedValue}
            type="text"
            onChange={e => {
              setEditedValue(e.target.value);
            }}
          />
          <button type="submit">Save</button>
        </form>
      )}
    </>
  );
};
