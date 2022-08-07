import {
  ADD_CARD,
  ADD_LIST,
  EDIT_CARD,
  REMOVE_CARD,
  REMOVE_LIST,
} from "../types/category";

const addList = (data) => {
  return {
    type: ADD_LIST,
    data,
  };
};

const addCard = (data) => {
  return {
    type: ADD_CARD,
    data,
  };
};

const editCard = (data) => {
  return {
    type: EDIT_CARD,
    data,
  };
};

const removeList = (data) => {
  return {
    type: REMOVE_LIST,
    data,
  };
};

const removeCard = (data) => {
  return {
    type: REMOVE_CARD,
    data,
  };
};
export { addList, addCard, editCard, removeList, removeCard };
