import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setImages, setPage } from "../../store/imageSlice/ImageSlice";
import { RootState } from "../../store/store";
import { Wrapper } from "./styles";

const DatePicker: React.FC = () => {
  const reference = useSelector((state: RootState) => state.image.reference);

  const formSubmit = () => {
    reference!.current.innerHTML = "";
  };

  return (
    <Wrapper>
      <form
        onSubmit={(e: any) => {
          e.preventDefault();
          formSubmit()
        }}
      >
        <input type="date" />
        <button type="submit">Change date</button>
      </form>
    </Wrapper>
  );
};

export default DatePicker;
