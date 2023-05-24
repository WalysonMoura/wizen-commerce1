import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 40;
  width: 100%;

`;

export const Container = styled.div`
background-color: ${({ theme }) => theme.colors.background.header};

`;

/*
 display: flex;
  height: 4rem;
  align-items: center;
  gap: 1rem;
  justify-content: center;

  @media (min-width: 640px) {
    justify-content: flex-start;
    gap: 0;
  }

*/