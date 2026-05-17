import { makeStyles } from '@mui/styles';

const words = [
  'Maintenance and repairs',
  'Lighting and power ',
  'Testing and tagging ',
  'Data points  ',
  'Smoke detectors',
  'Emergency lighting',
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
    paddingRight: 50,
    margin: 0,
    listStyle: 'none',
  },
}));

export default function PinnedSubheaderList() {
  const classes = useStyles();
  return (
    <ul className={classes.list} aria-label="Commercial services">
      {words.map((word, e) => (
        <li key={e}>{word}</li>
      ))}
    </ul>
  );
}
