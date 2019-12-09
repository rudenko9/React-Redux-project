const initState = {
isLoading: false,
error: null,
data: [],

};

const list = (state = initState, action) => {
// we have 3 action types to track server responce
  switch(action.type){
    case 'GET_LIST' + '_PENDING':
    return({
      ...state,
      isLoading: true
    });

    case 'GET_LIST' + '_FULFILLED':
    return({
      ...state,
      isLoading: false,
      data: action.payload,
    });

    case 'GET_LIST' + '_REJECTED':
    return({
      ...state,
      isLoading: false,
      error: action.payload,
  });

  }

  return state;
};

export default list;
