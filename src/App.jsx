import { RouterProvider } from 'react-router-dom';
import './App.css';
import routerConfig from './components/AppRouter';

function App() {
  return (
    <RouterProvider router={routerConfig} />
  );
}

export default App;

