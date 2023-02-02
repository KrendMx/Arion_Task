import React from "react";
import { Wrapper } from "./styles";

const DatePicker: React.FC = () => {

  const formSubmit = () => {

  }

  return (
    <Wrapper>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(e.target[0].value)
        }}
      >
        <input type="date" />
        <button type="submit">Change date</button>
      </form>
    </Wrapper>
  );
};

export default DatePicker;
