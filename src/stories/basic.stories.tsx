import React from 'react';
import { Story, Meta } from '@storybook/react';
import Box from '../components/box/Box';
import Grid, { IGridProps } from '../components/grid/Grid';
import GridRuler from '../components/grid-ruler/GridRuler';
import AppDecorator from './support/AppDecorator';

export default {
  title: 'Grid',
  component: Grid,
} as Meta;

const gridProps: IGridProps = {
  container: true,
  spacing: 'sm',
  style: { height: '100%' },
  alignItems: 'center'
};

const childGridProps: IGridProps = {
  item: true,
  xs: 12,
  sm: 6,
  md: 4,
  lg: 3
};

const singleChildGridProps: IGridProps = {
  item: true,
  xs: 1,
};

const numbers = [1,2,3,4];

export const Basic: Story = (args) => (
  <AppDecorator>
    <Grid {...gridProps} {...args}>
      {numbers.map((num: number) => (
        <Grid {...childGridProps}>
          <Box>
            Box {num}
          </Box>
        </Grid>
      ))}
    </Grid>
  </AppDecorator>
);

export const WithRuler: Story = (args) => (
  <AppDecorator>
    <Grid {...gridProps} {...args}>
      <GridRuler spacing='sm' />
      {numbers.map((num: number) => (
        <Grid {...childGridProps}>
          <Box>
            Box {num}
          </Box>
        </Grid>
      ))}
    </Grid>
  </AppDecorator>
);

export const Interactive: Story = (args) => (
  <AppDecorator>
    <Grid {...gridProps} {...args}>
      {numbers.map((num: number) => (
        <Grid {...singleChildGridProps}>
          <Box>
            Box {num}
          </Box>
        </Grid>
      ))}
    </Grid>
  </AppDecorator>
);
