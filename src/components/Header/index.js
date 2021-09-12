import React, { useState, Fragment, lazy, Suspense } from "react";
import './stylesHeader.css'
import '../../globalStyles'
import Button from '@material-ui/core/Button';
import Loader from "react-loader-spinner";
import {  Drawer } from "antd";
import { CSSTransition } from "react-transition-group";
import { withTranslation } from "react-i18next";
import { makeStyles } from '@material-ui/core/styles';
import BuildIcon from '@material-ui/icons/Build';
import InfoIcon from '@material-ui/icons/Info';
import HomeIcon from '@material-ui/icons/Home';
import RateReviewIcon from '@material-ui/icons/RateReview';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import PhoneForwardedIcon from '@material-ui/icons/PhoneForwarded';
import { Link } from 'react-router-dom';
import * as S from "./styles";
const Row = React.lazy(() => import(/* webpackChunkName: "sula-antd" */ 'antd/lib/grid/row'));
const Col = React.lazy(() => import(/* webpackChunkName: "sula-antd" */ 'antd/lib/grid/col'));

const MyComp = lazy(() => import("../../components/MyComp/myComp"));

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
    const scrollToTop = () => {
    window.scrollTo(0, 0)
    }
    return (
      <Fragment>
        <div className={classes.root} style={{ textAlign: "center" }}>
        <S.CustomNavLinkSmall>
            <Link to="/" onClick={scrollToTop} >
          <HomeIcon style={{ color:"RGB(209, 29, 50)", fontSize: 28  }} />
              <S.Span><span>{t("Home")}</span></S.Span>
              </Link>
          </S.CustomNavLinkSmall>
          <S.CustomNavLinkSmall onClick={() => scrollTo("Service")}>
          <BuildIcon style={{ color:"RGB(209, 29, 50)", fontSize: 28   }} />
            <S.Span className="Span"><span>{t("Services")}</span></S.Span>
        </S.CustomNavLinkSmall>
        <S.CustomNavLinkSmall onClick={() => scrollTo("People")}>
          <InfoIcon style={{color:"RGB(209, 29, 50)", fontSize: 28  }} />
          <S.Span ><span>{t("About")}</span></S.Span>
        </S.CustomNavLinkSmall>
          <S.CustomNavLinkSmall onClick={() => scrollTo("Review")}>
            <RateReviewIcon style={{ color:"RGB(209, 29, 50)", fontSize: 28 }} />
          <S.Span><span>{t("Reviews")}</span></S.Span>
        </S.CustomNavLinkSmall>
        <S.CustomNavLinkSmall onClick={() => scrollTo("Team")}>
          <ContactMailIcon style={{ color:"RGB(209, 29, 50)", fontSize: 28  }} />
          <S.Span><span>{t("Contact")}</span></S.Span>
          </S.CustomNavLinkSmall>
        <S.CustomNavLinkSmall >
              <div>
                <a href="tel:02-9419-7947">
                  <Button classes={{ root: 'button', label: 'button-label'}} style={{  
                    marginBottom: 40, 
                    background:  'FFF',
                    color: 'rgb(209, 29, 50)',
                    fontSize: '1rem',
                    fontWeight: 600,
                    width: "100%",
                    border:'2px solid  rgb(209, 29, 50)',
                    borderRadius: "8px",
                    height: "50px",
                    right: "0",
                    outline: "none",
                    cursor: "pointer",
                    maxWidth: "180px",
              }}>
            <p className="p-CallUs"> CALL US NOW  </p>
          <PhoneForwardedIcon/>
        </Button>
      </a>
    </div>
    </S.CustomNavLinkSmall>
          <S.Span>
          </S.Span>
          </div>
      </Fragment>
    );
  };
const scrollToTop = () => {
    window.scrollTo(0, 0)
}
  return (
    <S.Header>
      <S.Container>
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
          <Drawer closable={true} visible={visible} onClose={onClose}>
            <Col style={{ marginBottom: "2.5rem" }}>
              <S.Label onClick={onClose} style={{ textAlign: "center" }}>
                <Col span={12}>
                  <S.Menu>Menu</S.Menu>
                </Col>
                <Col span={12} >
                  <S.Outline padding="true" />
                </Col>
              </S.Label>
            </Col>
            <MenuItem />
          </Drawer>
        </CSSTransition>
      </S.Container>
    </S.Header>
  );
};

export default withTranslation()(Header);
