import styled from "styled-components";

const LoaderStyled = styled.div`
  width: 48px;
  height: 48px;
  border: 5px solid #fff;
  border-bottom-color: #ff3d00;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
`;

const Wrapper = styled.div`
    marign: auto;
`

export {LoaderStyled, Wrapper}