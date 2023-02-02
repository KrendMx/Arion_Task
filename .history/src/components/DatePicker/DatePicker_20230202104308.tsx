import React from "react";
import { Wrapper } from "./styles";

const DatePicker: React.FC = () => {
  return (
    <Wrapper>
      <form action="">
        <input type="date" />
        <Button type="button" className="btn btn--yellow">
          <span className="btn__txt">Yellow button</span>
          <i className="btn__bg" aria-hidden="true"></i>
          <i className="btn__bg" aria-hidden="true"></i>
          <i className="btn__bg" aria-hidden="true"></i>
          <i className="btn__bg" aria-hidden="true"></i>
        </Button>
      </form>
    </Wrapper>
  );
};

export default DatePicker;
