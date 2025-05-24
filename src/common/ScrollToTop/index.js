import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import * as S from './styles';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      color: 'white',
      background: 'rgb(178, 4, 24)',

      // Add hover effect
      '&:hover': {
        backgroundColor: 'rgb(240, 4, 32)', // Hover background color
      },
    },
  },
}));
const Input = () => {
  const classes = useStyles();
  const scrollUp = () => {
    const element = document.getElementById('Main-Title');
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    });
  };

  return (
    <S.Up onClick={scrollUp}>
      <div className={classes.root}>
        <IconButton color="secondary" aria-label="add an alarm">
          <KeyboardArrowUpIcon />
        </IconButton>
      </div>
    </S.Up>
  );
};

export default Input;
