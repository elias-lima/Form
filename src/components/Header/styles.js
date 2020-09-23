import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 48px;
  background: var(--color-header);
  border-bottom: 1px solid var(--color-border);

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > h1 {
    margin-top: 50px;
  }

`;