import React from "react";
import MyListResidential from '../../common/MyListResidential/list'
import MyListCommercial from '../../common/MyListCommercial/list'
import PinnedSubheaderList from '../../common/MyListStrata/list'
import { Home as HomeIcon } from '@mui/icons-material';
import { Business as BusinessIcon } from '@mui/icons-material';
import { BuildSharp as BuildSharpIcon } from '@mui/icons-material';
import {  Grid  } from "@mui/material";
import { Row } from 'antd';
import ContainerCardFlip from '../../components/ContainerCardFlip';

import './styles.css'

const FlipperCards = () => {
    return (<ContainerCardFlip>
    <div className="container-flipper">
    <Grid container spacing={2} justifycontent="flex-start">
    <Grid item xs={12} sm={12} md={6} lg={4}>
    <Row justify="center">
        <div className="card">
            <div className="card-front">
                <h3   className="title" >Residential</h3>
                <HomeIcon  style={{ fontSize: 230 }} />
                </div>
                <div className="card-back">
                <h3 className="title-two">Residential</h3>
                    <div className="social-icons">
                    <MyListResidential/>
                    </div>
                </div>
            </div>
        </Row>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4}>
            <Row justify="center">
                <div className="card">
                    <div className="card-front">
                        <h3 className="title-two">Strata / Property Maintenance</h3>
                        <BuildSharpIcon  style={{ fontSize: 185, padding: '35px 0 0',  }} />
                        </div>
                        <div className="card-back">
                            <h3 className="title-two">Strata / Property Maintenance</h3>
                                <div className="social-icons">
                                <PinnedSubheaderList/>
                            </div>
                        </div>
                    </div>
                </Row>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={4}>
                <Row justify="center">
                    <div className="card">
                        <div className="card-front">
                            <h3 className="title" >Commercial</h3>
                            <BusinessIcon  style={{ fontSize: 200 }} />
                            </div>
                        <div className="card-back">
                            <h3 className="title-two">Commercial</h3>
                                <div className="social-icons">
                                <MyListCommercial/>
                            </div>
                        </div>
                    </div>
                </Row>
            </Grid>
        </Grid>
    </div>
    </ContainerCardFlip>
    )
};


export default FlipperCards;