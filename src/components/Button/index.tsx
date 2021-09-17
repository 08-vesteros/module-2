import React, { FC } from "react";
import { ButtonWrapper } from "./styled";

const Button: FC = ({children}) => (
            <ButtonWrapper>{children}</ButtonWrapper>
      );
  
  export default Button;