import { ADD_ITEM, DELETE_ITEM, TOGGLE_ITEM_STATUS, TOGGLE_SHOW_COMPLETED } from './constants';

export const addItem = content => {
  return { type: ADD_ITEM, content };
};

export const deleteItem = id => {
  return { type: DELETE_ITEM, id };
};

export const toggleItemStatus = id => {
  return { type: TOGGLE_ITEM_STATUS, id };
};

export const toggleFilter = () => {
  return { type: TOGGLE_SHOW_COMPLETED };
};