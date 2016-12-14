import gameReducer from '../reducers/index';

test('starts with 10 cards in the deck', () => {
  expect( gameReducer(undefined, {}).deck.length ).toBe(11);
});

test('starts with 1 hidden card', () => {
  expect( gameReducer(undefined, {}).hidden.length ).toBe(1);
});

test('starts with 3 visible cards', () => {
  expect( gameReducer(undefined, {}).visible.length ).toBe(3);
});

test('starts with 2 players', () => {
  expect( gameReducer(undefined, {}).players.length ).toBe(2);
});

test('player starts with a card in their hand', () => {
  expect( gameReducer(undefined, {}).players[0].hand.length ).toBe(1);
});

test('player starts empty with discard', () => {
  expect( gameReducer(undefined, {}).players[0].discard.length ).toBe(0);
});
