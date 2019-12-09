export const getlistOfEvents = () => {

  return({
    type: 'GET_LIST',
    payload: fetch('http://localhost:3000/api/events/list').then(res => res.json()),
  }
);
};
