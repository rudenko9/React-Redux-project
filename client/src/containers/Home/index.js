import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router';
import {useDispatch, useSelector} from 'react-redux';
import {getlistOfEvents} from '../../redux-core/actions/list';

import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';



const initState = {
  lessthanforty: false,
  //sorted: false,
}

const Home = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const listOfItems = useSelector(state => state.list.data);

const [list, setList] = useState([]);

const [{lessthanforty, sorted}, setState] = useState(initState);

useEffect( () => {
   dispatch(getlistOfEvents());
},  []); // we add [] to ensure that containers renders once component did mount);


useEffect(() => {
  setList(listOfItems)
}, [listOfItems]);

const handleOpenDetails = eventId => () => {
 history.push(`/eventdescription/${eventId}`);
};


useEffect(() => {
  if(lessthanforty){
    const filtered = list.filter((event) => event.price <= 40)
     setList(filtered)
   }else{
    setList(listOfItems)
      }
 }, [lessthanforty]);


useEffect(() => {
  if(sorted){
     const sortByName = [...list].sort((a,b) => a.name.localeCompare(b.name))
      setList(sortByName)
  }else{
     const sortByPrice = [...list].sort((a, b) => a.price - b.price)
       setList(sortByPrice)
  }
}, [ sorted]);


  return(
    <section>
      <Typography variant='h4' > List of favorite Events </Typography>
      <List className='App-column-center'>
        <input type='checkbox' onClick={() => setState((preState) => ({...preState, lessthanforty: !lessthanforty}))} /> less than forty
       <input type='checkbox' onClick={() => setState((preState) => ({...preState, sorted: !sorted}))} /> Alphabetical order

           {list.map(event => (
           <ListItem key={event.id}  button onClick={handleOpenDetails(event.id)}>

          <Typography align='center'  color='secondary' style={{width: '100%'}}>{event.name}</Typography>
          </ListItem>
       ))}

      </List>
   </section>
  )
};

export default Home;
