import React, {  lazy } from "react";
import Button from '../../common/ButtonMains/ButtonMain'
import {  NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from "react-simple-tooltip"
import {css} from "styled-components"
import './homeStyles.css';

const Container = lazy(() => import("../../common/Container"));

const Home = (props, i) => {  
  return (<div className="IntroContainer"> 
      <Container>
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
                    <Button/>
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
    </div>
  );
};

export default  withStyles()(Home);
