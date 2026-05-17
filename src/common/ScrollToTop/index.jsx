import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import { IconButton } from '@mui/material';
import { KeyboardArrowUp as KeyboardArrowUpIcon } from '@mui/icons-material';
import * as S from './styles';

const SHOW_AFTER_PX = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      color: 'white',
      background: 'rgb(178, 4, 24)',
      '&:hover': {
        backgroundColor: 'rgb(240, 4, 32)',
      },
    },
  },
}));

const ScrollToTopButton = () => {
  const classes = useStyles();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Hide while the mobile drawer is open — Header toggles this body class.
      const drawerOpen = document.body.classList.contains('menu-open');
      setVisible(!drawerOpen && window.scrollY > SHOW_AFTER_PX);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    // React to drawer open/close even when the user isn't scrolling.
    const observer = new MutationObserver(onScroll);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <S.Up onClick={scrollUp} aria-label="Back to top">
      <div className={classes.root}>
        <IconButton color="secondary" aria-label="Back to top" size="large">
          <KeyboardArrowUpIcon />
        </IconButton>
      </div>
    </S.Up>
  );
};

export default ScrollToTopButton;
