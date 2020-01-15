export const getlistOfEvents = () => {

  return({
    type: 'GET_LIST',
    payload: fetch('http://localhost:3000/api/events/list').then(res => res.json()),
  }
);
};


export const addlistOfEvents = (newEvent) => {

  return({
    type: 'ADD_NEW_LIST',
    payload: newEvent,
  }
);
};


export const deleteEvent = (eventId) => {

  return({
    type: 'DELETE_EVENT',
    payload: eventId,
  }
);
};
