import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Button, } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        marginTop: '2rem'
    },
    spaceTop:{
        marginTop: '2rem', //1 rem means around 16 px;
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

function Card(props) {
    const classes = useStyles();
    const {name,descriptions,delet,edit}= props;
    return (
        <div className={classes.root}>
            <Accordion className={classes.spacetop}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>{name}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {descriptions}
                    </Typography>
                    <Typography align="right" className={classes.root}>
                        <Button onClick={ edit } color="primary">Edit</Button>
                        <Button onClick={ delet } color="secondary">Delete</Button>
                    </Typography>
                </AccordionDetails>
            </Accordion> 
        </div>
    )
}

export default Card;
