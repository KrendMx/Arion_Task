import styled from "styled-components";

interface TypographyStyledProps {
    fontSize: string;
}

const TypographyStyled = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: ${(props) => props.fontSize};
`;

export { TypographyStyled };
