import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addCard, editCard } from "../../../store/actions/categoryActions";

const ContentWrapper = styled.div`
  width: 100%;
`;

const TitleInput = styled.input`
  padding: 8px 20px;
  width: 300px;
`;

const DescriptionTextArea = styled.textarea`
  padding: 8px 20px;
  width: 100%;
  box-sizing: border-box;
  height: 300px;
`;

const ModalContent = ({ type, id, itemId, close }) => {
  const [state, setState] = useState({
    itemTitle: "",
    description: "",
  });
  const dispatch = useDispatch();
  const categoryList = useSelector((state) =>
    state.category.categoryList.filter((item) => item.id === id)
  )[0];

  const fetchListItem = (itemId) => {
    const item = categoryList.items.filter((item) => item.itemId === itemId)[0];
    setState({ itemTitle: item.itemTitle, description: item.description });
  };

  useEffect(() => {
    if (itemId !== -1) {
      fetchListItem(itemId);
    }
  }, []);
  const onHandleContent = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const itemTitleInput = useRef();
  const descriptionTextArea = useRef();
  const onHandleSubmit = () => {
    // itemId가 -1인 경우 새로운 카드를 생성하는 것
    const data = {
      id,
      itemId,
      itemTitle: state.itemTitle,
      description: state.description,
    };
    itemId === -1 ? dispatch(addCard(data)) : dispatch(editCard(data));
  };

  const onHandleClearState = () => {
    close();
  };

  return (
    <ContentWrapper>
      <div>
        {type === "write" ? (
          <>
            <TitleInput
              name="itemTitle"
              value={state.itemTitle}
              onChange={onHandleContent}
              ref={itemTitleInput}
            />
          </>
        ) : (
          <>
            <div>{state.itemTitle}</div>
          </>
        )}
        <div>in List {categoryList.categoryListTitle}</div>
      </div>
      <div>
        <h3>Description</h3>
        {type === "write" ? (
          <>
            <DescriptionTextArea
              name="description"
              value={state.description}
              onChange={onHandleContent}
              ref={descriptionTextArea}
            />
          </>
        ) : (
          <>
            <div>{state.description}</div>
          </>
        )}
      </div>
      <div>
        {type === "write" ? (
          <>
            <div>
              <button onClick={onHandleSubmit}>
                {itemId === -1 ? "추가하기" : "수정하기"}
              </button>
              <button onClick={onHandleClearState}>취소하기</button>
            </div>
          </>
        ) : (
          <>
            <div>
              <button onClick={close}>닫기</button>
            </div>
          </>
        )}
      </div>
    </ContentWrapper>
  );
};

export default ModalContent;

ModalContent.defaultProps = {
  type: "",
  id: -1,
  itemId: -1,
};
