export function createContainer( reducer ){
  let initialState = reducer( undefined, {} );

  const out = {
    state: initialState,
    getState:function(){
      console.log("THIS IS", this)
      return this.state
    },
    handleDispatch:function( action ){
      this.state = reducer( action, this.state)
      this.onUpdate( this.state ).bind(this)
    },
    onUpdate:function(){
      console.log("inital callback override this");
    },
  }

  return out;
}
