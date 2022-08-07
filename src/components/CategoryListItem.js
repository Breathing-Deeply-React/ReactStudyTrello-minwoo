import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Modal from "./modals/Modal";
import ModalContent from "./modals/ModalContents/ModalContent";

const ItemWrapper = styled.div`
  padding: 12px 20px;
  box-sizing: border-box;
  margin-bottom: 10px;
  width: 100%;
  cursor: pointer;
  background-color: white;
`;

const CategoryListItem = ({ itemTitle, id, itemId }) => {
  const [modalState, setModalState] = useState(false);
  const [typeState, setTypeState] = useState("");
  const openModal = (type) => {
    setTypeState(type);
    setModalState(true);
  };

  const closeModal = () => {
    setModalState(false);
  };
  return (
    <ItemWrapper>
      {modalState === true ? (
        <Modal
          isOpen={modalState}
          close={closeModal}
          children={<ModalContent id={id} itemId={itemId} type={typeState} />}
        />
      ) : null}

      <div onClick={() => openModal("read")}>{itemTitle}</div>
      <div>
        <button onClick={() => openModal("write")}>수정버튼</button>
      </div>
    </ItemWrapper>
  );
};

export default CategoryListItem;
