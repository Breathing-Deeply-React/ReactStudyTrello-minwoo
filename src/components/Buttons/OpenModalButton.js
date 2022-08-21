import styled from "styled-components";

const StyledOpenCloseModalButton = styled.button`
  position: ${(props) => props.position};
  border: ${(props) => props.border};
  background-color: ${(props) => props.bgColor};
  margin: ${(props) => props.margin};
  cursor: pointer;
`;

const OpenCloseModalButton = ({
  onClick,
  text,
  border,
  padding,
  bgColor,
  margin,
  color,
  borderRadius,
  fontSize,
  position,
}) => {
  return (
    <StyledOpenCloseModalButton
      onClick={onClick}
      border={border}
      padding={padding}
      bgColor={bgColor}
      margin={margin}
      color={color}
      fontSize={fontSize}
      borderRadius={borderRadius}
      position={position}
    >
      {text}
    </StyledOpenCloseModalButton>
  );
};

export default OpenCloseModalButton;
OpenCloseModalButton.defaultProps = {
  padding: "0px",
  margin: "0px",
  border: "1px solid black",
  bgColor: "transparent",
  color: "black",
  borderRadius: "4px",
  fontSize: "16px",
  position: "static",
};
