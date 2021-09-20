import LogInForm from './components/LogInForm';
import Dashboard from './components/Dashboard';
import './App.css';
import { useSelector } from 'react-redux';

function App() {

  const adminReducer = useSelector(state => state.adminReducer);

  return (
    <div className="app">
      
      {
        adminReducer.admin !== '' ? 
        <Dashboard /> :
        <LogInForm />
      }
      
    </div>
  );
}

export default App;
