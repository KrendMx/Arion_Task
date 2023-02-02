import React from 'react'

interface TypographyProps {
    fontSize?: string;
    fontWeight?: string;
    color?: string
}

const Typography: React.FC<TypographyProps> = () => {
  return (
    <div>Typography</div>
  )
}

export default Typography