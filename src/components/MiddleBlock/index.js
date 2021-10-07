import React from "react";
// import { withTranslation } from "react-i18next";
import * as S from "./styles";

const Row = React.lazy(() => import(/* webpackChunkName: "sula-antd" */ 'antd/lib/grid/row'));
const Col = React.lazy(() => import(/* webpackChunkName: "sula-antd" */ 'antd/lib/grid/col'));

const MiddleBlock = ({ title, content, button }) => {
  return (
    <S.MiddleBlock>
      <Row type="flex" justify="center" align="middle" id="Row">
          <S.ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h3 style={{marginBottom: "0px"}}>{(title)}</h3>
              <S.Content>{(content)}</S.Content>
            </Col>
          </S.ContentWrapper>
      </Row>
    </S.MiddleBlock>
  );
};

export default (MiddleBlock);
