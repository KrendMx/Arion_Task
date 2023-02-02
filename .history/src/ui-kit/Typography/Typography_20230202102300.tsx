import React from 'react'

interface TypographyProps {
    fontSize?: string;
    fontWeight?: string;
    color?: string
    children: JSX.Element
}

const Typography: React.FC<TypographyProps> = ({children, ...otherProps}) => {
  return (
    <Typography {...otherProps}>{children}</Typography>
  )
}

export default Typography