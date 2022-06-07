import styled from 'styled-components';

const ButtonContainer = styled.div`
  margin: 20px 0px;
  width: 400px;
  flex-direction: row;
  justify-content: flex-start;
  display: flex;
`;
const RightButton = styled.button`
  padding: 0px 4px;
  background-color: white;
  border-radius: 2px;
`;
const ForwardButton = styled.button`
  padding: 0px 4px;
  margin-left: 4px;
  background-color: white;
  border-radius: 2px;
`;

export const ControlButtons = ({ updateDirection, moveForward }) => {
  return (
    <ButtonContainer>
      <RightButton onClick={updateDirection}>Turn right</RightButton>
      <ForwardButton onClick={moveForward}>Move forward</ForwardButton>
    </ButtonContainer>
  );
};
