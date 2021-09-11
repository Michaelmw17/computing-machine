import React from 'react';
import { makeStyles  } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './button.css'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      position: "relative",
      height: "110px",
      cursor: "pointer",
      borderRadius: "20%",
      marginTop: "150px",
      display: "block",
      marginRight: " auto",
      width: "50%",
      marginLeft: "90px",
    },
  },
}));


 export default  function OutlinedButtons() {
  const classes = useStyles();
 
  return ( 
    <div className={classes.root}>
      
      <div id="example1">
      <div id="example11">
     
        <Button
          title="Click to Enter"
          variant="outlined"
          color="primary"
          id="MainButton">
          
          <span style={{"position": "absolute",
          
            "top": "0", "left": "0",
            "display": "block",
            "width": "45%",
            "height": "10%",
            "background": "#66ffff",
            "borderRadius": "20%",
            "boxShadow": "0 0 50px #71d9ff,\n    inset 0 0 50px #71d9ff,\n    inset 0 1px 1px #000,\n    0 0 0 1px #000,\n    0 0 0 1px #000,\n    0 0  1px #000",
            "marginLeft": "13px",
            "marginTop": "20px",
            
          }}>
            </span>
        </Button>
      </div>
      </div>
    </div>
  );
}
