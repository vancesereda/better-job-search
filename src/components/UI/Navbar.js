import React from 'react';
import { Grid,
        Button,
        Divider,
        Segment } from 'semantic-ui-react';

const paddingOverride = {
    paddingTop:'0.5rem',
    paddingBottom:'0.5rem'
}

const Navbar = () => (
    <nav>
        <Grid columns={3}>
          <Grid.Column width={14} style={paddingOverride}>
          <h3>Search for Jobs</h3>
          </Grid.Column>
  
        <Grid.Column width={2} style={paddingOverride}>
          <Button basic color='blue' size='tiny'>
          Log in
          </Button>

        </Grid.Column>
        <Divider />
        </Grid>
    </nav>
)

export default Navbar;
  