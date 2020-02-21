1. What problem does the context API help solve?

   - Context API solve the complexity created by props drilling to many levels of nested components, not all of which need the props, by allowing us to label some components as consumers of the context state.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

   1 - Actions in Redux are payloads of information sent to the store.

   2 - Reductes in Redux are functions that specify how the state changes when certain actions are sent to the store.

   3 - Store in Redux is the place where the whole state tree is stored for the entire aplication. It is known as a "single source of truth" because sending an action to the store is the only way to change the date in the store.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

   - Application state is state that is usefull or required by multiple components across the application, while compontent state is state that is only required for a particular component (like the value of a form field).

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

   Redux thunk is middleware for redux that allows async functions to run as actions. Action creators are intercepted by thunk so that rerendering doesn't occur until all appropriate data is retrieve by an async function.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

   I enjoy Redux the most. It is the most different from what I knew before, but is clearly very powerful for dealing with large and complex state.
