import React  from "react";
import ReactCardFlipper from "./ReactCardFlipper";
import injectSheet from "react-jss";
import MyListResidential from '../../common/MyListResidential/list'
import MyListCommercial from '../../common/MyListCommercial/Clist'
import PinnedSubheaderList from '../../common/MyListStrata/list'
import {  Grid, withStyles } from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import BusinessIcon from '@material-ui/icons/Business';
import BuildSharpIcon from '@material-ui/icons/BuildSharp';
import './ServicesStyles.css'
import { Row} from 'antd';
import ContainerCardFlip from '../../components/ContainerCardFlip';
const styles = {
  root:{
  
  },
  container: {
    marginRight: "auto",
    marginLeft: "auto",
    transition: '.5s all ease',
    transform: 'rotateX(10deg) scale(1)',
    perspective: '900px',
  }, 
};

const TestApp = ({ classes }) => {
    return (<>
     <ContainerCardFlip >
        <div className={classes.container}>
            <div id="main" className="containerS">
                <div className="row">
                    <div className="Services-section">
                  <div className="inner-width-services">
                  <Grid container spacing={5} justify="flex-start">
                    <Grid item xs={12} sm={12} md={6} lg={4}>
                    <Row justify="center">
                    <ReactCardFlipper
                      width="300px"
                      height="340px"
                      behavior="hover"
                      className={classes.root}
                      innerCardClass={classes.card}
                    >
                      <div className="text-left">
                      <div className="Services">
                      <div className="pie">
                        <div className="p-naming" style={{ 
                          fontSize: 20, paddingRight:"20px", paddingBottom: 0
                          }}>Residential</div>
                        <HomeIcon  style={{
                          fontSize: 230, paddingTop: 0, paddingLeft: 10 ,
                          }} /></div>
                      </div>
                      </div>
                      <div className="text-left">
                          <p style={{ 
                            marginLeft: 80,fontSize: 20,color: '#FFF',
                            textTransform: 'uppercase', listStyleType: 'none'
                            }}>Residential</p>
                          <MyListResidential/>
                      </div>
                    </ReactCardFlipper>
                    </Row>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={4}>
                    <Row justify="center">
                      <ReactCardFlipper
                      width="300px"
                      height="340px"
                      behavior="hover"
                      className={classes.root}
                      innerCardClass={classes.card}
                    >
                      <div className="text-left">
                      <div className="Services">
                      <div className="pie">
                        <div className="p-naming" style={{ 
                          fontSize: 20, paddingRight: 35, marginTop: -5}
                          }>Strata / Property Maintenance</div>
                          <BuildSharpIcon  style={{ 
                        fontSize: 210, paddingTop: 0, paddingBottom: '51px', color: "#FFF", paddingLeft: 40
                          }} />
                      </div>
                      </div>
                      </div>
                      <div className="text-left">
                          <p style={{ marginLeft: 10, fontSize: 20, color: '#FFF', textTransform: 'uppercase',textAlign: 'center'}}>Strata / Property Maintenance</p>
                          <PinnedSubheaderList/>
                      </div>
                    </ReactCardFlipper>
                    </Row>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={4}>
                    <Row justify="center">
                    <ReactCardFlipper
                      width="300px"
                      height="340px"
                      behavior="hover"
                      className={classes.root}
                      innerCardClass={classes.card}
                    >
                      <div className="text-left">
                        <div className="Services">
                          <div className="pie">
                            <div id="services-p-naming" className="p-naming" style={{ 
                              fontSize: 20, paddingLeft: 0, paddingBottom: 15 
                              }}>Commercial</div>
                            <BusinessIcon  style={{ 
                              fontSize: 220, paddingTop: 50, color: "#FFF", 
                              paddingLeft: 30 }} />
                          </div>
                        </div>
                      </div>
                      <div className="text-left">
                      <p style={{ 
                        marginLeft: 80,fontSize: 20,color: '#FFF', 
                        textTransform: 'uppercase', listStyleType: 'none'
                        }}>Commercial</p>
                          <MyListCommercial/>
                      </div>
                    </ReactCardFlipper>
                    </Row>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </div>
          </div>
        </div>
     </ContainerCardFlip >
    </>
    )
};

const styling = {
  root: {
    display: "block",
    margin: "50px",

    position: "relative"
  },
  card: {
    border: "1px solid #ccc",
    borderRadius: "29px",
    padding: "10px",
    marginBottom: "50px",
      
  background:' rgb(209, 29, 50)',
  '-webkit-box-shadow': "0 7px 8px rgb(255 0 0 / 75%)",
  '-moz-box-shadow': "0 7px 8px rgb(255 0 0 / 75%)",
  'box-shadow':" 0 7px 8px rgb(255 0 0  / 75%)",
    color: "white",
  }
};

const StyledApp = injectSheet(styling)(TestApp);

export default withStyles(styles)(StyledApp);