import { useSelector, useDispatch } from 'react-redux';
import './App.css'
import { login, logout, register } from './app/features/UserSlice';
import { ReducerStoreType, ReducerDispatchType } from './app/store';

function App() {
  const user = useSelector((state: ReducerStoreType) => state.user);
  const dispatch: ReducerDispatchType = useDispatch();
  console.log('user - ', user);
  return (
    <div>
      <div>
        <h3>Name: {user.name}</h3>
        <h3>FirstName: {user.firstName}</h3>
        <h3>Lastname: {user.LastName}</h3>
        <h3>Email: {user.email}</h3>
        <h3>isLoggedIn: {`${user.isLoggedIn}`}</h3>
      </div>
      <div><button onClick={() => dispatch(login())}>LogIn</button></div>
      <div><button onClick={() => dispatch(logout())}>LogOut</button></div>
      <div><button onClick={() => dispatch(register())}>Register</button></div>
    </div>
  )
}

export default App
