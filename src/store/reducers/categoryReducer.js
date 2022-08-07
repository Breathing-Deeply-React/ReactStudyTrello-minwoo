const initialState = {
  id: 3,
  itemId: 6,
  categoryList: [
    {
      categoryListTitle: "TODO",
      id: 1,
      sort: 1,
      items: [
        {
          parentId: 1,
          itemId: 1,
          sort: 1,
          itemTitle: "리액트 공부 1시간 하기",
          description: "state & props 공부하기",
        },
        {
          parentId: 1,
          itemId: 2,
          sort: 2,
          itemTitle: "리덕스 공부 1시간 하기",
          description: "리덕스를 왜쓰는지 고민해보기",
        },
      ],
    },
    {
      categoryListTitle: "DOING",
      id: 2,
      sort: 2,
      items: [
        {
          parentId: 2,
          itemId: 3,
          sort: 1,
          itemTitle: "알고리즘 문제 풀기1",
          description: "백준 1000번문제 풀이",
        },
        {
          parentId: 2,
          itemId: 4,
          sort: 2,
          itemTitle: "알고리즘 문제 풀기2",
          description: "백준 1001번문제 풀이",
        },
      ],
    },
    {
      categoryListTitle: "DONE",
      id: 3,
      sort: 3,
      items: [
        {
          parentId: 3,
          itemId: 5,
          sort: 1,
          itemTitle: "아침운동",
          description: "호수공원 3km 12분:30초 걸림",
        },
        {
          parentId: 3,
          itemId: 6,
          sort: 2,
          itemTitle: "은행업무",
          description: "적금만기 통장이랑 예금 통장 들고가기",
        },
      ],
    },
  ],
};

const categoryReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case "ADD_LIST":
      const id = prevState.id + 1;
      const newCatetory = {
        categoryListTitle: action.data,
        id,
        sort: prevState.categoryList.length + 1,
        items: [],
      };
      const categoryList = [...prevState.categoryList, newCatetory];
      return { ...prevState, categoryList, id };
    case "ADD_CARD":
      const targetCategoryList = prevState.categoryList.filter(
        (item) => item.id === action.data.id
      )[0];
      const newCard = {
        itemId: prevState.itemId + 1,
        sort: targetCategoryList.items.length + 1,
        itemTitle: action.data.itemTitle,
        description: action.data.description,
      };
      targetCategoryList.items.push(newCard);
      const newCategoryList = prevState.categoryList.map((list) =>
        list.id === action.data.id ? targetCategoryList : list
      );
      return {
        ...prevState,
        categoryList: newCategoryList,
        itemId: prevState.itemId + 1,
      };
    case "EDIT_CARD":
      const targetCategoryItem = prevState.categoryList
        .filter((item) => item.id === action.data.id)[0]
        .items.filter((item) => item.itemId === action.data.itemId)[0];

      const editedCategoryItem = {
        ...targetCategoryItem,
        itemTitle: action.data.itemTitle,
        description: action.data.description,
      };
      const editedTargetCategoryList = prevState.categoryList.filter(
        (item) => item.id === action.data.id
      )[0];

      const editedTargetCategoryListItems = editedTargetCategoryList.items.map(
        (item) => {
          return item.itemId === action.data.itemId ? editedCategoryItem : item;
        }
      );

      editedTargetCategoryList.items = editedTargetCategoryListItems;

      const editedCategoryList = prevState.categoryList.map((item) => {
        return item.id === action.data.id ? editedTargetCategoryList : item;
      });
      console.log(editedCategoryList);
      return {
        ...prevState,
        categoryList: editedCategoryList,
      };
    default:
      return prevState;
  }
};

export default categoryReducer;
