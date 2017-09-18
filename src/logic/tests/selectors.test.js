import { getItems } from '../selectors';

const defaultState = {
  todos:{
    items: [
      { id: 1, content: 'Make sure items are completeable', isCompleted: true },
      { id: 2, content: 'Add filters (Use HOC)', isCompleted: false },
    ],
    showOnlyCompleted: false
  }
};


describe('selectors', () => {
  it('should return all items', () => {
    const items = getItems(defaultState);
    expect(items).toHaveLength(2);
  });

  it('should return only completed items', () => {
    defaultState.todos.showOnlyCompleted = true;
    const items = getItems(defaultState);
    expect(items).toHaveLength(1);
  });
});
