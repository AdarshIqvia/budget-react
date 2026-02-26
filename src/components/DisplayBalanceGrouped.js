import React from 'react'
import { Segment, Grid } from 'semantic-ui-react';
import DisplayBalance from './DisplayBalance';
function DisplayBalanceGrouped() {
  return (
    <div>
         <Segment color='red'>
        
        <Grid columns={2} divided>
          <Grid.Column>
            <DisplayBalance title="Incoming" value="$5,000" color="green"  />
          </Grid.Column>

          <Grid.Column>
          <DisplayBalance title="Expenses" value="$2,000" color="red"  />
          </Grid.Column>
        </Grid>
      
    </Segment>
    </div>
  )
}

export default DisplayBalanceGrouped