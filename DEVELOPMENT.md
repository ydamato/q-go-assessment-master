## Tasks done
As written in the README, I try to do everyting in 90 minutes.
1. Add the ability to delete items.
  - Create a component Item, called in Itemslist, to be a clearer visibility on structure/actions
  - Add a button to Item component calling new action
  - Create action DELETE_ITEM

2. Be able to mark items as complete. And then toggle them back to incomplete.
  - Add a new attribute 'isCompleted' in the default state of items
  - Add buttons to Item component to toggle item status
  - Create action TOGGLE_ITEM_STATUS

3. Add the ability to switch between viewing all items and only completed items.
  - Add a new attribute 'showOnlyCompleted' in the default state of todos
  - Create a new component ItemsFilter to manage the filtering
  - Add buttons to ItemsFilter component to toggle the fitler

4. Other
  - A new file 'selectors.js' has been created and contains all the state selector

## Tests
  - Tests have been created for all the new behaviours

## Styles
  - No styles were created, no enough time to focus on it

## Technical choices
  - HOC has not been used to manage the filter, as the filtering is handled by a selector, called during the mapStateToProps of ItemsList
  - No tests have been done to for DOM events (click events), as there is no logic inside the components. All the events trigger a action, which is tested into the test file reducer.test.js
