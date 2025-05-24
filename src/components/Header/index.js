import React, { useState, Fragment, lazy, Suspense, useEffect } from 'react';
import './stylesHeader.css';
import '../../globalStyles';
import Button from '@material-ui/core/Button';
import Loader from 'react-loader-spinner';
import { Drawer } from 'antd';
import { CSSTransition } from 'react-transition-group';
import { makeStyles } from '@material-ui/core/styles';
import BuildIcon from '@material-ui/icons/Build';
import InfoIcon from '@material-ui/icons/Info';
import HomeIcon from '@material-ui/icons/Home';
import RateReviewIcon from '@material-ui/icons/RateReview';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import PhoneForwardedIcon from '@material-ui/icons/PhoneForwarded';
import { Link } from 'react-router-dom';
import * as S from './styles';
import { motion } from 'framer-motion';

const MyComp = lazy(() => import('../../components/MyComp/myComp'));
const Row = React.lazy(() => import('antd/lib/grid/row'));
const Col = React.lazy(() => import('antd/lib/grid/col'));

const useStyles = makeStyles((theme) => ({
  icon: {
    margin: 0, // no extra spacing here
    color: 'rgb(209, 29, 50)',
    fontSize: 28,
    transition: 'color 0.3s ease-in-out',
    '&:hover': {
      color: 'rgb(170, 20, 40)',
    },
  },
}));

const Header = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const showDrawer = () => setOpen(true);
  const onClose = () => setOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1023 && open) {
        setOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [open]);

  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
  }, [open]);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setOpen(false);
  };

  const MenuItem = () => (
    <Fragment>
      <div style={{ textAlign: 'center' }} id="hamburger-menu">
        <S.CustomNavLinkSmall
          href="#"
          onClick={(e) => {
            e.preventDefault();
            scrollToTop();
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <HomeIcon className={classes.icon} />
          </motion.div>
          <S.Span>
            <span>Home</span>
          </S.Span>
        </S.CustomNavLinkSmall>

        <S.CustomNavLinkSmall onClick={() => scrollTo('Service')}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.15, duration: 0.5 }}
          >
            <BuildIcon className={classes.icon} />
          </motion.div>
          <S.Span>
            <span>Services</span>
          </S.Span>
        </S.CustomNavLinkSmall>

        <S.CustomNavLinkSmall onClick={() => scrollTo('People')}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <InfoIcon className={classes.icon} />
          </motion.div>
          <S.Span>
            <span>About</span>
          </S.Span>
        </S.CustomNavLinkSmall>

        <S.CustomNavLinkSmall onClick={() => scrollTo('Review')}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.25, duration: 0.5 }}
          >
            <RateReviewIcon className={classes.icon} />
          </motion.div>
          <S.Span>
            <span>Reviews</span>
          </S.Span>
        </S.CustomNavLinkSmall>

        <S.CustomNavLinkSmall onClick={() => scrollTo('Team')}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <ContactMailIcon className={classes.icon} />
          </motion.div>
          <S.Span>
            <span>Contact</span>
          </S.Span>
        </S.CustomNavLinkSmall>

        <S.CustomNavLinkSmall>
          <div>
            <a href="tel:02-9419-7947">
              <h6
                style={{
                  color: 'black',
                  fontSize: 20,
                  textAlign: 'center',
                  paddingTop: '0',
                }}
              >
                <S.CustomNavLinkSmall noHover>
                  <div id="ButtonMain">
                    <Button
                      classes={{
                        root: 'buttonMainHeader',
                        label: 'button-label-main',
                      }}
                      style={{
                        marginBottom: 0,
                        marginTop: 0,
                        // background: '#FFF',
                        // color: 'rgb(209, 29, 50)',
                        fontSize: '1rem',
                        fontWeight: 600,
                        width: '100%',
                        // border: '2px solid rgb(209, 29, 50)',

                        border: '2px solid  rgb(209, 29, 50)',
                        borderRadius: '8px',
                        height: '55px',
                        right: '0',
                        outline: 'none',
                        cursor: 'pointer',
                        maxWidth: '180px',
                      }}
                    >
                      <p className="p-Call-us-now-main"> Call us now </p>
                      <PhoneForwardedIcon
                        className={classes.icon}
                        style={{
                          width: '0.6em',
                          marginBottom: '6px',
                          color: 'black',
                        }}
                      />
                    </Button>
                  </div>
                </S.CustomNavLinkSmall>
              </h6>
            </a>
          </div>
        </S.CustomNavLinkSmall>
      </div>
    </Fragment>
  );

  return (
    <S.Header>
      <S.Container>
        <Row
          type="flex"
          justify="space-between"
          gutter={20}
          id="logo-hamburger"
        >
          <S.LogoContainer to="/" aria-label="homepage" onClick={scrollToTop}>
            <Suspense
              fallback={
                <Loader
                  type="Rings"
                  color="#00BFFF"
                  height={100}
                  width={100}
                  timeout={3000}
                />
              }
            >
              <MyComp rel="preload" />
            </Suspense>
          </S.LogoContainer>

          <S.NotHidden>
            <MenuItem />
          </S.NotHidden>

          <S.Burger
            onClick={showDrawer}
            className={open ? 'burger burger--open' : 'burger burger--closed'}
          >
            <S.Outline />
          </S.Burger>
        </Row>

        <CSSTransition
          in={open}
          timeout={350}
          classNames="NavAnimation"
          unmountOnExit
        >
          <Drawer
            closable
            open={open}
            onClose={onClose}
            className="custom-drawer"
          >
            <Col>
              <S.Label onClick={onClose} style={{ textAlign: 'center' }}>
                <Col span={12}>
                  <S.Menu>Menu</S.Menu>
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

export default Header;
