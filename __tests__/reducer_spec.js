import gameReducer from '../reducers/index';

test('starts with 12 cards in the deck', () => {
  expect( gameReducer(undefined, {}).toJS().deck.length ).toBe(16);
});
