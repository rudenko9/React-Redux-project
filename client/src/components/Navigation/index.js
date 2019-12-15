// stateless component

import React from 'react';
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const Navigation = () => {
  const history = useHistory();

  const currentPath = history.location.pathname;// pathname '/create', '/delete'

  const handleClick = path => () => {
    history.push(path);

  };

  return(
    <nav>
       <Button disabled={currentPath=== '/about' }color='secondary' variant='contained' onClick={handleClick('/about' )}> Info about App  </Button>
       <Button disabled={currentPath=== '/' }color='secondary' variant='contained'  onClick={handleClick('/' )}> Home  </Button>
       <Button disabled={currentPath=== '/eventcreate' }color='primary' variant='contained' onClick={handleClick('/eventcreate' )}> Create  </Button>
       <Button disabled={currentPath=== '/delete' }color='secondary' variant='contained' onClick={handleClick('/delete' )}> Delete  </Button>

  </nav>
  )
};

export default Navigation;
