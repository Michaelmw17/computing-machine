import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import './RStyle.css'

const words = ['Repairs & Maintenance', 'Renovations & New Builds', 'Clipsal Cbus Automation', 'Switchboard Upgrades', 'Safety Switch protection','  Smoke Detectors','General Power Outlets', 'LED Lighting upgrade','Security & Garden Lighting', 'Ceiling Sweep Fans', 'Appliance installations & Repairs', 'TV – DATA – Communications',];

const items = words.map((word, e) => {
    return <li key={e}>{word}</li>;
});
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: 'rgb(209, 29, 50)',
    position: 'relative',
    maxHeight: 300,
    color: '#FFF'
  },
  listSection: {
    backgroundColor: 'rgb(209, 29, 50)',
  },
  ul: {
     backgroundColor: 'rgb(209, 29, 50)',
    padding: 0,
    paddingRight: 20,
    borderRadius: '15px',
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