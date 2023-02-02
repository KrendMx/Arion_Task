import React from "react";
import { useDispatch } from "react-redux";
import { setImages, setPage } from "../../store/imageSlice/ImageSlice";
import { Wrapper } from "./styles";

const DatePicker: React.FC = () => {

  const dispatch = useDispatch();

  const formSubmit = () => {
    dispatch(setPage(0))
    dispatch(setImages([]))
  }

  return (
    <Wrapper>
      <form
        onSubmit={(e: any) => {
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
