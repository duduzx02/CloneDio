import React from "react";
import { IconContainer, InputContainer, IputText } from "./style";
const Input = ({leftIcon, name, ...rest}) => {
  return (
    <InputContainer>
     {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
        <IputText {...rest}></IputText>
    </InputContainer>
  )
};

export { Input };
