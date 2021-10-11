import React from "react";
import MyListResidential from '../../common/MyListResidential/list'
import MyListCommercial from '../../common/MyListCommercial/Clist'
import PinnedSubheaderList from '../../common/MyListStrata/list'
import HomeIcon from '@material-ui/icons/Home';
import BusinessIcon from '@material-ui/icons/Business';
import BuildSharpIcon from '@material-ui/icons/BuildSharp';
import {  Grid  } from "@material-ui/core";
import { Row } from 'antd';
import ContainerCardFlip from '../../components/ContainerCardFlip';

import './styles.css'

const FlipperCards = () => {
    return (<ContainerCardFlip>
    <div className="ContainerFlipper">
    <Grid container spacing={2} justifycontent="flex-start">
    <Grid item xs={12} sm={12} md={6} lg={4}>
    <Row justify="center">
        <div className="card">
            <div className="card-front">
                <h1   className="Title" >Residential</h1>
                <HomeIcon  style={{ fontSize: 230 }} />
                </div>
                <div className="card-back">
                <h1 className="Title-Two">Residential</h1>
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
                        <h1 className="Title-Two">Strata / Property Maintenance</h1>
                        <BuildSharpIcon  style={{ fontSize: 185, padding: '35px 0 0',  }} />
                        </div>
                        <div className="card-back">
                            <h1 className="Title-Two">Strata / Property Maintenance</h1>
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
                            <h1 className="Title" >Commercial</h1>
                            <BusinessIcon  style={{ fontSize: 200 }} />
                            </div>
                        <div className="card-back">
                            <h1 className="Title-Two">Commercial</h1>
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