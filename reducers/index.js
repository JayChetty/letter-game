import Immutable from 'immutable'

const initalState = Immutable.fromJS({
    deck: [1,1,1,1,1,2,2,3,3,4,4,5,5,6,7,8],
  hidden: [1],
  visible:[1,2,3],
  players:[ {hand:[1], discard:[] },{hand:[1], discard:[]}]
})

function gameReducer(state=initalState, action){
  return state;
}


export default gameReducer;
