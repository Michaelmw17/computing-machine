import React, {  lazy, Suspense } from "react";
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

const RightBlock = ({ title, content, contentTwo, button, icon,  id }) => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <S.RightBlockContainer>
      <Row type="flex" justify="space-between" align="middle" id={id}>
        <Col xs={{ span: 22, offset: 1  }} lg={{ span: 11, offset: 1  }}>
            <S.ContentWrapper>
              <h3 className="Main-Title" id="Main-Title">{(title)}</h3>
              <S.Content>{(content)}</S.Content>
              <S.Content> JDP Electrical Services offer a complete range of electrical installations and 
              services throughout Sydney, North Shore Region and surrounding areas.</S.Content>
                <Row>
                    <Col xs={12} sm={24} md={24} lg={12} xl={12}>
                      <S.ButtonWrapper>
                                {button &&
                                  typeof button === "object" &&
                                  button.map((item, id) => {
                                    return (
                                    <ButtonAnimated key={id}>
                                          <S.Span>
                                            {(item.title1)}
                                            <BuildlIcon className='icon' style={{ fontSize: 20, marginBottom: -3, }} />
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
                                        {(item.title)}
                                      <ContactMailIcon style={{ color:"#FFF", fontSize: 25,paddingTop: 6, paddingLeft: 6,  marginBottom: -2,   }} />
                                      </Button>
                                    );
                                  })}
                            </S.ButtonWrapper>
                          </Col>
                    </Row>
              </S.ContentWrapper>
        </Col>
        <Col xs={{ span: 22, offset: 2  }} lg={{ span: 11, offset: 1  }}>
          <Slide right>
          <Suspense fallback={<div>
                    <Loader type="Rings" 
                            color="#00BFFF"
                            height={100}
                            width={100}
                            timeout={3000}/>
                    </div>}>
            <Image rel="preload" id="JDP-Electrical-light"/>
            </Suspense>
          </Slide>
        </Col>
      </Row>
    </S.RightBlockContainer>
  );
};

export default (RightBlock);
