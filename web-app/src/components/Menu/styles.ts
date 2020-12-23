import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px 0;
  background-color: #ececec;

  display: flex;
  justify-content: space-around;

  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;

  a {
    text-decoration: none;
    color: #1f1f1f;
    padding: 5px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    span {
      font-size: 10px;
      color: #827f7f;
    }
  }
`;
