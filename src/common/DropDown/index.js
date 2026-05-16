import makeStyles from '@mui/styles/makeStyles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './Styles.css'
const useStyles = makeStyles((theme) => ({
  formControl: {
     margin: theme.spacing(1),
    minWidth: 210,
    maxWidth: 320,
    marginTop:-0,
    marginBottom:0,
    marginLeft:-1,

  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
export default function SimpleSelect() {
   const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
     <FormControl className={classes.formControl} id="menu">
        <InputLabel id="demo-simple-select-label">What can we help you with? *</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
          className={classes.selectEmpty}
        >
          <MenuItem value={"Residential"}>Residential</MenuItem>
          <MenuItem value={"Strata / Property Maintenance"}>Strata / Property Maintenance</MenuItem>
          <MenuItem value={"Commercial"}>Commercial</MenuItem>
          <MenuItem value={"Other"}>Other</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}