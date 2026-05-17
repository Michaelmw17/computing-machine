import React, { useState, Fragment, useEffect } from 'react';
import './stylesHeader.css';
import '../../globalStyles';
import { Button } from '@mui/material';
import { Row } from 'antd';
import { Drawer } from 'antd';
import { makeStyles } from '@mui/styles';
import { Build as BuildIcon } from '@mui/icons-material';
import { Info as InfoIcon } from '@mui/icons-material';
import { Home as HomeIcon } from '@mui/icons-material';
import { RateReview as RateReviewIcon } from '@mui/icons-material';
import { ContactMail as ContactMailIcon } from '@mui/icons-material';
import { PhoneForwarded as PhoneForwardedIcon } from '@mui/icons-material';
import * as S from './styles';
import BrandLogo from '../../components/BrandLogo';

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
      if (window.innerWidth >= 992 && open) {
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
      const headerOffset = 99;
      // Anchor to the first heading inside the section so section padding
      // doesn't push the title to the middle of the viewport. If the id is
      // on an empty marker div, look inside the next sibling.
      let target = element.querySelector('h1, h2, h3, h4');
      if (
        !target &&
        element.children.length === 0 &&
        element.nextElementSibling
      ) {
        target =
          element.nextElementSibling.querySelector('h1, h2, h3, h4') ||
          element.nextElementSibling;
      }
      target = target || element;
      // Use offsetTop chain (not getBoundingClientRect) so any framer-motion
      // transform on a parent — e.g. the Carousel's initial translateY(100) —
      // doesn't shift the computed target position.
      let absoluteTop = 0;
      for (let el = target; el; el = el.offsetParent) {
        absoluteTop += el.offsetTop;
      }
      window.scrollTo({ top: absoluteTop - headerOffset, behavior: 'smooth' });
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
          <HomeIcon className={classes.icon} />
          <S.Span>
            <span>Home</span>
          </S.Span>
        </S.CustomNavLinkSmall>

        <S.CustomNavLinkSmall onClick={() => scrollTo('Service')}>
          <BuildIcon className={classes.icon} />
          <S.Span>
            <span>Services</span>
          </S.Span>
        </S.CustomNavLinkSmall>

        <S.CustomNavLinkSmall onClick={() => scrollTo('People')}>
          <InfoIcon className={classes.icon} />
          <S.Span>
            <span>About</span>
          </S.Span>
        </S.CustomNavLinkSmall>

        <S.CustomNavLinkSmall onClick={() => scrollTo('Review')}>
          <RateReviewIcon className={classes.icon} />
          <S.Span>
            <span>Reviews</span>
          </S.Span>
        </S.CustomNavLinkSmall>

        <S.CustomNavLinkSmall onClick={() => scrollTo('Team')}>
          <ContactMailIcon className={classes.icon} />
          <S.Span>
            <span>Contact</span>
          </S.Span>
        </S.CustomNavLinkSmall>

        <S.CustomNavLinkSmall>
          <div>
            <a
              href="tel:02-9419-7947"
              aria-label="Call JDP Electrical on (02) 9419 7947"
            >
              <span
                style={{
                  color: 'black',
                  fontSize: 20,
                  textAlign: 'center',
                  paddingTop: '0',
                  display: 'block',
                }}
              >
                <S.CustomNavLinkSmall noHover>
                  <div id="ButtonMain">
                    <Button
                      className="call-us-button"
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
                      <p className="call-us-label">Call us now</p>
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
              </span>
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
            <BrandLogo rel="preload" />
          </S.LogoContainer>

          <S.NotHidden>
            <MenuItem />
          </S.NotHidden>

          <S.Burger
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={showDrawer}
            className={open ? 'burger burger--open' : 'burger burger--closed'}
          >
            <S.Outline />
          </S.Burger>
        </Row>

        <Drawer
          closable
          closeIcon={<S.DrawerCloseIcon />}
          open={open}
          onClose={onClose}
          className="custom-drawer"
          title="Menu"
          placement="right"
          width={320}
          headerStyle={{ borderBottom: '1px solid #f0f0f0' }}
        >
          <MenuItem />
        </Drawer>
      </S.Container>
    </S.Header>
  );
};

export default Header;
