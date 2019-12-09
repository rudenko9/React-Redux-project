import React from 'react';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField';

const CreateEvents = () => {
  return(
    <main>
    <br/>
      <Typography variant='h3' color='secondary'> You can create event here </Typography>

      <form noValidate autoComplete='off' className='App-create-form'>
        <TextField label='Event name' variant='outlined' margin="normal" placeholder="Event name"/>
        <TextField label='Address'  variant='outlined' margin="normal" placeholder="address"/>
        <TextField label='Date_Time' variant='outlined' margin="normal" placeholder="Date & Time"/>
        <TextField label='Price' variant='outlined' margin="normal" placeholder="Price"/>
        <TextField label='Image' variant='outlined' margin="normal" placeholder="image url"/>
        <TextField label='Phone_Number' variant='outlined' margin="normal" placeholder="Phone Number"/>

      <Button color='default' variant='outlined'> Save your event</Button>

       </form>
     </main>
  )
}

export default CreateEvents;
