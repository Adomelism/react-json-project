import './App.css';
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import UsersPage from './Pages/UsersPage/UsersPage';
import UserPage from './Pages/UserPage/UserPage';
import AlbumsPage from './Pages/AlbumsPage/AlbumsPage';
import AlbumPage from './Pages/AlbumPage/AlbumPage';
import PostsPage from './Pages/PostsPage/PostsPage';
import PostPage from './Pages/PostPage/PostPage';
import CommentsPage from './Pages/CommentsPage/CommentsPage';
import CommentPage from './Pages/CommentPage/CommentPage';
import CreatePost from './Pages/CreatePost/CreatePost';

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
            <NavLink to='/AlbumsPage' className='nav-link'>Albums</NavLink>
          </li>

          <li className='nav-item'>
            <NavLink to='/PostsPage' className='nav-link'>Posts</NavLink>
          </li>

          <li className='nav-item'>
            <NavLink to='/CommentsPage' className='nav-link'>Comments</NavLink>
          </li>
        </ul>
      </nav>
      
      <Routes>
            <Route path='/UsersPage' element={<UsersPage />} />
            <Route path='/users/:id' element={<UserPage />} />
            <Route path='/AlbumsPage' element={<AlbumsPage />} />
            <Route path='/albums/:id' element={<AlbumPage />} />
            <Route path='/PostsPage' element={<PostsPage />} />
            <Route path='/posts/:id' element={<PostPage />} />
            <Route path='/posts/create' element={<CreatePost />} />
            <Route path='/CommentsPage' element={<CommentsPage />} />
            <Route path='/comments/:id' element={<CommentPage />} />

            <Route path='/' element={ 
              <div className='content'>
                <h1>HomePage</h1>
                <p>This is Home Page under construction...</p>
              </div>
              } />
            <Route path='*' element={
              <div className='content'>
                <h1>404 error. Page not found.</h1>
                <Link to='/'>Go Back to HomePage</Link>
              </div>
              } />
        </Routes>

    </div>
  );
}

export default App;
