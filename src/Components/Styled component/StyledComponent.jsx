import styled from "styled-components";

const StyledButton = styled.button`
  color: white;
  background-color: red;
  padding: 10px;
  margin: 10px;
  border: none;
  cursor: pointer;
`;



const StyledComponent = () => {
  return (
    <div>
      ak al KDAL L
      <StyledButton>Submit Button</StyledButton>
    </div>
  );
};

export default StyledComponent;
