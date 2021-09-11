import React, {  lazy } from "react";
import Button from '../../common/ButtonMains/ButtonMain'
import {  NavLink } from 'react-router-dom';
import Tooltip from "react-simple-tooltip"
import {css} from "styled-components"
import './homeStyles.css';

const Container = lazy(() => import("../../common/Container"));

const Home = (props, i) => {  
  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  let vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  // We listen to the resize event
  window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });
  return (<div className="IntroContainer"> 
      <Container>
          <>
            <NavLink to='/About'>
            <div className="AppAboutContainer">
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
                        <Button/>
                    </Tooltip>
                  </div>
              </div>
            </div>
          </NavLink>
      </>
      <NavLink to='/About'>
            <h1 id="Enter-Title">
            Enter JDP Electrical Services
            </h1>
            </NavLink>
          </Container>
    </div>
  );
};

export default (Home);
