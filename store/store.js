//from redux tutorial
export function createStore( reducer ){
  let state;
  let listeners = [];

  function getState(){
    return state;
  }

  function dispatch(action){
    state = reducer(state, action);
    listeners.forEach( listener => listener() );
  }

  function subscribe(listener){
    listeners.push( listener )
  }

  dispatch({})//setup the inital state

  return {getState, dispatch, subscribe}
}


//My try
// export function createContainer( reducer ){
//   let initialState = reducer( undefined, {} );
//
//   const out = {
//     state: initialState,
//     getState:function(){
//       console.log("THIS IS", this)
//       return this.state
//     },
//     handleDispatch:function( action ){
//       this.state = reducer( action, this.state)
//       this.onUpdate( this.state ).bind(this)
//     },
//     onUpdate:function(){
//       console.log("inital callback override this");
//     },
//   }
//
//   return out;
// }
