import React from "react";
import { Wrapper } from "./styles";

const DatePicker: React.FC = () => {
  return (
    <Wrapper>
      <form action="">
        <input type="date" />
        <button type="button" class="btn btn--yellow">
          <span class="btn__txt">Yellow button</span>
          <i class="btn__bg" aria-hidden="true"></i>
          <i class="btn__bg" aria-hidden="true"></i>
          <i class="btn__bg" aria-hidden="true"></i>
          <i class="btn__bg" aria-hidden="true"></i>
        </button>
      </form>
    </Wrapper>
  );
};

export default DatePicker;
