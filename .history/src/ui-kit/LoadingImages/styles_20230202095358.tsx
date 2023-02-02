import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 400px;
  height: 500px;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
`;

const shine = keyframes`
  to {
    background-position-x: -200%;
  }
`;

const LoadingBlock = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  background: #eee;
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  border-radius: 5px;
  background-size: 200% 100%;
  animation: 1.5s ${shine} linear infinite;
`;

export { LoadingBlock, Wrapper };
