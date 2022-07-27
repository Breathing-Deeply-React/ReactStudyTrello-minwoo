import { Link } from "react-router-dom";
import styled from "styled-components";

const JjangHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: cornflowerblue;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  font-family: "Pacifico";
  color: white;
  width: 5%;
  & a {
    color: white;
    font-size: 18px;
    text-decoration: none;
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 20px;
  width: 50%;
`;
const SearchWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0px 10px;
  width: 30%;
`;

const StatusWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 10px;
  width: 15%;
`;

const Header = () => {
  return (
    <JjangHeader>
      <TitleWrapper>
        <Link to={"/"}>Jjangrello</Link>
      </TitleWrapper>
      <ButtonWrapper>
        <button>+</button>
      </ButtonWrapper>
      <SearchWrapper>
        <input />
      </SearchWrapper>
      <StatusWrapper>
        <button>버튼1</button>
        <button>버튼2</button>
        <button>버튼3</button>
      </StatusWrapper>
    </JjangHeader>
  );
};

export default Header;
