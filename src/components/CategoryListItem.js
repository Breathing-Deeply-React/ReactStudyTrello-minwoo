import styled from "styled-components";

const ItemWrapper = styled.div`
  padding: 12px 20px;
  box-sizing: border-box;
  margin-bottom: 10px;
  width: 100%;
  background-color: white;
`;

const CategoryListItem = ({ itemTitle }) => {
  return <ItemWrapper>{itemTitle}</ItemWrapper>;
};

export default CategoryListItem;
