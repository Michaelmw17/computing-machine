import React from 'react';
import Row from 'antd/lib/grid/row';
import Col from 'antd/lib/grid/col';
import * as S from './styles';

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
