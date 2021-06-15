import React from 'react'
import { func, string } from 'prop-types';
import OutlinedButtons from '../common/ButtonMains/ButtonMain'


const Toggle = ({theme,  toggleTheme }) => {
  return (

      <OutlinedButtons onClick={toggleTheme}>
        {theme === "light" ?
          <p> </p>
          : <p> </p>
          }
      </OutlinedButtons>
    );
};

Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}

export default Toggle;