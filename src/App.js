import { Container, Header, Statistic, Segment, Grid,Icon,Form,Button } from 'semantic-ui-react';
import './App.css';

function App() {
  return (
    <Container>
      <Header as='h1' textAlign='center'>Budget Tracker</Header>

      <Statistic size='small' color='green'>
        <Statistic.Label>Current Balance</Statistic.Label>
        <Statistic.Value>$10,000</Statistic.Value>
      </Statistic>
      <Segment color='red'>
        
          <Grid columns={2} divided>
            <Grid.Column>
              <Statistic size='small' color='green'>
                <Statistic.Label style={{ fontSize: '1.5rem' ,textAlign:'left'}}>Incoming:</Statistic.Label>
                <Statistic.Value>$5,000</Statistic.Value>
              </Statistic>
            </Grid.Column>

            <Grid.Column>
            <Statistic size='small' color='red'>
                <Statistic.Label style={{ fontSize: '1.5rem' ,textAlign:'left'}}>Expenses:</Statistic.Label>
                <Statistic.Value>$2,000</Statistic.Value>
              </Statistic>
            </Grid.Column>
          </Grid>
        
      </Segment>

      <Header as='h3' >History</Header>
      <Segment color='red'>
        <Grid columns={3} style={{ fontSize: '1.5rem' ,textAlign:'right'}}>
          <Grid.Row>
            <Grid.Column width={10} textAlign='left'>Fridge</Grid.Column>
            <Grid.Column width={3} textAlign='right'>6000</Grid.Column>
           
            <Grid.Column width={3}>
              <Icon name="edit"  bordered/>
            <Icon name="trash"  bordered/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment color='green'>
        <Grid columns={3} style={{ fontSize: '1.5rem' ,textAlign:'right'}}>
          <Grid.Row>
            <Grid.Column width={10} textAlign='left'>Salary</Grid.Column>
            <Grid.Column width={3} textAlign='right'>25000</Grid.Column>
           
            <Grid.Column width={3}>
              <Icon name="edit"  bordered/>
            <Icon name="trash"  bordered/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Header as='h3' >Add New Transaction</Header>
      
      <Form unstackable>
        <Form.Group>
          <Form.Input
          icon='tags'
          width={12}
          placeholder='New Jeans Pant'
          label="Description"
          
          />
          <Form.Input width={4} label='Value' placeholder='0' icon='dollar sign' iconPosition='left' />
        </Form.Group>

        <Button.Group style={{ marginTop: '20px' }}>
        <Button type='submit' primary>ok</Button>
        <Button.Or />
          <Button type='button' color='red'>Cancel</Button>
        </Button.Group>


      </Form>
     
    </Container>
  );
}

export default App;