import React from "react";
import { Wrapper } from "./styles";

const DatePicker: React.FC = () => {
  return (
    <Wrapper>
      <form action="">
        <input type="date" />
        <button type="button" className="btn btn--yellow">
          <span className="btn__txt">Yellow button</span>
          <i className="btn__bg" aria-hidden="true"></i>
          <i className="btn__bg" aria-hidden="true"></i>
          <i className="btn__bg" aria-hidden="true"></i>
          <i className="btn__bg" aria-hidden="true"></i>
        </button>
      </form>
    </Wrapper>
  );
};

export default DatePicker;
