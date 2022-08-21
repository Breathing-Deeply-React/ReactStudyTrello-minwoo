import styled from "styled-components";

const StyeldButton = styled.button`
  border: ${(props) => props.border};
  padding: ${(props) => props.padding};
  background-color: ${(props) => props.bgColor};
  margin: ${(props) => props.margin};
  color: ${(props) => props.color};
  border-radius: ${(props) => props.borderRadius};
  font-size: ${(props) => props.fontSize};
  cursor: pointer;
`;

const AddCancleButton = ({
  onClick,
  text,
  border,
  padding,
  bgColor,
  margin,
  color,
  borderRadius,
  fontSize,
}) => {
  return (
    <StyeldButton
      onClick={onClick}
      border={border}
      padding={padding}
      bgColor={bgColor}
      margin={margin}
      color={color}
      borderRadius={borderRadius}
      fontSize={fontSize}
    >
      {text}
    </StyeldButton>
  );
};

export default AddCancleButton;

AddCancleButton.defaultProps = {
  padding: "0px",
  margin: "0px",
  border: "1px solid black",
  bgColor: "transparent",
  color: "black",
  borderRadius: "4px",
  fontSize: "16px",
};
