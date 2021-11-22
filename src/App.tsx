import React from 'react';
import Box from './components/box/Box';
import Grid from './components/grid/Grid';
import GridRuler from './components/grid-ruler/GridRuler';

const App = () => {
  return (
    <div className='App' style={{ margin: '16px', position: 'relative', height: '100vh' }}>
      <GridRuler spacing='sm' />
      <Grid
        container
        spacing='sm'
        justifyContent='space-around'
        style={{ height: '100%'}}
        alignItems='center'
      >
        <Grid item xs={12} sm={6} md={4} lg={1}>
          <Box>Box 1</Box>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={1}>
          <Box>Box 2</Box>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={1}>
          <Box>Box 3</Box>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={1}>
          <Box>Box 4</Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
