import React, {useEffect} from 'react';


import {useSelector, useDispatch} from 'react-redux';

import {deleteEvent, getlistOfEvents}  from '../../redux-core/actions/list';

import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';





const DeletePage = () => {
  const dispatch = useDispatch();

  const events = useSelector(state => state.list.data);
    useEffect( () => {
     dispatch(getlistOfEvents());
      },  [] // we add [] to ensure that containers renders once component did mount
  );
  console.log(events)

  const handleDelete = (eventId) => () => {
console.log(eventId);
//1.Remove event from redux-state;
//2. Remove event from server;

dispatch(deleteEvent(eventId));

const options = {
       method: "POST",
       body: JSON.stringify({id: eventId}),
       credentials: 'omit',
       //setting the headers
       headers:{
       'Content-Type': 'application/json'
      },
     };




fetch(`http://localhost:3000/api/events/destroy`, options).catch(console.error)


  }

  return (
    <Container maxWidth='sm'>
    <Typography variant='h6' color='secondary'> Delete Events </Typography>

    <List>
    {events.map(event => (
      <ListItem key={event.id}>
       <ListItemText primary={event.name} />

        <ListItemSecondaryAction>
         <Button onClick={handleDelete(event.id)} variant='outlined' color='secondary' > Delete </Button>
         </ListItemSecondaryAction>
      </ListItem>
    ))}
    </List>

    </Container>
  )
};

export default DeletePage;
