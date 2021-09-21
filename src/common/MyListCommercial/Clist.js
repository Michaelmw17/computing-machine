import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import './Cstyle.css'

const words = [
  'Maintenance and repairs',
  'Lighting and power ',
  'Testing and tagging ',
  'Data points  ',
  'Smoke detectors',
  'Emergency lighting'
];
const items = words.map((word, e) => {
    return <li key={e}>{word}</li>;
});
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: 'RGB(209, 29, 50)',
    position: 'relative',
    maxHeight: 300,
    color: '#FFF'
    
  },
  listSection: {
    backgroundColor: 'RGB(209, 29, 50)',
  },
  ul: {
    backgroundColor: 'RGB(209, 29, 50)',
    padding: 0,
    paddingRight: 50,
  },
}));

export default function PinnedSubheaderList() {
  const classes = useStyles();
  return (
    <List className={classes.root} subheader={<li />}>
          <ul className={classes.ul}>
              <ul className='list-unstyled'>
              {items} 
              </ul>
          </ul>
    </List>
  );
}