import React from "react";
import { Wrapper } from "./styles";

const DatePicker: React.FC = () => {
  return (
    <Wrapper>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input type="date" />
        <button type="submit">Change date</button>
      </form>
    </Wrapper>
  );
};

export default DatePicker;
