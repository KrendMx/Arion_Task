import styled from "styled-components";

interface TypographyStyledProps {
    fontSize?: string;
    fontWeight?: string;
    color?: string;
}

const TypographyStyled = styled.p<TypographyStyledPropsf>`
  font-family: "Poppins", sans-serif;
  font-size: ${(props) => props.fontSize};
`;

export { TypographyStyled };
