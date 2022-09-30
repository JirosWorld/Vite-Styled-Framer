import React from "react"
import styled from "styled-components"

// export interface ButtonProps {
//     customprop?: string,
//     primaryprop?: boolean,
//     children?: React.ReactNode
// }

// only when using Typescript
// const Button = styled.button<{ customprop: string, primaryprop: boolean }>`

const Button = styled.button`
  display: block;
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primaryprop ? "palevioletred" : "white")};
  color: ${(props) => (props.primaryprop ? "white" : "palevioletred")};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`

const ButtonCustom = styled.button`
  display: block;
  // if the string is set in this prop, than set the color, else not
  background: ${({ customprop }) =>
    customprop === "string" ? "green" : "grey"};
  color: ${({ customprop }) => (customprop === "string" ? "grey" : "green")};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`

// export const ButtonComp2: React.FC<ButtonProps> = (props: ButtonProps) => {

//   // customprop="string"
//   return (
//   <div>
//     <Button>Normal</Button>
//     <Button primaryprop >Primary</Button>
//     <Button customprop="string">Primary</Button>
//   </div>)
// };

export default function ButtonComp() {
  return (
    <div>
      <Button>Normal</Button>
      <Button primaryprop>Primary</Button>
      <ButtonCustom customprop="string">Customprop</ButtonCustom>
    </div>
  )
}
