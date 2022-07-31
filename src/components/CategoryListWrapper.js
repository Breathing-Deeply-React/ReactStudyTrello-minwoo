import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import CategoryList from "../components/CategoryList";
import { addList } from "../store/actions/categoryActions";
const CategoryListWrapperStyle = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 8px 20px;
  flex-wrap: wrap;
`;

const AddListWrapper = styled.div`
  display: flex;
  min-height: 40px;
  width: 260px;
  margin: 10px 20px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 5px;
  color: cornflowerblue;
`;

const CategoryListWrapper = () => {
  const categoryList = useSelector((state) => state.category.categoryList);
  const dispatch = useDispatch();
  const [isAddListState, setIsAddListState] = useState();
  const [inputState, setInputState] = useState("");
  const onHandleIsAddListState = () => {
    setIsAddListState(!isAddListState);
  };

  const onHandleAddList = () => {
    const data = inputState;
    dispatch(addList(data));
    onHandleCloseAddList();
  };

  const onHandleInput = (e) => {
    setInputState(e.target.value);
  };

  const onHandleCloseAddList = () => {
    onHandleIsAddListState();
    setInputState("");
  };

  return (
    <CategoryListWrapperStyle>
      {categoryList.map((item) => (
        <CategoryList {...item} key={item.id} />
      ))}
      <AddListWrapper>
        {!isAddListState ? (
          <>
            <button onClick={onHandleIsAddListState}>add a List</button>
          </>
        ) : (
          <>
            <input value={inputState} onChange={onHandleInput} />
            <button onClick={onHandleAddList}>리스트 만들기</button>
            <button onClick={onHandleCloseAddList}>X</button>
          </>
        )}
      </AddListWrapper>
    </CategoryListWrapperStyle>
  );
};

export default CategoryListWrapper;
