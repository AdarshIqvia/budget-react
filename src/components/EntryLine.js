import React from 'react'
import { Segment, Grid, Icon } from 'semantic-ui-react';

function EntryLine({description,value, isExpense=false}) {
  return (
    <div>
          <Segment  color={isExpense ? 'red' : 'green'}>
        <Grid columns={3} style={{ fontSize: '1rem' ,textAlign:'right'}}>
          <Grid.Row>
            <Grid.Column width={10} textAlign='left'>{description}</Grid.Column>
            <Grid.Column width={3} textAlign='right'>{value}</Grid.Column>
           
            <Grid.Column width={3}>
              <Icon name="edit"  bordered/>
            <Icon name="trash"  bordered/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  )
}

export default EntryLine