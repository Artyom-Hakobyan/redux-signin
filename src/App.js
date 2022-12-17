import { useSelector } from 'react-redux';
import './App.css';
import LoginComponent from './components/LoginComponent';

function App() {
  const users = useSelector(state => state.users)

  return (
    <div className="App">
      <p>Here are some Users</p>
      {users.map(user => <div key={Math.random()*10000}>{user.username} - {user.password}</div>)}
      <LoginComponent />
    </div>
  );
}

export default App;
