export const getItems = state => state.todos.items.filter(item => !isShowOnlyCompleted(state) || item.isCompleted);
export const isShowOnlyCompleted = state => state.todos.showOnlyCompleted;