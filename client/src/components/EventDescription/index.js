import React , {useEffect} from 'react';
import {useParams} from 'react-router';
import {useDispatch, useSelector} from 'react-redux';
import {getlistOfEvents} from '../../redux-core/actions/list';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import Container from '@material-ui/core/Container';



const Eventdetails = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const selectedEventId = Number(params.id);

  const event = useSelector(state => state.list.data.find((event) => event.id === selectedEventId));
  console.log(event);

  useEffect(() => {
    dispatch(getlistOfEvents());
  }, []);

  if (!event) return <Typography> L O A D I N G . . . </Typography>

  return(
    <Container maxWidth='sm'>
     <Typography variant='h4' color='secondary'> Event Descripiton </Typography>
     <br/>

     <Paper elevation={9} style={{padding: '34px'}}>
       <img  src={event.image}  alt='Image of event' style={{maxWidth: '400px'}}/>
       <Typography  align='center' variant='h5' color='secondary'> {event.name.charAt(0).toUpperCase() + event.name.slice(1)} </Typography>
       <Typography  gutterBottom> Location: {event.address} </Typography>
       <Typography  gutterBottom> Date: {event.date} </Typography>
       <Typography  gutterBottom> Price:  ${event.price} </Typography>
       <Typography  gutterBottom> Contact number: {event.phone_number} </Typography>

     </Paper>
   </Container>
  )
};

export default Eventdetails;
