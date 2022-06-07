import styled from 'styled-components';

const CellContainer = styled.div`
  flex: 1;
  border: 1px solid black;
  text-align: center;
  font-size: 2em;
`;

export const Cell = ({ columnIndex, rowIndex, position, direction }) => {
  const { row, column } = position;
  if (columnIndex === column && rowIndex === row) {
    return <CellContainer data-testid="cell">{direction}</CellContainer>;
  }
  return <CellContainer data-testid="cell" />;
};
