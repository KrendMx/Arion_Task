import styled from "styled-components";

const Wrapper = styled.div`
  margin-bottom: 10px;
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
      font-size: 14px;
      cursor: pointer;
      background-color: #d6d1b1;
      padding: 3px 10px;
      border-radius: 4px;
    }
  }
`;

export { Wrapper };
