import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Header from "../components/Header";
import Modal from "../components/modals/Modal";
import CategoryListWrapper from "../components/CategoryListWrapper";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #e6e8ec;
`;

const Home = () => {
  return (
    <>
      <Wrapper>
        <Header>헤더</Header>
        <CategoryListWrapper />
      </Wrapper>
    </>
  );
};

export default Home;
