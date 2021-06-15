import React from "react"
import '../../globalStyles'
import * as S from "./styles";

const ButtonAnimated = ({ width,  children}) => {
    const scrollTo = (id) => {
      const element = document.getElementById(id);
      element.scrollIntoView({
        behavior: "smooth",
      });
    };
  return (
    <S.ButtonAnimated className="btn btn-blue btn-radius children" width={width} 
      onClick={() => scrollTo("Service")}>
       {children}
    </S.ButtonAnimated>
  );
};

export default ButtonAnimated;
