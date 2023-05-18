import { styled } from "styled-components";

export const HamburgerButton = styled.input.attrs({ type: "checkbox" })`
 display: none;
`;

export const Toggle = styled.label`
  position: relative;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition-duration: 0.3s;
`;

export const Bars = styled.div`
  width: 100%;
  height: 4px;
  background-color: rgb(76, 189, 151);
  border-radius: 5px;
  transition-duration: 0.3s;
`;