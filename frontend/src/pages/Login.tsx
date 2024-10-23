import { Container, Typography } from '@mui/material'
import { useState } from 'react'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';

function Login() {


  return (
    <>
      <Container>
        <Typography variant='h1'>Ejemplo de color</Typography>
        <Typography variant='h1' color='primary'>Ejemplo de color</Typography>
        <Typography variant='h1' color='secondary'>Ejemplo de color</Typography>

        <Typography variant='h1' color='error'>Ejemplo de color</Typography>
        <Typography variant='h1' color='warning'>Ejemplo de color</Typography>
        <Typography variant='h1' color='success'>Ejemplo de color</Typography>


        <Typography variant='h2'>EJEMPLO h2.</Typography>
        <Typography variant='h2' color='primary'>EJEMPLO h2.</Typography>
        <Typography variant='h2' color='secondary'>EJEMPLO h2.</Typography>


        <Typography variant='h3'>EJEMPLO h3.</Typography>
        <Typography variant='h3' color='primary'>EJEMPLO h3.</Typography>
        <Typography variant='h3' color='secondary'>EJEMPLO h3.</Typography>


        <Typography variant='h4'>EJEMPLO h4.</Typography>
        <Typography variant='h5' color='primary'>EJEMPLO h5.</Typography>


        <Typography variant='subtitle1'>subtitle.</Typography>
        <Typography variant='subtitle1' color='primary'>subtitle.</Typography>
        <Typography variant='subtitle1' color='secondary'>subtitle.</Typography>

        <Typography variant='caption'>caption.</Typography>
        <Typography variant='caption' color='primary'>caption.</Typography>
        <Typography variant='caption' color='secondary'>caption.</Typography>

        <br /><br />
      </Container>

      {/* Para el region error */}
      <footer>
        <Grid container spacing={4}>
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Grid>


        <br /><br />

        <Grid container spacing={4}>
          <Button variant="text" color='secondary'>Text</Button>
          <Button variant="contained" color='secondary'>Contained</Button>
          <Button variant="outlined" color='secondary'>Outlined</Button>
        </Grid>

        <br /><br />

        <Grid container spacing={4}>
          <Button variant="text" color='error'>Text</Button>
          <Button variant="contained" color='error'>Contained</Button>
          <Button variant="outlined" color='error'>Outlined</Button>
        </Grid>


        <br /><br />

        <Grid container spacing={4}>
          <Button variant="text" color='success'>Text</Button>
          <Button variant="contained" color='success'>Contained</Button>
          <Button variant="outlined" color='success'>Outlined</Button>
        </Grid>


        <br /><br />

        <Grid container spacing={4}>
          <Button variant="text" color='warning'>Text</Button>
          <Button variant="contained" color='warning'>Contained</Button>
          <Button variant="outlined" color='warning'>Outlined</Button>
        </Grid>
      </footer>

    </>
  )
}

export default Login
