import styled from "styled-components";

import '../../styles/GlobalStyles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Panel = styled.div`
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
  /* centralizar imagem tanto verdicalmente como horizontal */
  align-items: center;
  justify-content: center;

  /* Altura da galaria */
  height: 530px;

  /* A imagem vai ter uma altura de 73% do pai dela */
  > div {
    height: 73%;
  }
`;

export const Section = styled.div`
  border-top: 1px solid var(--color-border);
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