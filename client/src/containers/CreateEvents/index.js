import React, {useState} from 'react';

import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField';



const CreateEvents = () => {

  const [state, setState] = useState({
    name: '',
    address: '',
    date_time: '',
    price: '',
    image: '',
    phone_number: ''
  });


  const handleOnChange = (label) => (event) => {
    const value = event.target.value
    if (value.length > 35) return;
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
    .then(res => {
      console.log( res);
     }
    )
    .catch(console.error)
};

  return(
    <main>

    <br/>
      <Typography variant='h5' color='secondary'>Here you can any create event</Typography>

      <form noValidate autoComplete='off' className='App-column-center'>

        <TextField onChange={handleOnChange('name')} value={state.name}  label='Event name' variant='outlined' margin="small" placeholder="Event name"/>
        <TextField onChange={handleOnChange('address')} value={state.address} label='Address'  variant='outlined' margin="small" placeholder="address"/>
        <TextField onChange={handleOnChange('date_time')} value={state.date_time} label='Date_Time' variant='outlined' margin="small" placeholder="Date & Time"/>
        <TextField onChange={handleOnChange('price')} value={state.price} label='Price' variant='outlined' margin="small" placeholder="Price"/>
        <TextField onChange={handleOnChange('image')} value={state.image} label='Image' variant='outlined' margin="small" placeholder="image url"/>
        <TextField onChange={handleOnChange('phone_number')} value={state.phone_number} label='Phone_Number' variant='outlined' margin="small" placeholder="Phone Number"/>

      <Button color='default' variant='outlined' onClick={handleSave} > Save your event </Button>

       </form>

     </main>
  )
}

export default CreateEvents;
