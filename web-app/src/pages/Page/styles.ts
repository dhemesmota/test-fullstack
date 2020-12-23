import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 40px 0px;
  margin-bottom: 40px;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ItemTitle = styled.h3`
  display: flex;
  justify-content: center;
  padding: 10;
  background: #ececec;
  font-size: 16px;
  color: #656464;
  font-weight: 500;
`;

export const ItemList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 10px 15px;
`;

export const ItemListMessagem = styled.li`
  display: flex;
  padding: 5px 0;

  p {
    font-size: 12px;
    margin-left: 10px;
  }
`;
