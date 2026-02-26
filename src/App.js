import { Container } from 'semantic-ui-react';
import './App.css';
import MainHeader from './components/MainHeader';
import DisplayBalance from './components/DisplayBalance';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalanceGrouped from './components/DisplayBalanceGrouped';
import EntryLine from './components/EntryLine';


function App() {
  return (
    <Container>
      <MainHeader title="Budget Tracker App" />

      <DisplayBalance title="Current Balance" value="$10,000"  size='small'/>
       <DisplayBalanceGrouped />
      <MainHeader title="History"  type="h3"/>
      <EntryLine description="Fridge" value="6000" isExpense={true} />
      <EntryLine description="Salary" value="25000" isExpense={false} />
      <MainHeader title="Add New Transaction"  type="h3"/>
     <NewEntryForm />
     
    </Container>
  );
}

export default App;