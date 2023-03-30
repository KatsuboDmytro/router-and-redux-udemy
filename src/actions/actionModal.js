export const openModal = (id) => {
  return {
    type: 'OPEN_MODAL',
    id
  }
};

export const closeModal = (id) => {
  return {
    type: 'CLOSE_MODAL',
    id
  }
};