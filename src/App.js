import logo from './logo.svg';
import './App.css';
import { Navbar } from 'react-bootstrap';
import UserList from './Components/UserList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Workshop API</h1>
      <UserList />
    </div>
  );
}

export default App;
