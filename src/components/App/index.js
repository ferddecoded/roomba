import { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { ControlButtons } from '../ControlButtons';
import { Cell } from '../Cell';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: border-box;
  margin: 0;
  padding: 0;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }
  a {
    text-decoration: none;
  }
  h1, h2, h3, h4, h5, p, span {
    margin: 0;
    padding: 0;
  }
`;

const Main = styled.main`
  text-align: center;
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Grid = styled.div`
  border: 2px solid black;
  height: 400px;
  width: 400px;
  display: flex;
  flex-direction: row;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const directions = ['👉', '👇', '👈', '☝️'];
const increaseDirections = ['👉', '👇'];
const GRID_TYPES = {
  COLUMN: 'column',
  ROW: 'row',
};

const App = () => {
  const [direction, setDirection] = useState(directions[0]);
  const [position, setPosition] = useState({ column: 0, row: 0 });

  const updateDirection = () => {
    const indexOfCurrentDirection = directions.findIndex(
      (directionItems) => directionItems === direction,
    );
    const nextDirection = indexOfCurrentDirection + 1;
    if (nextDirection > 3) {
      return setDirection(directions[0]);
    } else {
      setDirection(directions[nextDirection]);
    }
  };

  const moveForward = () => {
    if (increaseDirections.includes(direction)) {
      if (
        (direction === directions[0] && position.column === 9) ||
        (direction === directions[1] && position.row === 9)
      ) {
        updateDirection();
      } else {
        const gridPropertyToUpdate =
          direction === directions[0] ? GRID_TYPES.COLUMN : GRID_TYPES.ROW;
        setPosition({
          ...position,
          [gridPropertyToUpdate]: position[gridPropertyToUpdate] + 1,
        });
      }
    } else {
      if (
        (direction === directions[2] && position.column === 0) ||
        (direction === directions[3] && position.row === 0)
      ) {
        updateDirection();
      } else {
        const gridPropertyToUpdate =
          direction === directions[2] ? GRID_TYPES.COLUMN : GRID_TYPES.ROW;
        setPosition({
          ...position,
          [gridPropertyToUpdate]: position[gridPropertyToUpdate] - 1,
        });
      }
    }
  };

  return (
    <>
      <GlobalStyle />
      <Main>
        <ControlButtons
          moveForward={moveForward}
          updateDirection={updateDirection}
        />

        <Grid>
          {Array(10)
            .fill(null)
            .map((_, columnIndex) => {
              return (
                <Column key={columnIndex}>
                  {Array(10)
                    .fill(null)
                    .map((_, rowIndex) => {
                      return (
                        <Cell
                          key={rowIndex}
                          rowIndex={rowIndex}
                          columnIndex={columnIndex}
                          position={position}
                          direction={direction}
                        />
                      );
                    })}
                </Column>
              );
            })}
        </Grid>
      </Main>
    </>
  );
};

export default App;
