import { makeStyles } from '@mui/styles';

const words = [
  'Repairs & Maintenance',
  'Renovations & New Builds',
  'Clipsal Cbus Automation',
  'Switchboard Upgrades',
  'Safety Switch protection',
  '  Smoke Detectors',
  'General Power Outlets',
  'LED Lighting upgrade',
  'Security & Garden Lighting',
  'Ceiling Sweep Fans',
  'Appliance installations & Repairs',
  'TV – DATA – Communications',
];

const useStyles = makeStyles((theme) => ({
  list: {
    width: '100%',
    maxWidth: 360,
    maxHeight: 266,
    backgroundColor: 'rgb(209, 29, 50)',
    color: '#FFF',
    position: 'relative',
    paddingLeft: 40,
    paddingRight: 25,
    margin: 0,
    borderRadius: '15px',
    listStyle: 'none',
  },
}));

export default function PinnedSubheaderList() {
  const classes = useStyles();

  return (
    <ul className={classes.list} aria-label="Residential services">
      {words.map((word, e) => (
        <li key={e}>{word}</li>
      ))}
    </ul>
  );
}
