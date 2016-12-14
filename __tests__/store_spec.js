import { createStore } from '../store/store.js';

function testReducer(state={a: 1, b:2}, action){
  return state;
};

test('initial state is that of reducer', () => {
  const store = createStore( testReducer );
  expect( store.getState() ).toEqual( {a: 1, b:2} );
});
