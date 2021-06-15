import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import './RStyle.css'

const words = ['Fire detector and evacuation systems ', ];
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

    paddingRight: 20,
  },
}));

export default function PinnedSubheaderList() {
  const classes = useStyles();

  return (
    <List className={classes.root} subheader={<li />}>
    <p style={{ fontSize: 20,color: '#FFF', textTransform: 'uppercase'}}>Fire Detectors</p>
          <ul className={classes.ul}>
              <ul className='list-unstyled'>
              {items} 
              </ul>
          </ul>
      
    </List>
  );
}