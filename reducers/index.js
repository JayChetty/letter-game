import Immutable from 'immutable'

const initalState = Immutable.Map({
  deck: Immutable.List([1,1,1,1,1,2,2,3,3,4,4,5,5,6,7,8])
})

function gameReducer(state=initalState, action){
  return state;
}


export default gameReducer;
