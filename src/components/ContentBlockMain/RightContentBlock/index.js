import React, {  lazy, Suspense } from "react";
import { withTranslation } from "react-i18next";
import Slide from "react-reveal/Slide";
import ButtonAnimated from '../../../common/ButtonAnimation/AnimationButton'
import './styling.css'
import Button from "../../../common/Button";
import ContactMailIcon from '@material-ui/icons/ContactMail';
import BuildlIcon from '@material-ui/icons/Build';
import Loader from "react-loader-spinner";

import * as S from "./styles";
const Row = React.lazy(() => import(/* webpackChunkName: "sula-antd" */ 'antd/lib/grid/row'));
const Col = React.lazy(() => import(/* webpackChunkName: "sula-antd" */ 'antd/lib/grid/col'));


const Image = lazy(() => import("../../MyCompMain/myComp.js"));

const RightBlock = ({ title, content, contentTwo, button, icon, t, id }) => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <S.RightBlockContainer>

      <Row type="flex" justify="space-between" align="middle" id={id}>
        <Col lg={11} md={11} sm={11} xs={24}>
          <Slide left>
            <S.ContentWrapper>
              <h3>{t(title)}</h3>
              <S.Content>{t(content)}</S.Content>
              <S.Content> JDP Electrical Services offer a complete range of electrical installations and services throughout Sydney, North Shore Region and surrounding areas.</S.Content>
              
                <Row>
                <Row>
                    <Col xs={12} sm={24} md={24} lg={12} xl={12}>
                      <S.ButtonWrapper>
                                {button &&
                                  typeof button === "object" &&
                                  button.map((item, id) => {
                                    return (
                                    <ButtonAnimated 
                                        key={id}
                                      >
                                        <S.Span>
                                        {t(item.title1)}
                                        <BuildlIcon className='icon' style={{ fontSize: 20,paddingTop: 4, }} />
                                        </S.Span>
                                        
                                      </ButtonAnimated>
                                      
                                    );
                                  })}
                              </S.ButtonWrapper>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                      <S.ButtonWrapper>
                                {button &&
                                  typeof button === "object" &&
                                  button.map((item, id) => {
                                    return (
                                      <Button
                                        key={id}
                                        color={item.color}
                                        width="true"
                                        onClick={() => scrollTo("Team")}
                                      > 
                                        {t(item.title)}
                                        
                                      <ContactMailIcon style={{ color:"#FFF", fontSize: 25,paddingTop: 6, paddingLeft: 6  }} />
                                      </Button>
                                    );
                                  })}
                              </S.ButtonWrapper>
                            </Col>
                      </Row>
              </Row>
            </S.ContentWrapper>
          </Slide>
        </Col>
        <Col lg={12} md={12} sm={12} xs={24}>
          <Slide right>
          <Suspense fallback={<div>
          <Loader type="Rings" color="#00BFFF"
                    height={100}
                    width={100}
                    timeout={3000}/>
          </div>
}>
            <Image id='ImageComp' rel="preload" />
            </Suspense>
          </Slide>
        </Col>
      </Row>
    </S.RightBlockContainer>
  );
};

export default withTranslation()(RightBlock);
