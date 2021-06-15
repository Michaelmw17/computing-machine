import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import './RStyle.css'

const words = ['All security/CCTV solution installations to ensure you will be made to feel secure in your home ', ];
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
    backgroundColor: 'black',
    padding: 0,
    paddingRight: 20,
    borderRadius: '15px',
  },
}));

export default function PinnedSubheaderList() {
  const classes = useStyles();

  return (
    <List className={classes.root} subheader={<li />}>
    <p style={{ fontSize: 20,color: '#FFF', textTransform: 'uppercase'}}>Security</p>
          <ul className={classes.ul}>
              <ul className='list-unstyled'>
              {items} 
              </ul>
          </ul>
      
    </List>
  );
}