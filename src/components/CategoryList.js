import styled from "styled-components";
import CategoryListItem from "./CategoryListItem";

const CategoryWrapper = styled.div`
  display: flex;
  margin: 10px 20px;
  flex-direction: column;
  border-radius: 10px;

  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  background-color: white;
  min-width: 300px;
`;

const CategoryWrapperHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #a7c6ff;
  padding: 8px 20px;
  border-radius: 10px 10px 0px 0px;
`;

const CategoryListItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-radius: 10px;

  background-color: #e6e8ec;
`;

const CategoryListItemAddWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
  padding: 8px 20px;

  background-color: #eef0f2;
  border-radius: 0px 0px 10px 10px;
`;

const ItemAddButton = styled.button`
  border: none;
  font-size: 18px;
`;
const CategoryList = ({ categoryListTitle, id, items }) => {
  return (
    <CategoryWrapper>
      <CategoryWrapperHeader>
        <div>{categoryListTitle}</div>
        <div>
          <button>+</button>
        </div>
      </CategoryWrapperHeader>
      <CategoryListItemWrapper>
        {items.map((item) => (
          <CategoryListItem key={item.id} {...item} />
        ))}
        <CategoryListItemAddWrapper>
          <div>업무개수 {items.length}</div>
          <ItemAddButton>+</ItemAddButton>
        </CategoryListItemAddWrapper>
      </CategoryListItemWrapper>
    </CategoryWrapper>
  );
};

export default CategoryList;
