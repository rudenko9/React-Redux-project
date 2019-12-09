const initState = {
value: 0,

};

const counterReducer = (state = initState, action) => {

  switch(action.type){
    case 'INCREMENT' :
    return({
      ...state,
      value: action.payload + state.value,
    });
  }
  return state;
};

export default counterReducer;
