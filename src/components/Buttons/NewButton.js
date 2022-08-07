import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addList } from "../../store/actions/categoryActions";
const NewButtonWrapper = styled.div`
  display: flex;
  min-height: 40px;
  width: ${({ type }) => (type === "card" ? "100%" : "260px")};
  margin: ${({ type }) => (type === "card" ? "0" : "10px 20px")};
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 5px;
  color: cornflowerblue;
`;

const TitleInput = styled.input`
  padding: 8px 12px;
  width: 100%;
  box-sizing: border-box;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  margin-top: 8px;
  display: flex;
  justify-content: flex-start;
`;
const AddButton = styled.div`
  padding: 8px 20px;
  border: none;
  background-color: #a7c6ff;
  color: white;
  margin-right: 12px;
`;

const NewButton = ({ type }) => {
  const [flagState, setFlagState] = useState(false);
  const [inputState, setInputState] = useState("");
  const categoryList = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const onHandleFalg = () => {
    setFlagState(!flagState);
  };
  const onHandleInput = (e) => {
    setInputState(e.target.value);
  };

  const onHandleCancle = () => {
    setInputState("");
    onHandleFalg();
  };

  const onHandleAdd = () => {
    const data = inputState;
    if (type !== "card") {
      dispatch(addList(data));
      onHandleCancle();
    }
  };
  return (
    <NewButtonWrapper type={type}>
      {!flagState ? (
        <div onClick={onHandleFalg}>
          <span>+</span>
          {type === "card" ? (
            <>Add a card</>
          ) : (
            <>{categoryList.length === 0 ? "Add a list" : "Add another list"}</>
          )}
        </div>
      ) : (
        <>
          {type === "card" ? (
            <textarea />
          ) : (
            <TitleInput onChange={onHandleInput} value={inputState} />
          )}
          <ButtonWrapper>
            <AddButton onClick={onHandleAdd}>추가하기</AddButton>
            <button onClick={onHandleCancle}>X</button>
          </ButtonWrapper>
        </>
      )}
    </NewButtonWrapper>
  );
};

export default NewButton;
