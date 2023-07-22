import { createSelector } from '@reduxjs/toolkit';

export const selectTodos = state => state.todos.items;

export const selectFilter = state => state.filter;

export const selectVisibledTodos = createSelector(
  [selectTodos, selectFilter],
  (todos, filter) =>
    todos.filter(({ text }) => text.toLowerCase().includes(filter))
);
