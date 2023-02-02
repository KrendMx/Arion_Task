import React from "react";
import { Wrapper } from "./styles";

const DatePicker: React.FC = () => {
  return (
    <Wrapper>
      <form action="">
        <input type="date" />
        <button type="button" className="btn btn--yellow">
          Change date
        </button>
      </form>
    </Wrapper>
  );
};

export default DatePicker;
