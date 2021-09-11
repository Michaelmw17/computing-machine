import React, { useState, Fragment, lazy, Suspense } from "react";
import Loader from "react-loader-spinner";
import {  Drawer } from "antd";
import { CSSTransition } from "react-transition-group";
import { withTranslation } from "react-i18next";
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import HomeIcon from '@material-ui/icons/Home';
import * as S from "./styles";
import Tooltip from "react-simple-tooltip"
import {css} from "styled-components"
 const Row = React.lazy(() => import(/* webpackChunkName: "sula-antd" */ 'antd/lib/grid/row'));
const Col = React.lazy(() => import(/* webpackChunkName: "sula-antd" */ 'antd/lib/grid/col'));

const MyComp = lazy(() => import("../MyComp/myComp"));

const Header = ({ t }) => {
  const [isNavVisible] = useState(false);
  const [isSmallScreen] = useState(false);
  const [visible, setVisibility] = useState(false);

  const showDrawer = () => {
    setVisibility(!visible);
  };

  const onClose = () => {
    setVisibility(!visible);
  };
const useStyles = makeStyles((theme) => ({
  root: {
    '& > svg': {
      margin: theme.spacing(2),
    },
    
  },
  
}));
  
  const MenuItem = () => {
    const classes = useStyles();
    const scrollTo = (id) => {
      const element = document.getElementById(id);
      element.scrollIntoView({
        behavior: "smooth",
      });
      setVisibility(false);
    };
    return (
      <Fragment>
            <div className={classes.root}>
                    <Tooltip
                    arrow={8}
                    background="RGB(209, 29, 50)"
                    border="#0e1111"
                    color="#FFF"
                    content="Enter JDP Electrical"
                    fadeDuration={3}
                    fadeEasing="linear"
                    fixed={false}
                    fontFamily="inherit"
                    fontSize="inherit"
                    offset={0}
                    padding={15}
                    placement="right"
                    radius={5}
                    zIndex={1}
                        customCss={css`
                          white-space: wrap;
                        `} >
            <Link to="/about">
          <HomeIcon style={{ color:"RGB(209, 29, 50)", fontSize: 55   }} />
              <S.Span >{t("Welcome")}</S.Span>
          </Link>
          </Tooltip>
            <S.CustomNavLinkSmall
              style={{ width: "180px" }}
              onClick={() => scrollTo("contact")} >
              <S.Span>
          </S.Span>
          </S.CustomNavLinkSmall>
          </div>
      </Fragment>
    );
  };
const scrollToTop = () => {
    window.scrollTo(0, 0)
}
  return (
    <S.Header>
      <S.Header>
        <Row type="flex" justify="space-between" gutter={20}>
          <S.LogoContainer to="/" aria-label="homepage" onClick={scrollToTop}>
                  <Suspense fallback={<Loader type="Rings" color="#00BFFF"
                    height={100}
                    width={100}
                    timeout={3000}/>
                            }>
                
                                <MyComp rel="preload" /> 
                    </Suspense>
          </S.LogoContainer>
          <S.NotHidden>
            <MenuItem />
          </S.NotHidden>
          <S.Burger onClick={showDrawer}>
            <S.Outline />
          </S.Burger>
        </Row>
        <CSSTransition
          in={!isSmallScreen || isNavVisible}
          timeout={350}
          classNames="NavAnimation"
          unmountOnExit
        >
          <Drawer closable={false} visible={visible} onClose={onClose}>
            <Col style={{ marginBottom: "2.5rem" }}>
              <S.Label onClick={onClose}>
                <Col span={12}>
                  <S.Menu>Menu</S.Menu>
                </Col>
                <Col span={12}>
                  <S.Outline padding="true" />
                </Col>
              </S.Label>
            </Col>
            <MenuItem />
          </Drawer>
        </CSSTransition>
      </S.Header>
    </S.Header>
  );
};

export default withTranslation()(Header);
