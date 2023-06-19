import './App.css';
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import UsersPage from './Pages/UsersPage/UsersPage';
import UserPage from './Pages/UserPage/UserPage';

function App() {
  return (
    <div className="App">

<nav className='main-navigation'>
        <ul className='nav-list'>
          <li className='nav-item'>
            <NavLink to='/' className='nav-link'>Home</NavLink>
          </li>

          <li className='nav-item'>
            <NavLink to='/UsersPage' className='nav-link'>Users</NavLink>
          </li>

          <li className='nav-item'>
            <NavLink to='/UserPage' className='nav-link'>User</NavLink>
          </li>
        </ul>
      </nav>
      
      <Routes>
            <Route path='/UsersPage' element={<UsersPage />} />
            <Route path='/UserPage' element={<UserPage />} />

            <Route path='/' element={ 
              <div>
                <h1>HomePage</h1>
                <p>This is Home Page under construction...</p>
              </div>
              } />
            <Route path='*' element={
              <div>
                <h1>404 error. Page not found.</h1>
                <Link to='/'>Go Back to HomePage</Link>
              </div>
              } />
        </Routes>

    </div>
  );
}

export default App;
