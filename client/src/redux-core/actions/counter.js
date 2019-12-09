export const changeCounter = (value) => {
  return({
    type: 'INCREMENT',
    payload: value,
  }
);
};
