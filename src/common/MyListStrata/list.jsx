import React from 'react';
import { makeStyles } from '@mui/styles';
import './style.css'

const words = [
    'Maintenance and repairs',
    'General power outlets',
    'Lighting control systems',
    'Main switchboards upgrades',
    'Switches and circuit breakers ',
    'Light and power points ',
    'Appliance installations and repairs  ',
    'Hot water repairs ',
    ' Preventative maintenance',
];

const useStyles = makeStyles((theme) => ({
  list: {
    width: '100%',
    maxWidth: 360,
    maxHeight: 300,
    backgroundColor: 'RGB(209, 29, 50)',
    color: '#FFF',
    position: 'relative',
    paddingLeft: 40,
    paddingRight: 30,
    margin: 0,
    listStyle: 'none',
  },
}));

export default function PinnedSubheaderList() {
  const classes = useStyles();

  return (
    <ul className={classes.list} aria-label="Strata and property maintenance services">
      {words.map((word, e) => (
        <li key={e}>{word}</li>
      ))}
    </ul>
  );
}
