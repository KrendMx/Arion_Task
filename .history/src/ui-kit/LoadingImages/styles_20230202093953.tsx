import styled from "styled-components";

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

const LoadingBlock = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: gray;
  z-index: -1;
`;

export {LoadingBlock, Wrapper}
