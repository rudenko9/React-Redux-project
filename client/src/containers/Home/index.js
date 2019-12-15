import React, {useEffect} from 'react';
import {useHistory} from 'react-router';
import {useDispatch, useSelector} from 'react-redux';
import {getlistOfEvents} from '../../redux-core/actions/list';

import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';




const Home = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const listOfItems = useSelector(state => state.list);

useEffect( () => {
  dispatch(getlistOfEvents());
},  [] // we add [] to ensure that containers renders once component did mount

);

const handleOpenDetails = eventId => () => {
history.push(`/eventdescription/${eventId}`);

};

  return(
    <section>
<Typography variant='h4' > List of favorite Events </Typography>
<List className='App-column-center'>
{listOfItems.data.map(event =>
  <ListItem key={event.id} button onClick={handleOpenDetails(event.id)}>
    <Typography align='center' style={{width: '100%'}}>{event.name}</Typography>
  </ListItem>

 )}

</List>
     </section>
  )
};

export default Home;
