import React, { lazy, Fragment,Suspense  } from "react";
import Loader from "react-loader-spinner";
import { withTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";
import {  Link } from 'react-router-dom';
import * as S from "./styles";
import  ScrollToTop from '../../components/ScrollTopFunc';
const Row = React.lazy(() => import(/* webpackChunkName: "sula-antd" */ 'antd/lib/grid/row'));
const Col = React.lazy(() => import(/* webpackChunkName: "sula-antd" */ 'antd/lib/grid/col'));
const MyComp = lazy(() => import("../../components/MyComp/myComp"));
const MyCompRed = lazy(() => import("../../components/MyCompRed/myComp.js"));
const MyCompBlue = lazy(() => import("../../components/MyCompBlue/myComp.js"));
const Container = lazy(() => import("../../common/Container"));

const Mailto = ({ email, subject = '', body = '', children }) => {
  let params = subject || body ? '?' : '';
  if (subject) params += `subject=${encodeURIComponent(subject)}`;
  if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;

  return <a href={`mailto:${email}${params}`}>{children}</a>;
};
const Footer = ({ t }) => {
const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  const scrollToTop = () => {
    window.scrollTo(0, 0)
}
  return (
    <Fragment>
      <Fade bottom>
        <S.Footer>
          <Container id="footer">
            <Row type="flex" justify="space-between">
              <Col lg={9} md={10} sm={12} xs={24}>
                <S.Title>{t("Contact")}</S.Title>
                <S.Large to="/">{t("Tell us everything")}</S.Large>
                <S.Para>
                  {t(
                    `Do you have any question regarding our services? 
                    Feel free to reach out.`
                  )}
                </S.Para>
                <Mailto email="info@jdpelectrical.com.au " subject="Enquire To JDP" body="Hello JDP!" >
                  <S.Chat>{t(`Let's Chat`)}</S.Chat>
                </Mailto>
              </Col>
              <Col lg={6} md={6} sm={12} xs={24}>
               <S.Title>{t("ADDRESS")}</S.Title>
                <S.Para>Unit 17 </S.Para>
                <S.Para>4-6 Chaplin Drive</S.Para>
                <S.Para> Lane Cove West NSW 2066</S.Para>
              </Col>
              <Col lg={6} md={6} sm={12} xs={24} >
              <S.Title>{t("JDP Electrical Services")}</S.Title>
                <S.Large left="true" to="/" onClick={scrollToTop}>
                  {t("Home")}
                </S.Large>
                <S.Large left="true"  to="/about" onClick={() => scrollTo("mission")}>
                  {t("About")}
                </S.Large>
                <S.Large left="true"  to="/about" onClick={() => scrollTo("Service")}>
                  {t("Services")}
                </S.Large>
                <S.Large left="true"  to="/about" onClick={() => scrollTo("Review")}>
                  {t("Reviews")}
                </S.Large>
                <S.Large left="true"  to="/about" onClick={() => scrollTo("Team")}>
                  {t("Contact")}
                </S.Large>
              </Col>



              <Col lg={10} md={10} sm={12} xs={24}>
                <S.Title>{t("General & Accounts")}</S.Title>
                <S.Para>
                <a href="tel:02-9419-7947" id="TextNumberGen">
                            {t("Ph: (02) 9419 7947 ")}
                </a>
                </S.Para>
                <Mailto email=" info@jdpelectrical.com.au" subject="Enquire To JDP" body="Hello JDP!">
                <S.Chat>{t(`Info@jdpelectrical.com.au`)}</S.Chat>
                  </Mailto>
                <S.Large left="true" to="/">
                  
                </S.Large>
                <S.Large left="true" to="/">
                </S.Large>
                <Mailto email=" accounts@jdpelectrical.com.au" subject="Enquire To JDP" body="Hello JDP!">
                  <S.Chat>{t(`Accounts@jdpelectrical.com.au`)}</S.Chat>
                  </Mailto>
              </Col>
              <Col lg={8} md={6} sm={12} xs={24}>
                <S.Title>{t("Joe Panetta")}</S.Title>
                <S.Para>
                <a href="tel:0412-450-300" id="TextNumberJoe">
                            {t("Ph: 0412 450 300")}
                </a>
                </S.Para>
              </Col>
              <Col lg={5} md={8} sm={12} xs={24}>
                
                <S.Title >{t("Dominic Panetta")}</S.Title>
                <S.Para>
                <a href="tel:0412-479-557" id="TextNumberDom">
                            {t("Ph: 0412 479 557")}
                </a>
                </S.Para>
              </Col>
              </Row>
          </Container>
        </S.Footer>
        <S.Extra>
          <ScrollToTop>
              <Container border="true">
                <Row
                  type="flex"
                  align="middle"
                  style={{ paddingTop: "3rem" }}
                >
                <Suspense fallback={<Loader type="Rings" color="#00BFFF"
                        height={100}
                        width={100}
                        timeout={3000}/>
                                }>
            <Col xs={{ span: 33, offset: 1  }} lg={{  span: 8, offset: 1 }}>
                  <Link to="/" >
                    <S.LogoContainer>
                        <MyComp /> 
                    </S.LogoContainer>
                  </Link>
                  </Col>
                  
            <Col xs={{ span: 22, offset: 1  }} lg={{  span: 2, offset: 2 }} style={{marginBottom: "10px"}}>
                  <Link to="/" >
                    <S.LogoContainer>
                        <MyCompRed />
                    </S.LogoContainer>
                  </Link>
                  </Col>
            <Col xs={{ span: 22, offset: 1  }} lg={{ span: 4, offset: 3  }}>
                  <Link to="/" >
                    <S.LogoContainer>
                        <MyCompBlue />
                    </S.LogoContainer>
                  </Link>
                  </Col> 
                  </Suspense>
                  <S.FooterContainer>
                  </S.FooterContainer>
                </Row>
              </Container>
            </ScrollToTop>
        </S.Extra>
      </Fade>
    </Fragment>
  );
};

export default withTranslation()(Footer);
