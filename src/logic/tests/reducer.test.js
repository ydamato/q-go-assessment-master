import reducer, { initialState } from '../reducer';
import { addItem, deleteItem, toggleItemStatus, toggleFilter } from '../actions';

describe('reducer', () => {
  it('should return state for unknown action', () => {
    const mockState = { test: 'testItem' };
    const mockAction = { type: 'mystery-meat' };
    const result = reducer(mockState, mockAction);
    expect(result).toEqual(mockState);
  });

  it('should use initial state if state not provided', () => {
    const mockAction = { type: 'mystery-meat' };
    const result = reducer(undefined, mockAction);
    expect(result).toEqual(initialState);
  });

  it('should add new items on ADD_ITEM', () => {
    const mockAction = addItem('Test Content');
    const result = reducer(undefined, mockAction);
    expect(result.items).toHaveLength(3);
    expect(result.items[2].id === 3);
    expect(result.items[2].content === 'Test Content');
  });

  it('should remove item on REMOVE_ITEM', () => {
    const mockAction = deleteItem(1);
    const result = reducer(undefined, mockAction);
    expect(result.items).toHaveLength(1);
    expect(result.items[0].id === 2);
  });

  it('should set item completed on TOGGLE_ITEM_STATUS', () => {
    const mockAction = toggleItemStatus(1);
    const result = reducer(undefined, mockAction);
    expect(result.items[0].isCompleted === true);
  });

  it('should set item incompleted on TOGGLE_ITEM_STATUS', () => {
    let mockAction = toggleItemStatus(1);
    let result = reducer(undefined, mockAction);
    expect(result.items[0].isCompleted === true);

    mockAction = toggleItemStatus(1);
    result = reducer(undefined, mockAction);
    expect(result.items[0].isCompleted === false);
  });

  it('should set filter to "all" on TOGGLE_SHOW_COMPLETED', () => {
    const mockAction = toggleFilter();
    const result = reducer(undefined, mockAction);
    expect(result.showOnlyCompleted === false);
  });

  it('should set filter to "only complete" on TOGGLE_SHOW_COMPLETED', () => {
    let mockAction = toggleFilter();
    let result = reducer(undefined, mockAction);
    expect(result.showOnlyCompleted === false);

    mockAction = toggleFilter();
    result = reducer(undefined, mockAction);
    expect(result.showOnlyCompleted === true);
  });


});
