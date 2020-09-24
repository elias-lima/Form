import styled from 'styled-components';

import '../../styles/GlobalStyles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header =styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > h1 {
    margin-top: 20px;
  }

  > div {
    box-shadow: var(--panel-shadow);
    margin-top: 10px;

    width: 100%;
    height: 100px;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Panel = styled.div`
  margin-top: 10px;
  background: var(--color-white);
  box-shadow: var(--panel-shadow);
  display: grid;
  grid-template-columns: 65fr 35fr;

`;

export const Column = styled.div`
  &:first-child {
    border-right: 1px solid var(--color-border);
  }
`;

export const Document = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5px;
`;

export const FormDoc = styled.div`
  width: 95%;
  /* border: 1px solid var(--color-border); */

  > div {
    .paragrafo {
      margin-top: 50px;
      font-weight: 700;
      font-size: 18px;
    }
    .nome {
      width: 50%;
      padding: 12px 20px; 
      margin: 0 5px;
      box-sizing: border-box;
      border: 1px solid #555;
    }
    .T-pequeno {
      width: 20%;
      padding: 12px 20px;
      margin: 0 5px;
      box-sizing: border-box;
      border: 1px solid #555;
    }
    .box {
      margin-right: 140px;
    }
  }
`;

export const Section = styled.div`
  padding: 48px 32px;

  display: flex;
  flex-direction: column;

  > h4 {
    font-size: 18px;
    margin-bottom: 40px;
  }
  > div {
    display: flex;
    flex-direction: column;

    > span + span {
      margin-top: 16px;
    }
    .title {
      font-size: 16px;
      color: var(--color-black);
    }
    .description {
      margin-top: 5px;
      font-size: 14px;
      color: var(--color-gray);
      line-height: 19px;
    }
  }

  > a {
    margin-top: 20px;
    font-size: 14px;
    font-weight: 600;
    color: var(--color-blue);
    text-decoration: none;
  }
`;