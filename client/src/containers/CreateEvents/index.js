import React, {useState} from 'react';

import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField';
import {useDispatch} from 'react-redux';
import {addlistOfEvents} from '../../redux-core/actions/list';

const initState = {
  name: '',
  address: '',
  date: '',
  price: '',
  image: '',
  phone_number: ''
};

const CreateEvents = () => {
  const dispatch = useDispatch();

  const [state, setState] = useState(initState);


  const handleOnChange = (label) => (event) => {
    const value = event.target.value
    if (value.length > 350) return;
    setState(preState => ({...preState, [label]: value}))
  }

const handleSave = () => {

const data = {
...state,
}

  const options = {
         method: "POST",
         body: JSON.stringify(state),
         credentials: 'omit',
         //setting the headers
         headers:{
         'Content-Type': 'application/json', Accept: "application/json"
        },
       };

       fetch(`http://localhost:3000/api/events/create`, options)
       .then(res => res.json())
       .then(res => {
         dispatch(addlistOfEvents(res));
        console.log( res);
        setState(initState);
        alert('Your event was successfully created!!!!');
     })
    .catch(console.error)
};

  return(
    <main>

    <br/>
      <Typography variant='h5' color='secondary'>Here you can any create event</Typography>

      <form noValidate autoComplete='off' className='App-column-center'>
        <TextField onChange={handleOnChange('name')} value={state.name}  label='Event name' variant='outlined' margin='normal'  placeholder="Event name"/>
        <TextField onChange={handleOnChange('address')} value={state.address} label='Address'  variant='outlined'  margin='normal' placeholder="address"/>
        <TextField onChange={handleOnChange('date')} value={state.date} label='Date' variant='outlined' margin='normal'  placeholder="Date"/>
        <TextField onChange={handleOnChange('price')} value={state.price} label='Price' variant='outlined' margin='normal'  placeholder="Price"/>
        <TextField onChange={handleOnChange('image')} value={state.image} label='Image' variant='outlined' margin='normal'  placeholder="image url"/>
        <TextField onChange={handleOnChange('phone_number')} value={state.phone_number} label='Phone_Number' variant='outlined' margin='normal'  placeholder="Phone Number"/>

      <Button color='default' variant='outlined' onClick={handleSave} > Save your event </Button>

       </form>

     </main>
  )
}

export default CreateEvents;
