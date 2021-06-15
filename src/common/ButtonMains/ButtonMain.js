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
          id="MainButton"
          style={{"position": "absolute",
            "top": "0", "left": "0",
            "display": "block",
            "width": "150%",
            "height": "60%",
            "borderRadius": "20%",
              "background": "linear-gradient(to bottom right, white, rgba(220,220,220,.5)), white",
              "boxShadow": "rgba(0, 23, 25, 0.2) 0px 19px 38px, #71d9ff 0px 5px 22px"
          }}>
          
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
