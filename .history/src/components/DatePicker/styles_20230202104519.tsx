import styled from "styled-components";

const Wrapper = styled.div`
  form {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    input {
      font-family: "Poppins", sans-serif;
    }
    button {
        border: 0;
        font-family: "Poppins", sans-serif;
        font-size: 15px;
        cursor: pointer;
    }
  }
`;

export { Wrapper };
