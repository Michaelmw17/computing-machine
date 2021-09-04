import React, {  lazy } from "react";
import Button from "../../components/Toggler"
import {  NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
// import {ThemeProvider} from "styled-components";
// import  {useDarkMode} from "../../components/useDarkMode"
// import { GlobalStyles } from "../../globalStyles";
// import { lightTheme, darkTheme } from "../../components/Themes"
import Tooltip from "react-simple-tooltip"
import {css} from "styled-components"
import './homeStyles.css';

const Container = lazy(() => import("../../common/Container"));

const styles = theme => ({
  fab: {
    margin: theme.spacing(1),
    
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
});


const Home = (props, i) => {

  // const [theme, themeToggler, mountedComponent] = useDarkMode();

  // const themeMode = theme === 'light' ? lightTheme : darkTheme ;

  // if(!mountedComponent) return <div/>

  
  return (<div className="IntroContainer"> 
    {/* <ThemeProvider theme={themeMode}  key={i}> */}
      <Container>
      {/* <GlobalStyles/> */}
        <>
           <NavLink to='/About'>
          <div className="AppCon">
            <div className="App">
                  <Tooltip
                        arrow={8}
                        background="rgb(209, 29, 50)"
                        border="#0e1111"
                        color="#FFF"
                        content="Click to Enter JDP Electrical"
                        fadeDuration={3}
                        fadeEasing="linear"
                        fixed={false}
                        fontFamily="inherit"
                        fontSize="inherit"
                        offset={0}
                        padding={16}
                        placement="bottom"
                        radius={3}
                        zIndex={1}
                          customCss={css`
                            white-space: nowrap;
                            word-break: break-all;
                          `}
                    >
                    <Button></Button>
                  {/* <Toggle theme={theme} toggleTheme={themeToggler} key={i} /> */}
                </Tooltip>
              </div>
          </div>
        </NavLink>
    </>
              <NavLink to='/About'>
                    <h1 style={{textAlign: 'center', color: 'white', paddingTop: '25px'}}>
                    Enter JDP Electrical Services
                    </h1>
                    </NavLink>
          </Container>
        {/* </ThemeProvider> */}
        
    </div>
  );
};

export default  withStyles()(Home);
