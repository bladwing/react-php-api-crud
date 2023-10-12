import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import CreateUser from './components/CreateUser';
import EditUser from './components/EditUser';
import ListUser from './components/ListUser';

import './App.css';

function App() {
  return (
    <div className="App">
      <h5>React CRUD operations using PHP API and MySQL</h5>

      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/" className='btn btn-primary'>List Users</Link>
            </li>
            <li>
              <Link to="user/create"className='btn btn-primary'>Create User</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route index element={<ListUser />} />
          <Route path="user/create" element={<CreateUser />} />
          <Route path="user/:id/edit" element={<EditUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
