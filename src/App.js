import './App.css';
import AddTracsaction from './componant/AddTracsaction';
import Balance from './componant/Balance';
import { Header } from './componant/Header';
import IncomeExpenses from './componant/IncomeExpenses';
import TransactionList from './componant/TransactionList';
import { GlobalProvider } from './context/GlobalState';
function App() {

  return (
    <GlobalProvider>
   <Header/> 
   <Balance/>
   <IncomeExpenses/>
   <TransactionList/>
   <AddTracsaction/>
    </GlobalProvider>
  );
}

export default App;
