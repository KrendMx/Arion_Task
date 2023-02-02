import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 70vw;
  margin: auto;
  gap: 30px;
  padding: 25px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export { Wrapper };
