import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {TextField, Button, Typography} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: '2rem'
  },

}));

function Save(props) {
  const classes = useStyles();
  const { home,id,name,descriptions,change,isUpdate,save } = props;
  return (
    <div>
      <TextField 
      className= {classes.root}
      label= "User Id"
      disabled= {isUpdate}
      name= "id"
      value= {id}
      onChange= {change}
      />
      <TextField 
      className={classes.root} 
      label="User Name" 
      name="name"
      value={name}
      onChange={change}

      />
      <TextField 
      className={classes.root} 
      label="User Descriptions"
      name= "descriptions"
      value={descriptions}
      onChange={change}
        
        multiline
        row={3}
      />
      <Typography className={classes.root}>
      <Button onClick={save} variant="contained" color="primary">
        save
      </Button>
      <Button onClick={home} style={{marginLeft:'1rem'}} variant="contained" color="secondary">
        Go to Homepage
      </Button>
      </Typography>
      
    </div>
  )
}
export default Save;
