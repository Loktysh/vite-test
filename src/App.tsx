import { Link, Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
        }}
      >
        <Link to='/'>Home</Link>
        <Link to='/products'>Products</Link>
        <Link to='/favourite'>Favourite</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
