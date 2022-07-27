const initialState = [
  {
    categoryListTitle: "TODO",
    id: 1,
    items: [
      {
        id: 1,
        itemTitle: "리액트 공부 1시간 하기",
      },
      {
        id: 2,
        itemTitle: "리덕스 공부 1시간 하기",
      },
    ],
  },
  {
    categoryListTitle: "DOING",
    id: 2,
    items: [
      {
        id: 1,
        itemTitle: "알고리즘 문제 풀기1",
      },
      {
        id: 2,
        itemTitle: "알고리즘 문제 풀기2",
      },
    ],
  },
  {
    categoryListTitle: "DONE",
    id: 3,
    items: [
      {
        id: 1,
        itemTitle: "아침운동",
      },
      {
        id: 2,
        itemTitle: "은행업무",
      },
    ],
  },
];

const categoryReducer = (prevState = initialState, action) => {
  switch (action.type) {
    default:
      return prevState;
  }
};

export default categoryReducer;
