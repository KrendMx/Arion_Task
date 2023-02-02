import styled, { keyframes } from "styled-components";

const rotation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }`;

const LoaderStyled = styled.div`
  width: 48px;
  height: 48px;
  border: 5px solid #fff;
  border-bottom-color: #ff3d00;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: ${rotation} 1s linear infinite;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 100px;
  justify-content: center;
`;

export { LoaderStyled, Wrapper };
