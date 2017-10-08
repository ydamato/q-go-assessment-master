import { ADD_ITEM, DELETE_ITEM, TOGGLE_ITEM_STATUS, TOGGLE_SHOW_COMPLETED, FETCH_TODOS_REQUEST_SUCCESS } from './constants';
import _ from 'lodash'

export const initialState = {
  items: [
    { id: 1, content: 'Make sure items are completeable', isCompleted: false },
    { id: 2, content: 'Add filters (Use HOC)', isCompleted: false }
  ],
  showOnlyCompleted: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const newItem = {
        id: state.items.length + 1,
        content: action.content,
        isCompleted: false
      };

      return {
        ...state,
        items: [...state.items, newItem],
      };


    case DELETE_ITEM:
      const newItemList = state.items.filter(item => item.id !== action.id)
      
      return {
        ...state,
        items: newItemList,
      };

    case TOGGLE_ITEM_STATUS:
      const { id } = action;
      let newState = _.merge({}, state);
      newState.items.forEach((item) => {
        if(item.id === id) {
          item.isCompleted = !item.isCompleted;
        }
      });
      return newState;

      case TOGGLE_SHOW_COMPLETED:
      return _.merge(
        {},
        state,
        {
          showOnlyCompleted: !state.showOnlyCompleted
        }
      );

      case FETCH_TODOS_REQUEST_SUCCESS:
      const { items } = action
      return {
        ...state,
        items
      }

    default:
      return state;
  }
};

export default reducer;
