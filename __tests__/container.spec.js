import { createContainer } from '../container/container.js';

function testReducer(state={a: 1, b:2}, action){
  return state;
};

test('initial state is that of reducer', () => {
  const container = createContainer( testReducer );
  expect( container.getState() ).toEqual( {a: 1, b:2} );
});
