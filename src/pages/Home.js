import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import CategoryList from "../components/CategoryList";
import Header from "../components/Header";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #e6e8ec;
`;
const CategoryListWrapper = styled.div`
  display: flex;
  padding: 8px 20px;
  flex-wrap: wrap;
`;

const NewCategoryWrapper = styled.div`
  display: flex;
  margin: 10px 20px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  background-color: white;
  padding: 8px 20px;
  border-radius: 10px;
  cursor: pointer;
  color: cornflowerblue;
  &:hover {
    background-color: #a7c6ff;
    color: white;
  }
`;
const Home = () => {
  const categoryList = useSelector((state) => state.category);
  return (
    <Wrapper>
      <Header>헤더</Header>
      <CategoryListWrapper>
        {categoryList.map((item) => (
          <CategoryList {...item} key={item.id} />
        ))}
        <NewCategoryWrapper
          onClick={() => alert("새로운 카테고리 만드는 작업 추가하기")}
        >
          <div>
            <h1>+</h1>
          </div>
          <div>새로운 카테고리</div>
        </NewCategoryWrapper>
      </CategoryListWrapper>
    </Wrapper>
  );
};

export default Home;
